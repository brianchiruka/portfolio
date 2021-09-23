const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(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);

const msg = {
  to: "test@example.com", // Change to your recipient
  from: "test@example.com", // Change to your verified sender
  subject: "Sending with SendGrid is Fun",
  text: "and easy to do anywhere, even with Node.js",
  html: "<strong>and easy to do anywhere, even with Node.js</strong>",
};

sgMail
  .send(msg)
  .then((response) => {
    console.log(response[0].statusCode);
    console.log(response[0].headers);
  })
  .catch((error) => {
    console.error(error);
  });
