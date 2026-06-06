const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/test');
main()
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}
const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String
});
// const User = mongoose.model('User', userSchema);
const Employee = mongoose.model('Employee', userSchema);

Employee.find({ age: { $gt: 25 } })
    .then(employees => console.log(employees[0].name))
    .catch(err => console.log(err));
Employee.findOne({ _id: '6a23b36d582adf0fedaea568' })
    .then(employee => console.log(employee))
    .catch(err => console.log(err));

Employee.findById('6a23b36d582adf0fedaea567')
    .then(employee => console.log(employee))
    .catch(err => console.log(err));


Employee.updateOne({name: 'Bob Williams' }, { age: 3100 })
    .then(() => console.log('Employee updated'))
    .catch(err => console.log(err));

Employee.findOne({ name: 'Bob Williams' })
    .then(employee => console.log(employee))
    .catch(err => console.log(err));

Employee.findOneAndUpdate({ name: 'Bob Williams' }, { age: 30000005 }, { new: true })
    .then(employee => console.log(employee))
    .catch(err => console.log(err));

Employee.deleteOne({ name: 'Bob Williams' })
    .then(() => console.log('Employee deleted'))
    .catch(err => console.log(err));
// const employee = new Employee({
//     name: 'John Doe',
//     age: 30,
//     email: 'john.doe@example.com'
// });
// employee.save()
//     .then(() => console.log('Employee saved'))
//     .catch(err => console.log(err));
// const employee2 = new Employee({
//     name: 'Jane Smith',
//     age: 25,
//     email: 'jane.smith@example.com'
// });
// employee2.save()
//     .then(() => console.log('Employee 2 saved'))
//     .catch(err => console.log(err));
// Employee.insertMany([
//     {
//         name: 'Alice Johnson',
//         age: 28,
//         email: 'alice.johnson@example.com'
//     },
//     {
//         name: 'Bob Williams',
//         age: 35,
//         email: 'bob.williams@example.com'
//     },
//     {
//         name: 'Charlie Brown',
//         age: 32,
//         email: 'charlie.brown@example.com'
//     }
// ])
//     .then(() => console.log('Employees inserted'))
//     .catch(err => console.log(err));