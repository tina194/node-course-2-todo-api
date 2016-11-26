// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if( err ) {
    return console.log('Unabel to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server.');

  // deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Users').deleteMany({name: 'Arne'});

  // db.collection('Todos').findOneAndDelete({
  //   _id: new ObjectID('583a035b4fde0628c8978942')
  // }).then((result) => {
  //   console.log(JSON.stringify(result, undefined, 2));
  // });

  // db.close();
});
