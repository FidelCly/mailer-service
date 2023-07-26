import { Module, forwardRef } from '@nestjs/common';
import { MailjetModule } from 'src/mailjet/mailjet.module';
import { CampaignController } from './campaign.controller';
import { MailjetService } from './maijet.service';

@Module({
  controllers: [CampaignController],
  imports: [forwardRef(() => MailjetModule)],
  providers: [MailjetService],
})
export class CampaignModule {}
