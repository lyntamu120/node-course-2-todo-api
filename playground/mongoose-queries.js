const { mongoose } = require('../server/db/mongoose');
const { Todo } = require('../server/models/todo');
const { User } = require('../server/models/user');
const { ObjectId } = require('mongodb');

// var id = '5a612741fe6dcb09bd59c21f1';
//
// if (!ObjectId.isValid(id)) {
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });
//
// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo by id', todo);
// }).catch((e) => {
//     console.log(e);
// });

var id = '5a6113e9b993ec074600da84';

User.findById(id).then((user) => {
    if (!user) {
        return console.log('User not found');
    }
    console.log('User by ID', JSON.stringify(user, undefined, 2));
}).catch(e => {
    console.log('Sth wrong with the user');
});
