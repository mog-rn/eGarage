import { withIronSessionApiRoute } from "iron-session/next";

const cookie = {
    cookie: process.env.COOKIE_NAME,
    password: process.env.COOKIE_PASSWORD,
    cookieOptions: {secure: process.env.NODE_ENV === 'production'}
}

export default withIronSessionApiRoute(
    function signOut(req, res) {
        req.session.destroy()
        res.statusCode(200).json({ok: true})
    },
    cookie
)