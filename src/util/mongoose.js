
module.exports = {
    mutipleMongooseToObject: function(mongooses) {
        return mongooses.map(mongoose => mongoose.toObject());
    },

    mongooseToObject: function( mongoose){
        return mongoose ? mongoose.toObject() : mongoose; 
        // Nếu có mongoose thì return lại mongoose.toObject, neesuko return lại chính nó
    }
}