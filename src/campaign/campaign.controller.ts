import { Controller, Inject } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { EmailRequestDto } from 'src/mailjet/email.dto';
import { MailjetService } from 'src/mailjet/maijet.service';
import { CAMPAIGN_SERVICE_NAME, SendResponse } from './campaign.pb';

@Controller()
export class CampaignController {
  @Inject(MailjetService)
  private readonly service: MailjetService;

  @GrpcMethod(CAMPAIGN_SERVICE_NAME, 'Send')
  private send(payload: EmailRequestDto): Promise<SendResponse> {
    return this.service.sendEmail(payload);
  }
}
