const { envioMailJet } = require('../services/mailJet.services');
const { html } = require('../text/text');

console.log(html);

export const envioMailsIndividual = async (req, res) => {
  const { to, aceptado, textPart } = req.body;
  const templateMail = html(aceptado);
  try {
    await envioMailJet(to, templateMail, textPart);
    res.json({
      msg: 'Mail enviado correctamente',
      to,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server Mail Error',
      details: error.stack,
    });
  }
};
