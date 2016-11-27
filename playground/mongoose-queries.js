const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} =  require('./../server/models/todo');
const {User} =  require('./../server/models/user');

// var id = '583abc3aa506ba1810b20a6811';
//
// if( !ObjectID.isValid(id) ) {
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if( !todo ) {
//     return console.log('Id not found');
//   }
//   console.log('Todo by Id', todo);
// }).catch((e) => console.log(e));

User.findById('583a25d003236374360abd44').then((user) => {
  if( !user ) {
    return console.log('unable to find user');
  }
  console.log(JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e));
