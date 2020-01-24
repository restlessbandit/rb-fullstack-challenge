const { Client } = require('pg');

class DBClient extends Client {
  constructor() {
    super({
      database: 'jobapp',
      host: process?.env?.PG_HOST || '127.0.0.1',
      port: process?.env?.PG_PORT || '7081',
      user: 'postgres',
    });
  }
}

export default DBClient;
