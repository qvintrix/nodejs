module.exports = {
  secretKey: "secret",
  facebookAuth: {
    clientID: "217073305770482",
    clientSecret: "9273e90b367d1e39fee22af1d4c10ff8",
    callbackURL: "http://localhost:8080/auth/facebook/callback"
  },

  twitterAuth: {
    consumerKey: "BpnRXi5EVQe8eSwZoMFfa64gt",
    consumerSecret: "kSXNQ49rTRnFlj50VPb60e3kdFAOhiP91MIHQEeFnplKDsfzKR",
    callbackURL: "http://localhost:8080/auth/twitter/callback"
  },

  googleAuth: {
    clientID:
      "809261840706-rn3auakdm1vle72csmfoha4pe1g58fi9.apps.googleusercontent.com",
    clientSecret: "OmqhbugSWwG8T6xIh-b7aQUz",
    callbackURL: "http://localhost:8080/auth/google/callback"
  }
};
