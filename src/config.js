const dev = {
  STRIPE_KEY: "pk_test_OAJG8nJdRR9wvEkvAwdm9gKg00Guw3XIzW",
  s3: {
    REGION: "eu-west-2",
    BUCKET: "notes-app-2-api-dev-serverlessdeploymentbucket-d8n20mb5d9r9",
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://tyx8ew1f8i.execute-api.us-east-2.amazonaws.com/dev",
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_HRe2915kB",
    APP_CLIENT_ID: "39gdc1e3eujs652ba4srcio",
    IDENTITY_POOL_ID: "us-east-2:df47a297-24cd-4e2b-abd3-8e9ec1f3be27",
  },
};

const prod = {
  STRIPE_KEY: "pk_test_OAJG8nJdRR9wvEkvAwdm9gKg00Guw3XIzW",
  s3: {
    REGION: "eu-west-2",
    BUCKET: "notes-app-2-api-prod-serverlessdeploymentbucket-p26phphuvf9v",
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://b0x1tpzcy2.execute-api.us-east-2.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_ZaWVxTaEh",
    APP_CLIENT_ID: "2vkhtbbtj36he2j6dnmo1vsbju",
    IDENTITY_POOL_ID: "us-east-2:a8f34866-c3ea-4fda-8d02-226f2c38c530",
  },
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === "prod" ? prod : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config,
};
