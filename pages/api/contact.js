const nodemailer = require("nodemailer");
const emailValidator = require("email-validator");
const { canonicalUrl } = require("../../site.config");

export default async (req, res) => {
  const { fromName, fromEmail, message, token } = req.body;

  if (!fromName || !fromEmail || !message) {
    res.send({ error: 'contact_api_missing_field' });
    return;
  }

  if (!emailValidator.validate(fromEmail)) {
    res.send({ error: 'contact_api_email_invalid' });
    return;
  }

  const captchaValid = await verifyCaptcha(token);
  if (!captchaValid) {
    res.send({ error: 'contact_api_invalid_captcha' });
    return;
  }

  const result = await sendMail(fromEmail, fromName, message);
  res.send(result);
};

async function verifyCaptcha(token) {
  if (!token) {
    console.error('verifyCaptcha - missing token');
    return false;
  }

  const url = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_KEY}&response=${token}`;
  try {
    const response = await fetch(url, { method: 'post' });
    const result = await response.json();
    console.log(`verifyCaptcha - score: ${result.score} action: ${result.action}`);
    return result.score > .5 && result.action === 'contact_form';
  } catch (error) {
    console.error('verifyCaptcha - error: ', error);
  }

  return false;
}

function sendMail(fromEmail, fromName, message) {
  const mailOptions = {
    from: process.env.SMTP_EMAIL,
    to: process.env.CONTACT_EMAIL,
    headers: { 'Reply-To': fromEmail },
    subject: `New message from ${fromName} via ${canonicalUrl}`,
    text: `${fromName} wrote: \n\n ${message}`,
  };

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_SERVER,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  return new Promise((resolve) => {
    transporter.sendMail(mailOptions, (err) => {
      if (err) {
        console.error('sendMail - error: ' . JSON.stringify(err));
        resolve({ error: 'contact_api_sending_failed' });
      } else {
        console.log('sendMail - success');
        resolve({ success: true });
      }
    });
  });
}