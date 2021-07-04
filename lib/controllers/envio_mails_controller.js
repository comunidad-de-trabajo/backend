import { envioMailJet } from '../services/mailJet.services';
import { html } from '../text/text';
import config from '../config/config';

export const envioMailsIndividual = async (req, res) => {
  const { to, aceptado, textPart } = req.body;
  const templateMail = html(aceptado);
  const { mailjetData } = config;
  try {
    await envioMailJet(to, templateMail, textPart, mailjetData);
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
