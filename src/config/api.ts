export default (): { PORT: number; BASE_URL: string; API_URL: string } => {
  return {
    PORT: Number(process.env.PORT),
    BASE_URL: process.env.BASE_URL ?? '',
    API_URL: String(process.env.API_URL) + String(process.env.BASE_URL),
  };
};
