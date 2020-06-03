const commands = require('./commands/index.js');

// Output un prompt
function done (output){
  output && process.stdout.write(output);
  process.stdout.write('\nprompt $> ');
}
done();

// El evento stdin 'data' se dispara cuando el user escribe una línea
process.stdin.on('data', function (data) {
  var raw = data.toString().trim().split (' '); // remueve la nueva línea
  cmd = raw.shift();
  commands[cmd] && commands[cmd](raw, done);

   // var cmd = args.shift();

});

