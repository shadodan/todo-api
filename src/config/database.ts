export default (): {
  DB_HOST: string;
  DB_NAME: string;
  DB_PASSWORD: string;
  DB_PORT: number;
  DB_USER: string;
} => {
  return {
    DB_HOST: process.env.DB_HOST ?? '',
    DB_NAME: process.env.DB_NAME ?? '',
    DB_PASSWORD: process.env.DB_PASSWORD ?? '',
    DB_PORT: Number(process.env.DB_PORT),
    DB_USER: process.env.DB_USER ?? '',
  };
};
