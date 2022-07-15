export interface IEmailProvider {
  sendEmail(
    from: string,
    to: string,
    subject: string,
    html: string
  ): Promise<void>;
}
