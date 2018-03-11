// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

 MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server', err);
  }
  console.log('connected to MongoDB server');

  db.collection('Users').deleteMany({name: 'Andrew'});

  db.collection('Users').findOneAndDelete({_id: new ObjectID("5aa4b24fd75832d61451a994")})
    .then((result) => {
      console.log(result, undefined, 2);
    });


  //ObjectId("5aa4b24fd75832d61451a994")
  // db.collection('Todos').find().count().then((count) => {
  //     console.log('Count : ', count);
  //   }, (err) => {
  // });

  // delete many
  // db.collection('Todos').deleteMany({text: 'eat lunch'}).then((result) =>{
  //   console.log(result);
  // });

  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });
  //
  db.close();
});
