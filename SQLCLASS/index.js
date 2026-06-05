const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require('express');
const methodOverride = require('method-override');

const app = express();
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
const path = require('path');
const { v4: uuidv4 } = require('uuid');

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname, 'views'));   

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: 'Ankit#2003'
});

//inserting new data into the database
// let q = "insert into user (id, username, email, password) values (?, ?, ?, ?)";
let q = "insert into user (id, username, email, password) values ?";
// let users = [
//     ["12342", "Ankit a", "ankiEDFt@example.com", "passCDword123"],
//     ["5678", "John", "john@example.com", "password456"]
// ];

let getRandomUser=() => {
    return [
        faker.string.uuid(),
        faker.internet.username(),
        faker.internet.email(),
        faker.internet.password()
    ];
}

//As already inserted earlier, so commenting it out to avoid duplicate entry error
// let data=[];
// for(let i=1; i<=100; i++){
//     data.push(getRandomUser());
// }



// let getRandomUser = () => {
//     return {
//         id: faker.string.uuid(),
//         username: faker.internet.username(),
//         email: faker.internet.email(),
//         avatar: faker.image.avatar(),
//         password: faker.internet.password(),
//         birthdate: faker.date.birthdate(),
//         registeredAt: faker.date.past(),
//     };
// }

// console.log(getRandomUser());

//Home route
app.get('/', (req, res) => {
    let q='select count(*) as userCount from user';
    try {
        connection.query(q, (err, results) => {
            if (err) throw err;
            let count = results[0].userCount;
            res.render('home.ejs', { count });
        });
    } catch (err) {
        console.error("Error connecting to the database:", err);
        res.status(500).send("Internal Server Error");
    }
});
//Show all users route
app.get('/user', (req, res) => {
    let q='select * from user';
    try {
        connection.query(q, (err, results) => {
            if (err) throw err;
            let data = results;
            res.render('users.ejs', { data });
        });
    } catch (err) {
        console.error("Error connecting to the database:", err);
        res.status(500).send("Internal Server Error");
    }
});
//Edit user route
app.get('/user/:id/edit', (req, res) => {
    let {id} = req.params;
    let q = `SELECT * FROM user WHERE id = '${id}'`;
    try {
        connection.query(q, (err, results) => {
            if (err) throw err;
            let user = results[0];
            res.render('edit.ejs', { user });
        });
    } catch (err) {
        console.error("Error connecting to the database:", err);
        res.status(500).send("Internal Server Error");
    }
});
//Updtae (DB) user route
app.patch('/user/:id', (req, res) => {
    let {id} = req.params;
    let q=`SELECT * FROM user WHERE id = '${id}'`;
    let {password:formPass,username:newUsername} = req.body;
    try {
        connection.query(q, (err, results) => {
            if (err) throw err;
            let user = results[0];
            if(formPass != user.password){
                res.send("Incorrect password. Update failed.");
            }else{
                let q2=`UPDATE user SET username = '${newUsername}' WHERE id = '${id}'`;
                connection.query(q2, (err, results) => {
                    if (err) throw err;
                    // res.send(results);
                    res.redirect('/user');
                });
            }
        });
    } catch (err) {
        console.error("Error connecting to the database:", err);
        res.status(500).send("Some error in DB");
    }
});
app.get('/users/new', (req, res) => {
    res.render('new.ejs');
});
app.post('/users', (req, res) => {
    let { username, email, password } = req.body;
    let id = uuidv4();
    let q = `INSERT INTO user (id, username, email, password) VALUES ('${id}', '${username}', '${email}', '${password}')`;

    try {
        connection.query(q, (err, results) => {
            if (err) throw err;
            res.redirect('/user');
        });
    } catch (err) {
        console.error("Error connecting to the database:", err);
        res.status(500).send("Internal Server Error");
    }
});
app.delete('/user/:id', (req, res) => {
    let {id} = req.params;
    let q = `DELETE FROM user WHERE id = '${id}'`;
    try {
        connection.query(q, (err, results) => {
            if (err) throw err;
            res.redirect('/user');
        });
    } catch (err) {
        console.error("Error connecting to the database:", err);
        res.status(500).send("Internal Server Error");
    }
});
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
    

// try {
//     connection.query(q, [data], (err, results) => {
//         if (err) throw err;
//         console.log(results);
//         // console.log(results.length);
//         // console.log(results[0]);
//         // console.log(results[1]);
//     });
// } catch (err) {
//     console.error("Error connecting to the database:", err);
// }
// connection.end();