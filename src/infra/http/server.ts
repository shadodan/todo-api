import { app } from './app';
import api from '../../config/api';

const apiConfig = api();

app.listen(apiConfig.PORT, () => {
  console.log(
    `Server started on url ${apiConfig.API_URL} and port ${apiConfig.PORT}`
  );
});
