var axios = require("axios").default;

const stocks = ['AAPL', 'AMZN','NFLX', 'PEP']
const get = stocks.map(e => {

	var options = {
		method: 'GET',
		url: `https://yahoo-finance15.p.rapidapi.com/api/yahoo/qu/quote/${e}/financial-data`,
		headers: {
			'x-rapidapi-host': 'yahoo-finance15.p.rapidapi.com',
			'x-rapidapi-key': 'f0eb438c2cmsh13a8a0a2b744e88p17ee4cjsn8a3fc5a9f586'
		}
	};
	
	axios.request(options).then(function (response) {
		console.log(response.data.financialData.currentPrice);
	}).catch(function (error) {
		console.error(error);
	});
})