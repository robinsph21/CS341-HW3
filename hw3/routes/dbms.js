/**
 * dbms.js
 *
 * This file contains functions for accessing the MySQL database
 * which contains the Cheesecake order data.
 *
 */

exports.version = '0.0.1';


var mysql = require('mysql'),
    async = require('async');

var host = "127.0.0.1";    //from GCloud instance (change to match your db)
var database = "CHEESECAKE";  //database name
var user = "root";         //username (change to match your db)
var password = "fool";  //password (change to match your db, yes this is very poor practice)

/**
 * dbquery
 *
 * performs a given SQL query on the database and returns the results
 * to the caller
 *
 * @param query     the SQL query to perform (e.g., "SELECT * FROM ...")
 * @param callback  the callback function to call with two values
 *                   error - (or 'false' if none)
 *                   results - as given by the mysql client
 */
exports.dbquery = function(query_str, callback) {

    var dbclient;
    var results = null;

    async.waterfall([

        //Step 1: Connect to the database
        function (callback) {
            console.log("[ dbms.js ] <dbms.dbquery>  |  Creating connection...");
            dbclient = mysql.createConnection({
                host: host,
                user: user,
                password: password,
                database: database,
            });

            dbclient.connect(callback);
        },

        //Step 2: Issue query
        function (results, callback) {
            console.log("[ dbms.js ] <dbms.dbquery>  |  Retrieving data...");
            dbclient.query(query_str, callback);
        },

        //Step 3: Collect results
        function (rows, fields, callback) {
            console.log("[ dbms.js ] <dbms.dbquery>  |  Dumping data:");
            results = rows;
            console.log("                            .      " + rows + "\n                            .      ");
            callback(null);
        }

    ],
    // waterfall cleanup function
    function (err, res) {
        if (err) {
            console.log("[ dbms.js ] <dbms.dbquery>  |  Database query failed.");
            console.log("                            .      " + err + "\n                            .      ");
            callback(err, null);
        } else {
            console.log("[ dbms.js ] <dbms.dbquery>  |  Database query completed.");
            callback(false, results);
        }

        //close connection to database
        dbclient.end();

    });

}//function dbquery
