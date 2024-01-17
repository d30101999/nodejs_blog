/// Có 2 hàm là sử dụng cho 2 trường hợp, mutil là cho việc trả về cả 1 list hoặc arayr, n
/// còng nếu chỉ trả về 1 document thì trả chỉ cần hàm mongooseToObject. Những cái này làm
/// cho cái trong {{this. abc}} với this là đối tượng mongoose hoạt động trong file hbs
module.exports = {
  mutipleMongooseToObject: function (mongooses) {
    return mongooses.map((mongoose) => mongoose.toObject());
  },

  mongooseToObject: function (mongoose) {
    return mongoose ? mongoose.toObject() : mongoose;
    // Nếu có mongoose thì return lại mongoose.toObject, neesuko return lại chính nó
  },
};
