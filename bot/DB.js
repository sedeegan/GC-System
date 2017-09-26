var db = require('node-mysql');
var DB = db.DB;
var BaseRow = db.Row;
var BaseTable = db.Table;

var box = new DB({
    host     : '',
    user     : '',
    password : '',
    database : 'gc-system'
});

var basicTest = function(cb) {
    box.connect(function(conn, cb) {
        cps.seq([
            function(_, cb) {
                User.Table.create(conn, {
                    first_name: 'Hannah',
                    last_name: 'Mckay',
                    gender: 'female'
                }, cb);
            },
            function(res, cb) {
                console.log('connected');
                cb();
            }
        ], cb);
    }, cb);
};
