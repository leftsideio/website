require("./config/config");
const path = require("path");
const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const publicPath = path.join(__dirname, "..", "public");
const port = process.env.PORT;

app.use(express.static(publicPath));

app.post("/send_email", express.json(), (req, res) => {
  const { email, name, message } = req.body;
  const smtp = nodemailer.createTransport({
    host: "mail.privateemail.com",
    port: 465,
    secure: true,
    auth: {
      user: "garrett@leftside.design",
      pass: process.env.EMAIL_PASSWORD
    }
  });
  const mailOptions = {
    from: "garrett@leftside.design",
    to: "garrett@leftside.design",
    subject: `${name || "[ No Name ]"} Contacted You!`,
    text: `
      Name: ${name || "[ No Name ]"}
      Email: ${email}
      Message: ${message || "[ Empty Message ]"}
    `
  };
  smtp.sendMail(mailOptions, (error, info) => {
    if (error) res.status(400).send(error);
    res.status(200).send(info);
  });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}!`);
});
