import { Test, TestingModule } from '@nestjs/testing';
import { CampaignController } from '../src/campaign/campaign.controller';
import { EmailRequestDto } from '../src/campaign/email.dto';
import { MailjetService } from '../src/campaign/maijet.service';

describe('CampaignController', () => {
  let mailjetService: MailjetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CampaignController],
      providers: [MailjetService],
    }).compile();

    mailjetService = module.get<MailjetService>(MailjetService);
  });

  describe('send', () => {
    it('should send an email', async () => {
      const payload: EmailRequestDto = {
        senderEmail: 'FideCly <contact@fidelcly.com>',
        subject: 'Test Email',
        recipients: ['recipient@fidelcly.com'],
        textData: 'This is a test email',
        htmlData: '<h1>This is a test email</h1>',
        templateUrl: '',
      };

      const result = await mailjetService.sendEmail(payload);
      expect(result.status).toBe(200);
      expect(result.errors).toBe(null);
    });

    it('should not send email', async () => {
      const payload: EmailRequestDto = {
        senderEmail: 'contact@fidelcly.com',
        subject: 'Test Email',
        recipients: [],
        textData: 'This is a test email',
        htmlData: '<h1>This is a test email</h1>',
        templateUrl: '',
      };

      const result = await mailjetService.sendEmail(payload);
      expect(result.status).toBe(500);
      expect(result.errors).toBeDefined();
    });
  });
});
