const shell = require('shelljs');
const config = require('./../.gatekeeperrc');

module.exports = function runTests() {
  console.log('Running tests ...');
  shell.exec(config.testCommand);
}
