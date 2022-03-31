var mysql = require('mysql2');
const bcrypt = require('bcrypt');
const saltRounds = 10;

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Password1!",
    database: "bkfp2p"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

module.exports = {
    createAsync : async function(name, email, password) {
        // check if email exists already
        if (await this.emailExists(email) == 0) { // if the email is unique we can add the user
            const hash = bcrypt.hashSync(password, saltRounds); // need to encrypt the password before adding to SQL
            var sql = `INSERT INTO users (Name, Email, Password) VALUES ('${name}', '${email}', '${hash}')`;
            await con.promise().query(sql);
            return await this.emailExists(email) == 1 ? true : false;
        }
        return false;
    },
    emailExists : async function(email) {
        var sql = `SELECT COUNT(*) AS userCount FROM users WHERE Email = '${email}'`;
        var results = await con.promise().query(sql);
        return results[0][0].userCount;
    },
    getUser : async function(email) {
        var sql = `SELECT * FROM users WHERE Email = '${email}' LIMIT 1`;
        var results = await con.promise().query(sql);
        return results[0][0];
    },
    login : async function(email, password) { // TODO : create ENUM for return value
        // get user - then match password
        var user = await this.getUser(email);
        if (user != null) { // match password
            if (bcrypt.compareSync(password, user.Password))
                return true;
            else
                return "Wrong password";
        }
        else {
            return "Wrong email";
        }
    }
}