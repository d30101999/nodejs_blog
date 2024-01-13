/// Model trong mongoose

const mongoose =  require('mongoose');

// add plugin slug vao model 
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Course = new Schema({
    
    name: { type: String, },
    description: { type: String, },
    image: { type: String, },
    videoId: { type: String, },
    level: { type: String, },
    
    slug: { type: String, slug: 'name', unique: true}, /// unique : true là duy nhất
}, {
    timestamps: true,
});

module.exports = mongoose.model('Course', Course);

