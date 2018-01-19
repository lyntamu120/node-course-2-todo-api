const { ObjectId } = require('mongodb');

const { mongoose } = require('../server/db/mongoose');
const { Todo } = require('../server/models/todo');
const { User } = require('../server/models/user');

// Todo.remove({}).then((res) => {
//     console.log(res);
// });

var id = '5a621420bdaf0e0fc9497a7c';
Todo.findByIdAndRemove(id).then((todo) => {
    console.log(JSON.stringify(todo, undefined, 2));
});
