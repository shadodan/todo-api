import { Twilio } from 'twilio';
import { singleton } from 'tsyringe';

import twilio from '../../../config/twilio';
import { changePhoneMessage } from '../../../core/domain/assets/sms/change-phone-message';
import { ISmsProvider } from '../../../core/application/providers/sms.provider';

@singleton()
export class TwilioSmsProvider implements ISmsProvider {
  private readonly twilioConfig = twilio();

  private readonly client = new Twilio(
    this.twilioConfig.TWILIO_ACCOUNT_SID,
    this.twilioConfig.TWILIO_AUTH_TOKEN
  );

  async sendChangePhoneSms(phone: string): Promise<void> {
    await this.client.messages.create({
      from: this.twilioConfig.TWILIO_PHONE_NUMBER,
      to: phone,
      body: changePhoneMessage,
    });
  }
}
