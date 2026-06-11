const mongoose = require('mongoose');
const { Schema } = mongoose;
main()
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}

const orderSchema = new Schema({
    item: String,
    price: Number,
});
const customerSchema = new Schema({
    name: String,
    orders: [{
        type: Schema.Types.ObjectId,
        ref: 'Order'
    }]
})
const Order = mongoose.model('Order', orderSchema);
const Customer = mongoose.model('Customer', customerSchema);

const findCustomer=async()=>{
    let result=await Customer.find({}).populate('orders');
    console.log(result[0]);
}

findCustomer();

// const addCustomers = async () => {
//     let customer1 = new Customer({
//         name: 'John Doe',
//     });
//     let order1=await Order.findOne({item:'Pen'});
//     let order2=await Order.findOne({item:'Pencil'});
//     customer1.orders.push(order1);
//     customer1.orders.push(order2);
//     const result = await customer1.save();
//     console.log(result);
// }

// addCustomers();

// const addOrders=async()=>{
//     let res=await Order.insertMany([
//         {item:'Pen',price:10},
//         {item:'Pencil',price:5},
//         {item:'Notebook',price:20},
//     ])
//     console.log(res);
// }

// addOrders();