const request = require('request');
const chalk = require('chalk');

function numberWithCommas(x) {
    return x.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function showinfo()
{	
	console.log('-------------------------------------------------------------------------------')
    request('https://api.pancakeswap.info/api/v2/tokens/0x12bb890508c125661e03b09ec06e404bc9289040',
        { json: true }, (err, res, body) => {
            if (err) {
                return console.log(err); }
            console.log(chalk.yellow('Raca price:') + chalk.red(body['data']['price'] + '$'));
        });
    request('https://market-api.radiocaca.com/nft-sales?pageNo=1&pageSize=20&sortBy=fixed_price&name=egg&order=asc&saleType&category=17&tokenType',
        { json: true }, (err, res, body) => {
            if (err) {
                return console.log(err); }
            console.log(chalk.yellow('Lowest egg price:') + chalk.red(numberWithCommas(body['list'][0]['fixed_price'])));
        });
    request('https://market-api.radiocaca.com/nft-sales?pageNo=1&pageSize=20&sortBy=fixed_price&order=asc&name=yellow',
        { json: true }, (err, res, body) => {
            if (err) {
                return console.log(err); }
            console.log(chalk.green('Lowest yellow diamond price:') + chalk.red(numberWithCommas(body['list'][0]['fixed_price'])));
        });
    request('https://market-api.radiocaca.com/nft-sales?pageNo=1&pageSize=20&sortBy=fixed_price&order=asc&name=metamon&saleType&category=13&tokenType',
        { json: true }, (err, res, body) => {
            if (err) {
                return console.log(err); }
            console.log(chalk.blue('Lowest metamon price:') + chalk.red(numberWithCommas(body['list'][0]['fixed_price'])));
    });
    request('https://market-api.radiocaca.com/nft-sales?pageNo=1&pageSize=20&sortBy=fixed_price&order=asc&name=&saleType&category=15&tokenType',
        { json: true }, (err, res, body) => {
            if (err) {
                return console.log(err); }
            console.log(chalk.magenta('Lowest potion price:') + chalk.red(numberWithCommas(body['list'][0]['fixed_price'])));
    });
    request('https://market-api.radiocaca.com/nft-sales?pageNo=1&pageSize=20&sortBy=fixed_price&order=asc&name=&saleType&category=20&tokenType',
        { json: true }, (err, res, body) => {
            if (err) {
                return console.log(err); }
            console.log(chalk.cyan('Lowest KISS land price:') + chalk.red(numberWithCommas(body['list'][0]['fixed_price'])));
    });
    request('https://market-api.radiocaca.com/nft-sales?pageNo=1&pageSize=20&sortBy=fixed_price&order=asc&name=purple',
        { json: true }, (err, res, body) => {
            if (err) {
                return console.log(err); }
            console.log(chalk.white('Lowest purple diamond price:') + chalk.red(numberWithCommas(body['list'][0]['fixed_price'])));
    });
	request('https://market-api.radiocaca.com/nft-sales?pageNo=1&pageSize=20&sortBy=fixed_price&order=asc&name=&saleType&category=7&tokenType',
        { json: true }, (err, res, body) => {
            if (err) {
                return console.log(err); }
            console.log(chalk.cyan('USM Land price:') + chalk.red(numberWithCommas(body['list'][0]['fixed_price'])));
    });
}
setInterval(showinfo,10000);