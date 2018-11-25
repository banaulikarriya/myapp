const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema(
  {   
    name: {
      type: String,
      required: true,
      default: '',
    },
    taskName: {
      type: String,
      required: true,
      default: '',
    },
    taskDetails: {
      type: String,
      required: true,
    },
    working: {
      type: Boolean,
      default: true,
    },
    status: {
      type: String,
      enum: ['active', 'deleted'],
      default: 'active',
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model('Task', taskSchema);
