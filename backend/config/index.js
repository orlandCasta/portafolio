require('dotenv').config()

const config = {
  env: process.env.ENV,

  port: process.env.PORT,

  mongo: process.env.MONGO,

  bucket_name: process.env.BUCKET_NAME,

  aws_access_key: process.env.AWS_ACCESS_KEY,

  aws_secret_access_key: process.env.AWS_SECRET_ACCESS_KEY,

  s3_endpoint: process.env.S3_ENDPOINT,

  access_token_secret: process.env.ACCESS_TOKEN_SECRET,

  refresh_token_secret: process.env.REFRESH_TOKEN_SECRET,

  recover_password: process.env.RECOVER_PASSWORD,

  verification_link: process.env.VERIFICATION_LINK
}

module.exports = { config }
