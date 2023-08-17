import { ConfigModule } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { CampaignController } from '../src/campaign/campaign.controller';
import { EmailRequestDto } from '../src/campaign/email.dto';
import { MailjetService } from '../src/campaign/maijet.service';

describe('CampaignController', () => {
  let mailjetService: MailjetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({
          envFilePath: ['.env', '.env.developement', '.env.local'],
        }),
      ],
      controllers: [CampaignController],
      providers: [MailjetService],
    }).compile();

    mailjetService = module.get<MailjetService>(MailjetService);
  });

  describe('send', () => {
    it('should send an email', async () => {
      const payload: EmailRequestDto = {
        senderEmail: 'kfc@fidelcly.com',
        subject: 'KFC (Test)',
        recipients: ['andimanieta@andimanieta.com', 'sihamais98@gmail.com'],
        // textData: 'This is a test email',
        htmlData: `<!doctype html>
        <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
          xmlns:o="urn:schemas-microsoft-com:office:office">
        
        <head>
          <title></title><!--[if !mso]><!-->
          <meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]-->
          <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
          <meta name="viewport" content="width=device-width,initial-scale=1">
          <style type="text/css">
            #outlook a {
              padding: 0;
            }
        
            body {
              margin: 0;
              padding: 0;
              -webkit-text-size-adjust: 100%;
              -ms-text-size-adjust: 100%;
            }
        
            table,
            td {
              border-collapse: collapse;
              mso-table-lspace: 0pt;
              mso-table-rspace: 0pt;
            }
        
            img {
              border: 0;
              height: auto;
              line-height: 100%;
              outline: none;
              text-decoration: none;
              -ms-interpolation-mode: bicubic;
            }
        
            p {
              display: block;
              margin: 13px 0;
            }
          </style><!--[if mso]>
            <noscript>
            <xml>
            <o:OfficeDocumentSettings>
              <o:AllowPNG/>
              <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
            </xml>
            </noscript>
            <![endif]--><!--[if lte mso 11]>
            <style type="text/css">
              .mj-outlook-group-fix { width:100% !important; }
            </style>
            <![endif]-->
          <style type="text/css">
            @media only screen and (min-width:480px) {
              .mj-column-per-100 {
                width: 100% !important;
                max-width: 100%;
              }
            }
          </style>
          <style media="screen and (min-width:480px)">
            .moz-text-html .mj-column-per-100 {
              width: 100% !important;
              max-width: 100%;
            }
          </style>
          <style type="text/css">
            [owa] .mj-column-per-100 {
              width: 100% !important;
              max-width: 100%;
            }
          </style>
          <style type="text/css">
            @media only screen and (max-width:479px) {
              table.mj-full-width-mobile {
                width: 100% !important;
              }
        
              td.mj-full-width-mobile {
                width: auto !important;
              }
            }
          </style>
          <style type="text/css"></style>
        </head>
        
        <body style="word-spacing:normal;background-color:transparent;">
          <div style="background-color:transparent;">
            <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
            <div style="margin:0px auto;max-width:600px;">
              <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
                <tbody>
                  <tr>
                    <td
                      style="direction:ltr;font-size:0px;padding:0px 0px 0px 0px;padding-bottom:0px;padding-left:0px;padding-right:0px;padding-top:0px;text-align:center;">
                      <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]-->
                      <div class="mj-column-per-100 mj-outlook-group-fix"
                        style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;"
                          width="100%">
                          <tbody>
                            <tr>
                              <td align="center"
                                style="font-size:0px;padding:10px 25px 10px 25px;padding-right:25px;padding-left:25px;word-break:break-word;">
                                <table border="0" cellpadding="0" cellspacing="0" role="presentation"
                                  style="border-collapse:collapse;border-spacing:0px;">
                                  <tbody>
                                    <tr>
                                      <td style="width:550px;"><img alt="Logo"
                                          src="https://github.com/FidelCly/brand/blob/main/logo/600x600/transparent/png/BlackOnWhiteLogoAndName.png?raw=true"
                                          style="border:none;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;"
                                          width="550" height="auto"></td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div><!--[if mso | IE]></td></tr></table><![endif]-->
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" bgcolor="#ffffff" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
            <div style="background:#ffffff;background-color:#ffffff;margin:0px auto;max-width:600px;">
              <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"
                style="background:#ffffff;background-color:#ffffff;width:100%;">
                <tbody>
                  <tr>
                    <td style="direction:ltr;font-size:0px;padding:20px 0px 20px 0px;text-align:center;">
                      <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]-->
                      <div class="mj-column-per-100 mj-outlook-group-fix"
                        style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;"
                          width="100%">
                          <tbody>
                            <tr>
                              <td align="center"
                                style="font-size:0px;padding:30px 25px 10px 25px;padding-top:30px;padding-right:25px;padding-left:25px;word-break:break-word;">
                                <p style="border-top:solid 2px #3d86ff;font-size:1px;margin:0px auto;width:25%;"></p><!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" style="border-top:solid 2px #3d86ff;font-size:1px;margin:0px auto;width:137.5px;" role="presentation" width="137.5px" ><tr><td style="height:0;line-height:0;"> &nbsp;
        </td></tr></table><![endif]-->
                              </td>
                            </tr>
                            <tr>
                              <td align="left"
                                style="font-size:0px;padding:0px 25px 0px 25px;padding-top:0px;padding-right:25px;padding-bottom:0px;padding-left:25px;word-break:break-word;">
                                <div
                                  style="font-family:Arial, sans-serif;font-size:32px;letter-spacing:normal;line-height:1;text-align:left;color:#000000;">
                                  <h1 class="text-build-content"
                                    style="line-height:32px;text-align:center;; margin-top: 10px; margin-bottom: 10px; font-weight: normal;"
                                    data-testid="Q-LG93wU-FZ5DlmcclP0a"><span
                                      style="color:#27272b;font-family:Times New Roman;font-size:32px;"><b>Mardi Tenders
                                        !</b></span></h1>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                <table border="0" cellpadding="0" cellspacing="0" role="presentation"
                                  style="border-collapse:collapse;border-spacing:0px;">
                                  <tbody>
                                    <tr>
                                      <td style="width:480px;"><img alt="KFC"
                                          src="https://10619-2.s.cdn12.com/m2/KFC-Villetaneuse-Restaurant-menu.jpg"
                                          style="border:none;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;"
                                          width="480" height="auto"></td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td align="left"
                                style="font-size:0px;padding:20px 25px 20px 25px;padding-top:20px;padding-right:25px;padding-bottom:20px;padding-left:25px;word-break:break-word;">
                                <div
                                  style="font-family:Arial, sans-serif;font-size:13px;letter-spacing:normal;line-height:1;text-align:left;color:#000000;">
                                  <p class="text-build-content"
                                    style="line-height: 32px; text-align: center; margin: 10px 0; margin-top: 10px;"
                                    data-testid="49IqXk0yJ7reL1VXHiybq"><span
                                      style="color:#27272b;font-family:Arial;font-size:16px;">Bonjour,</span></p>
                                  <p class="text-build-content" style="line-height: 32px; text-align: center; margin: 10px 0;"
                                    data-testid="49IqXk0yJ7reL1VXHiybq"><span
                                      style="color:#27272b;font-family:Arial;font-size:16px;">Tous les mardis, pour un bucket
                                      tenders acheté, on vous offre un troisième pour votre prochain passage</span></p>
                                  <p class="text-build-content" style="line-height: 32px; text-align: center; margin: 10px 0;"
                                    data-testid="49IqXk0yJ7reL1VXHiybq">&nbsp;</p>
                                  <p class="text-build-content"
                                    style="line-height: 32px; text-align: center; margin: 10px 0; margin-bottom: 10px;"
                                    data-testid="49IqXk0yJ7reL1VXHiybq"><span
                                      style="color:#27272b;font-family:Arial;font-size:16px;">Equipe KFC Villetaneuse</span></p>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td align="center"
                                style="font-size:0px;padding:30px 25px 10px 25px;padding-top:30px;padding-right:25px;padding-left:25px;word-break:break-word;">
                                <p style="border-top:solid 2px #3d86ff;font-size:1px;margin:0px auto;width:25%;"></p><!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" style="border-top:solid 2px #3d86ff;font-size:1px;margin:0px auto;width:137.5px;" role="presentation" width="137.5px" ><tr><td style="height:0;line-height:0;"> &nbsp;
        </td></tr></table><![endif]-->
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div><!--[if mso | IE]></td></tr></table><![endif]-->
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
            <div style="margin:0px auto;max-width:600px;">
              <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
                <tbody>
                  <tr>
                    <td
                      style="direction:ltr;font-size:0px;padding:20px 0px 0px 0px;padding-bottom:0px;padding-left:0px;padding-right:0px;text-align:center;">
                      <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]-->
                      <div class="mj-column-per-100 mj-outlook-group-fix"
                        style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;"
                          width="100%">
                          <tbody>
                            <tr>
                              <td align="left"
                                style="font-size:0px;padding:0px 20px 0px 20px;padding-top:0px;padding-right:20px;padding-bottom:0px;padding-left:20px;word-break:break-word;">
                                <div
                                  style="font-family:Arial, sans-serif;font-size:16px;letter-spacing:normal;line-height:1;text-align:left;color:#000000;">
                                  <h3 class="text-build-content"
                                    style="text-align:center;; margin-top: 10px; margin-bottom: 10px; font-weight: normal;"
                                    data-testid="DzPLN1sFl0cIdKER2vBCM"><span
                                      style="color:#27272b;font-family:Arial, Helvetica, sans-serif;font-size:18px;"><b>Suivez-nous
                                        sur:</b></span></h3>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td align="center"
                                style="background:transparent;font-size:0px;padding:10px 25px 10px 25px;padding-right:25px;padding-left:25px;word-break:break-word;">
                                <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" ><tr><td><![endif]-->
                                <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"
                                  style="float:none;display:inline-table;">
                                  <tbody>
                                    <tr>
                                      <td style="padding:4px;vertical-align:middle;">
                                        <table border="0" cellpadding="0" cellspacing="0" role="presentation"
                                          style="background:#3d86ff;border-radius:50%;width:32;">
                                          <tbody>
                                            <tr>
                                              <td
                                                style="padding:0px 0px 0px 0px;font-size:0;height:32;vertical-align:middle;width:32;">
                                                <a href="[[SHORT_PERMALINK]]" target="_blank"><img height="32"
                                                    src="https://www.mailjet.com/images/theme/v1/icons/ico-social/facebook.png"
                                                    style="border-radius:50%;display:block;" width="32"></a></td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table><!--[if mso | IE]></td><td><![endif]-->
                                <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"
                                  style="float:none;display:inline-table;">
                                  <tbody>
                                    <tr>
                                      <td style="padding:4px;vertical-align:middle;">
                                        <table border="0" cellpadding="0" cellspacing="0" role="presentation"
                                          style="background:#3d86ff;border-radius:50%;width:32;">
                                          <tbody>
                                            <tr>
                                              <td
                                                style="padding:0px 0px 0px 0px;font-size:0;height:32;vertical-align:middle;width:32;">
                                                <a href="[[SHORT_PERMALINK]]" target="_blank"><img height="32"
                                                    src="https://www.mailjet.com/images/theme/v1/icons/ico-social/twitter.png"
                                                    style="border-radius:50%;display:block;" width="32"></a></td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table><!--[if mso | IE]></td><td><![endif]-->
                                <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"
                                  style="float:none;display:inline-table;">
                                  <tbody>
                                    <tr>
                                      <td style="padding:4px;vertical-align:middle;">
                                        <table border="0" cellpadding="0" cellspacing="0" role="presentation"
                                          style="background:#3d86ff;border-radius:50%;width:32;">
                                          <tbody>
                                            <tr>
                                              <td
                                                style="padding:0px 0px 0px 0px;font-size:0;height:32;vertical-align:middle;width:32;">
                                                <a href="[[SHORT_PERMALINK]]" target="_blank"><img height="32"
                                                    src="https://www.mailjet.com/images/theme/v1/icons/ico-social/instagram.png"
                                                    style="border-radius:50%;display:block;" width="32"></a></td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table><!--[if mso | IE]></td><td><![endif]-->
                                <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"
                                  style="float:none;display:inline-table;">
                                  <tbody>
                                    <tr>
                                      <td style="padding:4px;vertical-align:middle;">
                                        <table border="0" cellpadding="0" cellspacing="0" role="presentation"
                                          style="background:#3d86ff;border-radius:50%;width:32;">
                                          <tbody>
                                            <tr>
                                              <td
                                                style="padding:0px 0px 0px 0px;font-size:0;height:32;vertical-align:middle;width:32;">
                                                <img height="32"
                                                  src="https://www.mailjet.com/images/theme/v1/icons/ico-social/youtube.png"
                                                  style="border-radius:50%;display:block;" width="32"></td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table><!--[if mso | IE]></td></tr></table><![endif]-->
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div><!--[if mso | IE]></td></tr></table><![endif]-->
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
            <div style="margin:0px auto;max-width:600px;">
              <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
                <tbody>
                  <tr>
                    <td
                      style="direction:ltr;font-size:0px;padding:0px 0px 20px 0px;padding-left:0px;padding-right:0px;padding-top:0px;text-align:center;">
                      <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]-->
                      <div class="mj-column-per-100 mj-outlook-group-fix"
                        style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;"
                          width="100%">
                          <tbody>
                            <tr>
                              <td align="left"
                                style="font-size:0px;padding:0px 20px 0px 20px;padding-top:0px;padding-right:20px;padding-bottom:0px;padding-left:20px;word-break:break-word;">
                                <div
                                  style="font-family:Arial, sans-serif;font-size:13px;letter-spacing:normal;line-height:1;text-align:left;color:#000000;">
                                  <p class="text-build-content"
                                    style="line-height: 32px; text-align: center; margin: 10px 0; margin-top: 10px;"
                                    data-testid="bLVScYKkb7dqSW"><span
                                      style="color:#27272b;font-family:Arial;font-size:16px;">Designed with Mailjet</span></p>
                                  <p class="text-build-content"
                                    style="line-height: 32px; text-align: center; margin: 10px 0; margin-bottom: 10px;"
                                    data-testid="bLVScYKkb7dqSW"><span
                                      style="color:#27272b;font-family:Arial;font-size:16px;">This e-mail was sent to
                                      [[EMAIL_TO]] because you've opted-in to receive news and promotional emails from us. Click
                                    </span><a class="link-build-content" style="color:inherit;; text-decoration: none;"
                                      target="_blank" href="[[UNSUB_LINK_EN]]"><span
                                        style="color:#3d86FF;font-family:Arial;font-size:16px;">here</span></a><span
                                      style="color:#27272b;font-family:Arial;font-size:16px;"> to unsubscribe.</span></p>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div><!--[if mso | IE]></td></tr></table><![endif]-->
                    </td>
                  </tr>
                </tbody>
              </table>
            </div><!--[if mso | IE]></td></tr></table><![endif]-->
          </div>
        </body>
        
        </html>`,
        templateUrl: '',
      };

      const result = await mailjetService.sendEmail(payload);
      expect(result.status).toBe(200);
      expect(result.errors).toBe(null);
    });

    it('should not send email', async () => {
      const payload: EmailRequestDto = {
        senderEmail: 'test@fidelcly.com',
        subject: 'Test Email',
        recipients: [],
        // textData: 'This is a test email',
        htmlData: '<h1>This is a test email</h1>',
        templateUrl: '',
      };

      const result = await mailjetService.sendEmail(payload);
      expect(result.status).toBe(400);
      expect(result.errors).toBeDefined();
    });
  });
});
