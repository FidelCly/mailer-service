import { Module } from '@nestjs/common';
import { CampaignModule } from './campaign/campaign.module';
import { MailjetModule } from './mailjet/mailjet.module';

@Module({
  imports: [CampaignModule, MailjetModule],
})
export class AppModule {}
