const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  name: {
    type: String,
    required: 'Enter task name'
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  },
  created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Tasks', TaskSchema);

// Cuong