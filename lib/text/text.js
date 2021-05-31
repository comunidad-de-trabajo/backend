const mailAceptado =
  '<p>Por la presente, nos comunicamos con ustedes con el propósito de informarles que su anuncio ha sido aceptado. El mismo será difundido en las próximas horas.</p>';

const mailRechazado =
  '<p>Por la presente, nos comunicamos con ustedes con el propósito de informarles que su anuncio  ha quedado en estado “pendiente de autorización”.</p> <p>Les solicitamos que ingrese a la plataforma para revisar las observaciones.</p>';

const html = (estado) => `<!DOCTYPE html>
<html lang="en">
<body style="margin: 0; padding: 0">
    <div data-section-wrapper="1" style="background-color: #ededf2;font-family: Helvetica, Arial, sans-serif;font-size: 14px;color: #777777;text-align: center;line-height: 21px;">
        <table align="center" data-section="1" cellspacing="0" cellpadding="0" width="600" style="border-collapse: collapse;">
            <tbody>
                <tr">
                    <td style="font-family: Helvetica, Arial, sans-serif;font-size: 14px;color: #777777;text-align: center;line-height: 21px;border-collapse: collapse;padding: 30px 50px;width: 500px;">
                            <table cellspacing="0" cellpadding="0" width="100%" style="border-collapse:separate;">
                                <tbody>
                                    <tr>
                                        <td data-slot-container="1"
                                            style="font-family: Helvetica, Arial, sans-serif;font-size: 14px;color: #777777;text-align: center;line-height: 21px;border-collapse: collapse;background-color: #ffffff;width: 498px;border: 1px solid #cccccc;border-radius: 5px;padding: 45px 75px;">
                                            <div class="user-msg" data-slot="text"
                                                style="padding: 10px 0px; font-size: 14px; text-align: left; color: #000000; line-height: 21px;">
                                                <p>Estimado/a,</p>
                                                ${
                                                  estado
                                                    ? mailAceptado
                                                    : mailRechazado
                                                }
                                                <p>Quedamos a disposición, y cualquier inconveniente, no duden
                                                enconsultarnos por esta vía.</p>
                                            </div>
                                            <div class="user-msg" data-slot="text"
                                                style="padding: 10px 0px;font-size: 14px;text-align: left;color:#000000">
                                                Desde ya muchas gracias.<br />Los/as saluda Atte.<p
                                                    style="color:#a0a0a0">
                                                    <br /><b>Área de Servicios a la Comunidad</b><br /> <br />
                                                    <span style="color:#a0a0a0"><img
                                                            src="http://www.unahur.edu.ar/sites/default/files/logo-reparg.png"
                                                            width="200" height="auto" alt="asistent.medifit.si"></span>
                                                <div style="display:block"><a href="http://www.unahur.edu.ar/"
                                                        target="_blank" tyle="text-decoration:none;"><img
                                                            src="https://ci3.googleusercontent.com/proxy/LaM6vDo83HRXvlTGbTelDLaEyVcgv4IIeZCWwoQGffRxs5j245Q4Vavi4wdS24LhHjJ3m7FABOtftsprU2bbrOPlP09QY8bxSPo03JTW03jKWf2Go8DtrANkuXdJ464_EH8GduVarsd6CUtMS_AEBH-sfyrlzVzkGjiKKgobSsATIENX--a-lXmdg4KjTJp-4fFhP7-qCrVJP9xAQg=s0-d-e1-ft#https://docs.google.com/uc?export=download&id=1O-UoxrMF1CbGpLGQbztNKEH4GAGxygal&revid=0B9bzl3KomutCbWRJZmN4OXRYU3ZTR3BxZW9lblRuU3kzbGdJPQ"
                                                            alt="webPage"></a><a href="https://www.facebook.com/UNAHUR"
                                                        target="_blank" style="text-decoration:none;"><img
                                                            src="https://ci5.googleusercontent.com/proxy/afVlxT6kpS-ms6KWUWRQHk8ZOlswWm5ifJm6ok2JEhKKBweQCJmLiTPelvna0Gw6_TsHWYvGIkP5IU1i8JRfyuw3pgpsNR7mkSeXLTLSrWXKVuz7LkravqkwM5D1pAB3t7wVnitjYCRzBTr-6jgOyhjwK-WNHY9h11gBbQsyyxVCuEWlP2ftmyU-oNTR3aGG96e3yoLBmjWZrSUjKw=s0-d-e1-ft#https://docs.google.com/uc?export=download&id=1Hs-MroJ3q7qSWyKEkEcnNK5icq5cvySC&revid=0B9bzl3KomutCRXVRalRhVUt0NUhwSVVGeUpUcGJoZkpBTEFVPQ"
                                                            alt="facebook"></a><a
                                                        href="https://twitter.com/unahurlingham" target="_blank"
                                                        style="text-decoration:none;"><img
                                                            src="https://ci3.googleusercontent.com/proxy/RX3xFYK824i4W4_mCO8_8iBIjksRKUKh8qS4c1mU2qdupwwFguklVRrWhWkEWQVJMQtw31u0tk3J2lriCuks-u5wxQhq7dvKUZ-qaMvaqsinnHDjvYmjUK810IHH-TYyp6JxJhEWX6GFnEPQeN3DOIMqnmKCMD2abliqg2BaijA2xr6hFZirP28dRj-4CG1aS7WTff18m-be4mGXWQ=s0-d-e1-ft#https://docs.google.com/uc?export=download&id=1ckBnxxZ9OUfQgFr8boTbwNCRgIzyvyni&revid=0B9bzl3KomutCWGo3aFpkcy9vVEFPc3J1WFpXTFBRUnNJcmhVPQ"
                                                            alt="twitter"></a><a
                                                        href="https://www.instagram.com/unahurlingham/" target="_blank"
                                                        style="text-decoration:none;"><img
                                                            src="https://ci4.googleusercontent.com/proxy/uh84ZP3DpMUWTIsammZ9N7ik2RHCsVnKzmNofKFT5CoxuqZL0xSHd5h5aBTMLcLjwDI_E6fmJnegrapr9S0ORNgDBaG4EDIC2TGJ1q22LPl-Sy1UgKPkaiIKYjhEsMHAmpp99QI6Ao1NF0krwywy5exzEntbKxvsOAqliFUi3cEAJ0EP0rz9EUiNG80BlDraEbCGnMpcmB0ZqCrGGQ=s0-d-e1-ft#https://docs.google.com/uc?export=download&id=1rOlZJN_4UWHsqTcUyyDJBuXf6JWb6l-L&revid=0B9bzl3KomutCU1F1UU9vdmttQkROQnlHa2lmRGFlQ3FCb0pjPQ"
                                                            alt="instagram"></a><a
                                                        href="https://www.youtube.com/c/UNAHURLINGHAM" target="_blank"
                                                        style="text-decoration:none;"><img
                                                            src="https://ci3.googleusercontent.com/proxy/bMK3mncGLrvK2c7JYQy0gxG50gXWjLQB9Zj59WBIrPem5bU_9Qs1NDoozwQ8BjOUAWU6aTgqox-vp6agD5kqimmDb9v0CJ2DngUnGAxxvqrXDo1afaNiGeWw72ftzm8z0UVW8fqX1JhRFU1A_kRRnr7D9YZ0MoUzGLPB8NCdENUd4fvzuSMCx54mKd5jdJ5h1_RTIS9SQaFkwvXeug=s0-d-e1-ft#https://docs.google.com/uc?export=download&id=1BuWIO5_mo6Qw3FgADPNNEeEmHJMDOaks&revid=0B9bzl3KomutCc05TYlNEYUtnTkVtM3IvQlFGajV2YWpnT3dzPQ"
                                                            alt="youtube"></a></div>
                                                </p>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</body>
</html>`;

module.exports = { html };
