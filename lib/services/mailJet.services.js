const { APIKEY_API, APIKEY_PRIVATE } = require('../config/config-mailjet');

exports.envioMailJet = async (to, html, textPart) => {
  const mailjet = require('node-mailjet').connect(APIKEY_API, APIKEY_PRIVATE);

  const globals = {
    From: {
      Email: 'maguidevpruebas@gmail.com',
      Name: 'Magali',
    },
    Subject: textPart,
  };

  const message = {
    To: [to],
    TextPart: textPart,
    HTMLPart: html,
  };

  const request = mailjet
    .post('send', { version: 'v3.1' })
    .request({ Globals: globals, Messages: [message] });
  return request
    .then((result) => {
      const messages = result.body.Messages;
      if (messages) {
        return messages;
      } else {
        throw { message: 'Unknown MailJet error' };
      }
    })
    .catch((err) => {
      console.log({
        message: err.ErrorMessage,
        status: err.statusCode,
        mailJetUrl: err.response.request.url,
        header: err.response.req._header,
        error: err.response.error,
        to: to,
      });
      throw err;
    });
};
