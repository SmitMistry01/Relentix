const awsExports = {
  Auth: {
    Cognito: {
      userPoolId: import.meta.env.VITE_COGNITO_USER_POOL_ID || "",
      userPoolClientId: import.meta.env.VITE_COGNITO_USER_POOL_CLIENT_ID || "",
      userPoolRegion: 'ap-south-1',
      loginWith: {
        oauth: {
          domain: 'https://ap-south-1wpquxqec4.auth.ap-south-1.amazoncognito.com',
          scopes: ['email', 'openid', 'profile'],
          redirectSignIn: ['https://main.dhc6pd33mdwph.amplifyapp.com/'],
          responseType: 'code',
        },
      },
    },
  },
};

export default awsExports;
