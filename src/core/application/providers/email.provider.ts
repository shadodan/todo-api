export interface IEmailProvider {
  sendRecoverPasswordEmail(
    email: string,
    recoverPasswordLink: string
  ): Promise<void>;
}
