import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { SendRequest } from 'src/campaign/campaign.pb';

export class EmailRequestDto implements SendRequest {
  @IsNotEmpty()
  @IsEmail()
  readonly senderEmail: string;

  @IsNotEmpty()
  @IsEmail()
  readonly recipients: string; // format => "Recipient_name <email@test>" if multiple recipients, you can use "," separate

  @IsNotEmpty()
  @IsString()
  readonly subject: string;

  @IsOptional()
  @IsString()
  readonly textData: string;

  @IsOptional()
  @IsString()
  readonly htmlData: string;

  @IsOptional()
  @IsString()
  templateUrl?: string;
}
