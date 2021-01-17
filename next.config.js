function getEnv() {
  if (process.env.NODE_ENV === 'development') {
    return {
      PRODUCTION: false,
      BASE_API_URL: 'http://localhost:8080',
      GITHUB_SECRET: process.env.GITHUB_SECRET,
      GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
      JAWG_TOKEN: process.env.JAWG_TOKEN,
    }
  }
  // edit BASE_API_URL when deployed
  return {
    PRODUCTION: true,
    BASE_API_URL: 'http://localhost:8080',
    GITHUB_SECRET: process.env.GITHUB_SECRET,
    GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
    JAWG_TOKEN: process.env.JAWG_TOKEN,
  }
}

module.exports = {
  images: {
    domains: ['placeimg.com'],
  },
  env: getEnv(),
}
