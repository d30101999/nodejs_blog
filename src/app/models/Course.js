/// Model trong mongoose
const mongoose = require('mongoose');

const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const Course = new Schema(
  {
    name: { type: String },
    description: { type: String },
    image: { type: String },
    videoId: { type: String },
    level: { type: String },

    slug: { type: String, slug: 'name', unique: true }, /// unique : true là duy nhất,khi trùng lúc tạo nó tự động thêm shortid vào cuối thuộc tính
  },
  {
    timestamps: true,
  },
);

// add plugin slug vao model
mongoose.plugin(slug);

///add plugin Mongoose Delete vao model
Course.plugin(mongooseDelete,
  { overrideMethods: 'all' },
  { deletedAt : true }, 
  );

module.exports = mongoose.model('Course', Course);
