const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'your-email-service-provider', // E.g., Gmail, Yahoo, etc.
  auth: {
    user: 'ritesh.dltouch.technologies@gmail.com', // Your email address
    pass: 'tbfiacxcnaapslnt', // Your email password
  },
});

module.exports = transporter;
