#!/usr/bin/env node
var fs = require('fs');
var request = require('request');
var argv = require('minimist')(process.argv.slice(2));
var packagename = argv._[0];

request('https://registry.npmjs.org/' + packagename, function(err, res) {
  if(err) {
    console.error(err);
    process.exit(1);
  }

  if(res.statusCode === 404) {
    console.log(packagename + ' is available now');
  }

  if(res.statusCode === 200) {
    console.log(packagename + ' is already in use');
  }
});
