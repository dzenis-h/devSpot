module.exports = {
  mongoURI: process.env.MONGO_URI, // as the name says -Here is the place for your MOngoDB URI string
  jwtSecret: process.env.JWT_SECRET, // put whatever STRING you want as this value. The longer and more diverse it is the more secure :)
  githubClientId: process.env.GITHUB_ID, // https://auth0.com/docs/connections/social/github
  githubSecret: process.env.GITHUB_SECRET // https://auth0.com/docs/connections/social/github
};
