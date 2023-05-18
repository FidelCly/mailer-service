import { Module } from '@nestjs/common';
import { MailjetService } from './maijet.service';

@Module({
  providers: [MailjetService],
  controllers: [],
  imports: [],
  exports: [MailjetService],
})
export class MailjetModule {}
