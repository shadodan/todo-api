export default (): {
  JWT_SECRET: string;
  JWT_EXPIRATION: string;
} => {
  return {
    JWT_SECRET: process.env.JWT_SECRET ?? '',
    JWT_EXPIRATION: process.env.JWT_EXPIRATION ?? '1d',
  };
};
