import { Controller, Inject } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { CAMPAIGN_SERVICE_NAME, SendResponse } from './campaign.pb';
import { EmailRequestDto } from './email.dto';
import { MailjetService } from './maijet.service';

@Controller('send-mailing')
export class CampaignController {
  @Inject(MailjetService)
  private readonly service: MailjetService;

  @GrpcMethod(CAMPAIGN_SERVICE_NAME, 'Send')
  public send(payload: EmailRequestDto): Promise<SendResponse> {
    return this.service.sendEmail(payload);
  }
}
