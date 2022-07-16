export default (): {
  TWILIO_ACCOUNT_SID: string;
  TWILIO_AUTH_TOKEN: string;
  TWILIO_PHONE_NUMBER: string;
} => {
  return {
    TWILIO_ACCOUNT_SID: process.env.TWILIO_ACCOUNT_SID ?? '',
    TWILIO_AUTH_TOKEN: process.env.TWILIO_AUTH_TOKEN ?? '',
    TWILIO_PHONE_NUMBER: process.env.TWILIO_PHONE_NUMBER ?? '',
  };
};
