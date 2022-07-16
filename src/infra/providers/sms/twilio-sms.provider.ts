import twilio from '../../../config/twilio';
import { Twilio } from 'twilio';
import { ISmsProvider } from '../../../core/application/providers/sms.provider';

export class TwilioSmsProvider implements ISmsProvider {
  private twilioConfig;
  private client;

  constructor() {
    this.twilioConfig = twilio();

    this.client = new Twilio(
      this.twilioConfig.TWILIO_ACCOUNT_SID,
      this.twilioConfig.TWILIO_AUTH_TOKEN
    );
  }

  async sendSms(from: string, to: string, body: string): Promise<void> {
    await this.client.messages.create({
      from,
      to,
      body,
    });
  }
}
