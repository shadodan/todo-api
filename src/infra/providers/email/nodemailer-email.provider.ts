import { singleton } from 'tsyringe';
import { createTransport } from 'nodemailer';

import email from '../../../config/email';
import { IEmailProvider } from '../../../core/application/providers/email.provider';
import { recoverPasswordMessage } from '../../../core/domain/assets/email/recover-password-message';

@singleton()
export class NodemailerEmailProvider implements IEmailProvider {
  private emailConfig = email();
  private transport = createTransport({
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

  async sendRecoverPasswordEmail(
    email: string,
    recoverPasswordLink: string
  ): Promise<void> {
    await this.transport.sendMail({
      from: `${this.emailConfig.SUPPORT_NAME} <${this.emailConfig.SUPPORT_EMAIL}>`,
      to: email,
      subject: 'Recover your email',
      html: recoverPasswordMessage(recoverPasswordLink),
    });
  }
}
