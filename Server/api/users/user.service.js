const pool = require("../../config/database.js");

module.exports = {
    create: (data, callBack) => {
        pool.query(
            `insert into registration(first_name, last_name, email, password)
            values(?,?,?,?)`,
            [
                data.first_name,
                data.last_name,
                data.email,
                data.password,
            ],
            (errors, results, fields) => {
                if (errors) {
                    return callBack(errors);
                }
                return callBack(null, results);
            }
        );
    },
    getUsers: callBack => {
        pool.query(
            `select first_name, last_name, email from registration`,
            [],
            (errors, results, fields) => {
                if (errors) {
                    return callBack(errors);
                }
                return callBack(null, results);
            }
        );
    },
    getUsersbyUserEmail: (email, callBack) => {
        pool.query(
            `select * from registration where email=?`,
            [email],
            (errors, results, fields) => {
                if (errors) {
                    return callBack(errors);
                }
                return callBack(null, results[0]);
            }
        );
    },
    updateUsers: (data, callBack) => {
        pool.query(
            `update registration set first_name=?, last_name=?, password=? where email=?`,
            [
                data.first_name,
                data.last_name,
                data.password,
                data.email,
            ],
            (errors, results, fields) => {
                if (errors) {
                    return callBack(errors);
                }
                if(results.message.split(' ')[2]!='0') return callBack(null,"Done");
                return callBack(null, null);
            }
        );
    },
    deleteUsers: (data, callBack) => {
        pool.query(
            `delete from registration where email = ?`,
            [data.email],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    }
};
