// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);
//
// var user = {name: 'Leo', age: 20};
// var {name} = user;
// console.log(name);

 MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server', err);
  }
  console.log('connected to MongoDB server')
  //
  // db.collection('Todos').find().count().then((count) => {
  //     console.log('Count : ', count);
  //   }, (err) => {
  // });

  db.collection('Users').find({name: 'Andrew'}).count().then((count) => {
    console.log('Count:', count);
  }, (err) => {
    console.log('Error:', err);
  });

  db.collection('Users').find({name: 'Andrew'}).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
  });

  // db.collection('Todos').find({
  //   _id: new ObjectID("5aa18df73602c530e63fb60a")
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  // db.collection('Todos').insertOne({
  //   text: 'Something to do for Leo',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo :', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2))
  // });

  // Insert new doc into Users(name, age, location)
  // db.collection('Users').insertOne({
  //   name: 'Leo',
  //   age: 20,
  //   location: "san fran"
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert to Users :', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  //   console.log(result.ops[0]._id.getTimestamp())
  // });

  db.close();
});
