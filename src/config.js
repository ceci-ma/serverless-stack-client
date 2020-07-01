export default {
  STRIPE_KEY: "pk_test_OAJG8nJdRR9wvEkvAwdm9gKg00Guw3XIzW",

  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "eu-west-2",
    BUCKET: "ceci-notes-app",
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://54i2orbedc.execute-api.us-east-2.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_QXiBnGDax",
    APP_CLIENT_ID: "7gfhck9rhdrip6q1g1lprpj2ii",
    IDENTITY_POOL_ID: "us-east-2:87961960-e14e-4876-a723-c6cef1bd184a",
  },
};
