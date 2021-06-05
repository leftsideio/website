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
  const { name, email, message, fileData } = JSON.parse(event.body)
  console.log(`Here are the files ${fileData}`)
  fileData.map(file => console.log(file))
  await transporter.sendMail({
    from: process.env.SMTP_USER,
    to: process.env.SMTP_USER,
    subject: `${name} - ${email}`,
    text: message,
    // attachments: fileData.map(file => ({
    //   filename: file.name,
    //   contentType: file.type,
    // })),
  })
  return {
    statusCode: 200,
    body: "Hello world!",
  }
}
