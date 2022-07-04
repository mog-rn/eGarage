import {withIronSessionApiRoute} from "iron-session/next"
import { GraphQLClient, gql } from "graphql-request";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

const cookie = {
  cookieName: process.env.COOKIE_NAME,
  password: process.env.COOKIE_PASSWORD,
  cookieOptions: { secure: process.env.NODE_ENV === 'production' },
};

const {GRAPHCMS_URL, GRAPHCMS_PERMANENTAUTH_TOKEN, JWT_SECRET} = process.env
const client = new GraphQLClient(GRAPHCMS_URL, {
    headers: {
        Authorization: `Bearer ${GRAPHCMS_PERMANENTAUTH_TOKEN}`
    }
})

const getUserByEmailQuery = gql`
    query getUserByEmailQuery($email: String!) {
        eGarageUser(where: {email: $email}, stage: DRAFT) {
            id
            email
            passowrd
        }
    }
`

const updateUserMutation = gql``