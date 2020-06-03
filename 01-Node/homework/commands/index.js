const fs = require ('fs');
const axios = require ('axios');
module.exports = {
    pwd: function(args, done) {
        done(process.cwd());
    },
    date: function(args, done) {
        done(Date());
    },
    ls: function(args, done){
        var output = '';
        fs.readdir('.', function(err, files) {
            if (err) throw err;
            files.forEach(function(file) {
              output = output + file.toString() + "\n";
            })
        
            done(output);  
        });
    },
    echo: function (args, done){
        var output = '';
        args.forEach(function(arg){
            output = output + arg.toString() + "\n";
        })
        done(output);    
    },
    cat: function (args, done){
        fs.readFile(args[0], 'utf-8', function(err, data){
            if (err) throw err;
            done(data.toString());
        });
    },
    curl: function (args, done){
        axios(args[0])
        .then(function(response){
            done (response);
        });
    }
}