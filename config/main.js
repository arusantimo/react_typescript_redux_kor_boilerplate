module.exports = {
  env: process.env.NODE_ENV || 'development',
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || 8889,
  app: {
    head: {
      title: 'arusantimo_ts_react_bt',
      titleTemplate: 'arusantimo_ts_react_bt: %s',
      meta: [
        { charset: 'utf-8' },
        { 'http-equiv': 'x-ua-compatible', content: 'ie=edge' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'React Redux Typescript' },
      ]
    }
  }
};