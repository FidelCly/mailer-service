import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CampaignModule } from './campaign/campaign.module';
import { MailjetModule } from './mailjet/mailjet.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env', '.env.developement', '.env.local'],
    }),
    CampaignModule,
    MailjetModule,
  ],
})
export class AppModule {}
