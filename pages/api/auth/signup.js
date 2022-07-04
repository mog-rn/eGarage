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

const CreateUserMutation = gql`
  mutation CreateEgarageUser($userData: EgarageUserInput!) {
    createEgarageUser(data: $userData) {
      id
      email
      token
    }
  }
`;

export default async function handler(req, res) {
  const { email, password, first_name, last_name } = req.body;
  if (!email || !password || !first_name || !last_name) {
    return res.status(400).end()
  }

  const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
  const hashedPassword = await bcrypt.hash(password, 10);
  const userData = {
    email,
    password: hashedPassword,
    first_name,
    last_name,
    token,
  };

  const response = await client.request(CreateUserMutation, { userData });

  if (!response?.createUser) {
    return res.status(500).json({ error: 'Error creating user' });
  }
  res.status(200).json({ token });
}
