var admin = require("firebase-admin");

// Fetch the service account key JSON file contents
var serviceAccount = require("./fir-3ce30-firebase-adminsdk-zeoel-c8fdaa5c8d.json");

// Initialize the app with a service account, granting admin privileges
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  // The database URL depends on the location of the database
  databaseURL: "https://fir-3ce30-default-rtdb.firebaseio.com" 
});

// As an admin, the app has access to read and write all data, regardless of Security Rules
var db = admin.database();
var ref = db.ref("restricted_access/secret_document");
ref.once("value", function(snapshot) {
  console.log(snapshot.val());
});

