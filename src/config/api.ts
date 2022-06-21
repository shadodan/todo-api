export default (): { PORT: number; BASE_URL: string } => {
  return {
    PORT: Number(process.env.PORT),
    BASE_URL: process.env.BASE_URL ?? '',
  };
};
