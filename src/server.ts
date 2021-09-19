import 'dotenv/config';

import { app } from './app';

const { API_PORT, API_PORT_EXTERNAL } = process.env;

app.listen(API_PORT, () => {
  console.log(
    `Servidor rodando! PORTA INTERNA:${API_PORT} PORTA EXTERNA: ${API_PORT_EXTERNAL}`,
  );
});
