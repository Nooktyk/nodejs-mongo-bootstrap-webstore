// ใช้งาน mongoose
const mongoose = require('mongoose')

// เชื่อม Mongo
const dburl = 'mongodb://localhost:27017/productDB'
mongoose.connect(dburl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).catch(err=>console.log(err))

// ออกแบบ schema
let productSchema = mongoose.Schema({
    name:String,
    price:Number,
    image:String,
    description:String
})

// สร้างโมเดล
let Product = mongoose.model("products",productSchema)

// ส่งออกโมเดล
module.exports = Product

// ออกแบบฟังก์ชันบันทึกข้อมูล
module.exports.saveProduct = function(model,data){
    model.save(data)
}