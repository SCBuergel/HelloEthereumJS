var express = require('express');
var app = express();

var Web3 = require('web3');
var sandboxId = 'b09c30a293';
var sandboxUrl = 'https://sebastianbuergel.by.ether.camp:8555/sandbox/' + sandboxId;
var web3 = new Web3(new Web3.providers.HttpProvider(sandboxUrl));
var contractAddress = '0x052ecb441e56e28803008f70daa586959797f937';
require('./abi.js');
console.log(JSON.stringify(contractAbi));
web3.eth.defaultAccount = web3.eth.accounts[0];

var contractObject = web3.eth.contract(contractAbi);
var contractInstance = contractObject.at(contractAddress);

app.get('/', function (req, res) {
   res.send('Hello World');
})

app.get('/getBlock', function (req, res) {
   res.send('blockCount: ' + web3.eth.blockNumber);
})

app.get('/setGreeting', function (req, res) {
    contractInstance.setGreeting('Hello BIOTS2016!');
    res.send('set greeting!');
})

app.get('/getGreeting', function (req, res) {
    contractInstance.getGreeting(function(error, response) {
        console.log('greeting: ' + response + ', error: ' + error);
    });
    res.send('got greeting!');
})

app.get('/getTime', function (req, res) {
    contractInstance.getNumber(function(error, response) {
        console.log('response: ' + response + ', error: ' + error);
    });
    res.send('got time!');
})

var server = app.listen(8080, function () {
  console.log("express server running");
  console.log('default account: ' + web3.eth.accounts[0])
})
