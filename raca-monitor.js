const request = require('request');
const chalk = require('chalk');

request('https://market-api.radiocaca.com/nft-sales?pageNo=1&pageSize=20&sortBy=fixed_price&name=egg&order=asc&saleType&category=17&tokenType',
    { json: true }, (err, res, body) => {
        if (err) {
            return console.log(err); }
        console.log(chalk.green('Lowest egg price:') + chalk.red(body['list'][0]['fixed_price']));
    });
request('https://market-api.radiocaca.com/nft-sales?pageNo=1&pageSize=20&sortBy=fixed_price&order=asc&name=yellow',
    { json: true }, (err, res, body) => {
        if (err) {
            return console.log(err); }
        console.log(chalk.green('Lowest yellow diamond price:') + chalk.red(body['list'][0]['fixed_price']));
    });
request('https://market-api.radiocaca.com/nft-sales?pageNo=1&pageSize=20&sortBy=fixed_price&order=asc&name=metamon&saleType&category=13&tokenType',
    { json: true }, (err, res, body) => {
        if (err) {
            return console.log(err); }
        console.log(chalk.green('Lowest metamon price:') + chalk.red(body['list'][0]['fixed_price']));
});
