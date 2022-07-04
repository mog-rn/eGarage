import { GraphQLClient, gql } from 'graphql-request';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const {
  GRAPHCMS_URL,
  GRAPHCMS_PERMANENTAUTH_TOKEN,
  JWT_SECRET,
  JWT_EXPIRES_IN,
} = process.env;
const client = new GraphQLClient(GRAPHCMS_URL, {
  headers: {
    Authorization: `Bearer ${GRAPHCMS_PERMANENTAUTH_TOKEN}`,
  },
});

const createEGarageUserMutation = gql`
  mutation createEGarageUser($userData: EGarageUserCreateInput!) {
    createEGarageUser(data: $userData) {
      id
      email
      token
    }
  }
`;

export default async function handler(req, res) {
  const { email, password, firstname, lastname } = req.body;
  if (!email || !password || !firstname || !lastname) {
    return res.status(400).end();
  }

  const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
  const hashedPassword = await bcrypt.hash(password, 10);
  const userData = {
    email,
    password: hashedPassword,
    firstname,
    lastname,
    token,
  };

  const response = await client.request(createEGarageUserMutation, {
    userData,
  });

  if (!response?.createUser) {
    return res.status(500).json({ error: 'Error creating user' });
  }
  res.status(200).json({ token });
}
