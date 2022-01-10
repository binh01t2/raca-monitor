const request = require('request');
const chalk = require('chalk');
const axios = require('axios');

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function showinfo()
{	
	console.log('-------------------------------------------------------------------------------')
	raca_price = 0;
    axios({
        method: 'get',
        url: 'https://api.pancakeswap.info/api/v2/tokens/0x12bb890508c125661e03b09ec06e404bc9289040',
        responseType: 'json'
    })
    .then(function (response) {
        raca_price = parseFloat(response['data']['data']['price']);
        raca_price = raca_price.toFixed(6);			
        console.log(chalk.yellow('RACA PRICE: ') + chalk.red(raca_price + '$'));
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .then(function () {
        request('https://market-api.radiocaca.com/nft-sales?pageNo=1&pageSize=20&sortBy=fixed_price&order=asc&name=&saleType&category=17&tokenType',
            { json: true }, (err, res, body) => {
                if (err) {
                    return console.log(err); }
                item_raca_price = parseFloat(body['list'][0]['fixed_price'])/parseFloat(body['list'][0]['count'])
                item_dollar_price = item_raca_price * raca_price;
                console.log(chalk.yellow('Lowest egg price: ') + chalk.red(numberWithCommas(item_raca_price)+' ('+numberWithCommas(item_dollar_price.toFixed(0))+'$)'));
            });
        request('https://market-api.radiocaca.com/nft-sales?pageNo=1&pageSize=20&sortBy=fixed_price&order=asc&name=&saleType&category=16&tokenType',
            { json: true }, (err, res, body) => {
                if (err) {
                    return console.log(err); }
                item_raca_price = parseFloat(body['list'][0]['fixed_price'])/parseFloat(body['list'][0]['count'])
                item_dollar_price = item_raca_price * raca_price;
                console.log(chalk.green('Lowest yellow diamond price: ') + chalk.red(numberWithCommas(item_raca_price)+' ('+numberWithCommas(item_dollar_price.toFixed(0))+'$)'));
            });
        request('https://market-api.radiocaca.com/nft-sales?pageNo=1&pageSize=20&sortBy=fixed_price&order=asc&name=&saleType&category=13&tokenType',
            { json: true }, (err, res, body) => {
                if (err) {
                    return console.log(err); }
                item_raca_price = parseFloat(body['list'][0]['fixed_price'])/parseFloat(body['list'][0]['count'])
                item_dollar_price = item_raca_price * raca_price;
                console.log(chalk.blue('Lowest metamon price: ')+ chalk.red(numberWithCommas(item_raca_price)+' ('+numberWithCommas(item_dollar_price.toFixed(0))+'$)'));
        });
        request('https://market-api.radiocaca.com/nft-sales?pageNo=1&pageSize=20&sortBy=fixed_price&name=&order=asc&saleType&category&tokenType',
            { json: true }, (err, res, body) => {
                if (err) {
                    return console.log(err); }
                item_raca_price = parseFloat(body['list'][0]['fixed_price'])/parseFloat(body['list'][0]['count'])
                item_dollar_price = item_raca_price * raca_price;
                console.log(chalk.magenta('Lowest potion price: ') + chalk.red(numberWithCommas(item_raca_price)+' ('+numberWithCommas(item_dollar_price.toFixed(0))+'$)'));
        });
        request('https://market-api.radiocaca.com/nft-sales?pageNo=1&pageSize=20&sortBy=fixed_price&order=asc&name=&saleType&category=20&tokenType',
            { json: true }, (err, res, body) => {
                if (err) {
                    return console.log(err); }
                item_raca_price = parseFloat(body['list'][0]['fixed_price'])/parseFloat(body['list'][0]['count'])
                item_dollar_price = item_raca_price * raca_price;
                console.log(chalk.cyan('Lowest KISS land price: ') + chalk.red(numberWithCommas(item_raca_price)+' ('+numberWithCommas(item_dollar_price.toFixed(0))+'$)'));
        });
		request('https://market-api.radiocaca.com/nft-sales?pageNo=1&pageSize=20&sortBy=fixed_price&order=asc&name=&saleType&category=34&tokenType',
            { json: true }, (err, res, body) => {
                if (err) {
                    return console.log(err); }
                item_raca_price = parseFloat(body['list'][0]['fixed_price'])/parseFloat(body['list'][0]['count'])
                item_dollar_price = item_raca_price * raca_price;
                console.log(chalk.red('Lowest Havard N land price: ') + chalk.red(numberWithCommas(item_raca_price)+' ('+numberWithCommas(item_dollar_price.toFixed(0))+'$)'));                
        });
		request('https://market-api.radiocaca.com/nft-sales?pageNo=1&pageSize=20&sortBy=fixed_price&order=asc&name=&saleType&category=8&tokenType',
            { json: true }, (err, res, body) => {
                if (err) {
                    return console.log(err); }
                item_raca_price = parseFloat(body['list'][0]['fixed_price'])/parseFloat(body['list'][0]['count'])
                item_dollar_price = item_raca_price * raca_price;
                console.log(chalk.yellow('Metamon N land price: ') + chalk.red(numberWithCommas(item_raca_price)+' ('+numberWithCommas(item_dollar_price.toFixed(0))+'$)'));                
        });
        // request('https://market-api.radiocaca.com/nft-sales?pageNo=1&pageSize=20&sortBy=fixed_price&order=asc&name=purple',
        //     { json: true }, (err, res, body) => {
        //         if (err) {
        //             return console.log(err); }
        //         item_price = parseFloat(body['list'][0]['fixed_price'])
        //         item_price *= raca_price;
        //         console.log(chalk.white('Lowest purple diamond price: ') + chalk.red(numberWithCommas(body['list'][0]['fixed_price'])+' ('+numberWithCommas(item_dollar_price.toFixed(0))+'$)'));
        // });
        request('https://market-api.radiocaca.com/nft-sales?pageNo=1&pageSize=20&sortBy=fixed_price&order=asc&name=&saleType&category=7&tokenType',
            { json: true }, (err, res, body) => {
                if (err) {
                    return console.log(err); }
                item_raca_price = parseFloat(body['list'][0]['fixed_price'])/parseFloat(body['list'][0]['count'])
                item_dollar_price = item_raca_price * raca_price;
                console.log(chalk.cyan('USM Land price: ') + chalk.red(numberWithCommas(item_raca_price)+' ('+numberWithCommas(item_dollar_price.toFixed(0))+'$)'));
        });
    });
}
setInterval(showinfo,10000);