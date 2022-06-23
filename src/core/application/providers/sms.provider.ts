export interface ISmsProvider {
  sendChangePhoneSms(phone: string): Promise<void>;
}
