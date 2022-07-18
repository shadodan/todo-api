export interface ISmsProvider {
  sendSms(from: string, to: string, body: string): Promise<void>;
}
