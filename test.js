var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/mydb_test");
var clientSchema = mongoose.Schema({
 lastname : String,
 firstname : String,
 address : String
});
// creation of the Client class associated with the clients collection
var Client = mongoose.model("clients", clientSchema); // create the document in memory
Client.deleteOne({ lastname : "Clinton" })
.exec()
.then(response => {
  console.log("After Clinton's Removal");
  console.log("response = ", response)
  return Client.find().exec()
})
.then(clients => {
  console.log("Clients = ", clients);
})
.catch(err => {
  console.error(err);
})