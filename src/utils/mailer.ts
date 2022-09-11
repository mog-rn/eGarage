import nodemailer from "nodemailer";

export async function sendLoginEmail({
  email,
  url,
  token,
}: {
  email: string;
  url: string;
  token: string;
}) {
  const testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
  });

  const info = await transporter.sendMail({
    from: '"Fred Foo 👻" <j.doe@example.com>',
    to: email,
    subject: "✔Login to your account",
    text: "To login to your account, click the link below",
    html: `<ahref="${url}/login#token=${token}"></a>`,
  });

  console.log(`Preview URL: ${nodemailer.getTestMessageUrl(info)}`);
  
}
