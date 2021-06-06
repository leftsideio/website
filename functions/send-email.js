const nodemailer = require("nodemailer")

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
})
exports.handler = async function (event) {
  const { name, email, message, files } = JSON.parse(event.body)

  await transporter.sendMail({
    from: process.env.SMTP_USER,
    to: process.env.SMTP_USER,
    subject: `${name} - ${email}`,
    text: message,
    attachments: files.map(file => ({
      path: file,
    })),
  })

  return {
    statusCode: 200,
    body: "Success!",
  }
}
