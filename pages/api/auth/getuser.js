import { GraphQLClient, gql } from 'graphql-request';
import jwt from 'jsonwebtoken';

const { GRAPHCMS_URL, GRAPHCMS_PERMANENTAUTH_TOKEN, JWT_SECRET } = process.env;

const client = new GraphQLClient(GRAPHCMS_URL, {
  headers: {
    Authorization: `Bearer ${GRAPHCMS_PERMANENTAUTH_TOKEN}`,
  },
});

const getUserByEmailQuery = gql`
  query getUserByEmailQuery($emai: String!) {
    egarageUser(where: { email: $email }, stage: DRAFT) {
      email
      firstname
      lastname
    }
  }
`;

export default async function GetAuthenticatedUser(req, res) {
  const defaultReturnObject = { authenticated: false, user: null };

  try {
    const token = String(req?.header?.authorization?.replace('Bearer', ''));
    const decoded = jwt.verify(token, JWT_SECRET);
    const getUserResponse = await client.request(getUserByEmailQuery, {
      email: decoded.email,
    });
    const { egarageUser } = getUserResponse;

    if (!egarageUser) {
      res.status(400).json(defaultReturnObject);
      return;
    }
    res.status(200).json({ authenticated: true, user: egarageUser });
  } catch (e) {
    console.log('GetAuthenticatedUser, Something went wrong', e);
    res.status(400).json(defaultReturnObject);
  }
}
