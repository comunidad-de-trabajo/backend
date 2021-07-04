exports.envioMailJet = async (to, html, textPart, mailjetData) => {
  const {
    MAILJET_APIKEY_API,
    MAILJET_APIKEY_PRIVATE,
    MAILJET_FROM_EMAIL,
  } = mailjetData;
  const mailjet = require('node-mailjet').connect(
    MAILJET_APIKEY_API,
    MAILJET_APIKEY_PRIVATE
  );

  const globals = {
    From: {
      Email: MAILJET_FROM_EMAIL,
      Name: 'Comunidad de trabajo UNAHUR',
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
