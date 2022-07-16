import { createTransport } from 'nodemailer';

import email from '../../../config/email';
import { IEmailProvider } from '../../../core/application/providers/email.provider';

export class NodemailerEmailProvider implements IEmailProvider {
  private transport;
  private emailConfig;

  constructor() {
    this.emailConfig = email();

    this.transport = createTransport({
      host: this.emailConfig.EMAIL_HOST,
      port: this.emailConfig.EMAIL_PORT,
      secure: false,
      auth: {
        user: this.emailConfig.EMAIL_USER,
        pass: this.emailConfig.EMAIL_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
  }

  async sendEmail(
    from: string,
    to: string,
    subject: string,
    text: string,
    html: string
  ): Promise<void> {
    await this.transport.sendMail({
      from,
      to,
      subject,
      text,
      html,
    });
  }
}
