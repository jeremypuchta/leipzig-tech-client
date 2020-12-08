function getEnv() {
  if (process.env.NODE_ENV === 'development') {
    return {
      PRODUCTION: false,
      BASE_API_URL: 'http://localhost:8080',
    }
  }
  // edit BASE_API_URL when deployed
  return {
    PRODUCTION: true,
    BASE_API_URL: 'http://localhost:8080',
  }
}

module.exports = {
  images: {
    domains: ['placeimg.com'],
  },
  env: getEnv(),
}
