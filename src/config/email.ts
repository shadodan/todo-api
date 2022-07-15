export default (): {
  EMAIL_HOST: string;
  EMAIL_PORT: number;
  EMAIL_USER: string;
  EMAIL_PASSWORD: string;
  SUPPORT_EMAIL: string;
  SUPPORT_NAME: string;
} => {
  return {
    EMAIL_HOST: process.env.EMAIL_HOST ?? '',
    EMAIL_PORT: Number(process.env.EMAIL_PORT),
    EMAIL_USER: process.env.EMAIL_USER ?? '',
    EMAIL_PASSWORD: process.env.EMAIL_PASSWORD ?? '',
    SUPPORT_EMAIL: process.env.SUPPORT_EMAIL ?? '',
    SUPPORT_NAME: process.env.SUPPORT_NAME ?? '',
  };
};
