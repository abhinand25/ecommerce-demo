
var admin = require("firebase-admin");

var serviceAccount = require("./fir-3ce30-firebase-adminsdk-zeoel-c8fdaa5c8d.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://fir-3ce30-default-rtdb.firebaseio.com"
});
