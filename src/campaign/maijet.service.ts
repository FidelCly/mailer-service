import { Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';
import * as Mailjet from 'node-mailjet';
import { SendResponse } from './campaign.pb';
import { EmailRequestDto } from './email.dto';
dotenv.config();

@Injectable()
export class MailjetService {
  private mailjet: any;

  constructor() {
    this.mailjet = Mailjet.Client.apiConnect(
      process.env.MJ_APIKEY,
      process.env.MJ_SECRETKEY,
    );
  }

  async sendEmail(data: EmailRequestDto): Promise<SendResponse> {
    console.log('🚀 ~ MailjetService ~ sendEmail ~ data:', data);
    try {
      const result = await this.mailjet
        .post('send', { version: 'v3.1' })
        .request({
          Messages: [
            {
              From: {
                Email: data.senderEmail,
                Name:
                  data.senderEmail.split('<')[0]?.trim() ||
                  data.senderEmail.trim(),
              },
              To: data.recipients.map((recipient) => ({
                Email: recipient,
                Name: recipient.split('<')[0]?.trim() || recipient.trim(),
              })),

              Subject: data.subject,
              TextPart: data.textData,
            },
          ],
        });
      console.log('🚀 ~ MailjetService ~ sendEmail ~ result:', result);

      if (result.status !== 200)
        throw new Error('An error occurred while sending the email');

      return { status: 200, errors: null } as SendResponse;
    } catch (error) {
      console.log('🚀 ~ MailjetService ~ sendEmail ~ error:', error);
      return {
        status: error?.response?.status,
        errors: [error?.originalMessage],
      } as SendResponse;
    }
  }
}
