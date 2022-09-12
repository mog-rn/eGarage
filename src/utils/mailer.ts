import nodemailer from 'nodemailer'

export async function sendLoginEmail({
  email,
  url,
  token,
}: {
  email: string | null
  url: string
  token: string
}) {
  const testAccount = await nodemailer.createTestAccount()

  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
  })

  const info = await transporter.sendMail({
    from: '"Jane Doe" <j.doe@example.com>',
    to: email,
    subject: 'Login to your account',
    html: `Login by clicking <a href="${url}/login#token=${token}">HERE</a>`,
  })

  transporter.verify(function (error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages");
    }
  });

  console.log(`Preview URL: ${nodemailer.getTestMessageUrl(info)}`)
}