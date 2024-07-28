export const Server = {
    host: 'localhost',
    port: 3333,
    api: 'api',
    protocol: 'http'
  }
  export const environment = {
    production: false,
    app_url:`${Server.protocol}://${Server.host}:${Server.port}`,
  };
  