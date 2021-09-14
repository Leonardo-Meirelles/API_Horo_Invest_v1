var axios = require("axios").default;

const GetStocksApi = async (stockName) => {

	let options = {
		
		method: 'GET',
		url: `https://www.okanebox.com.br/api/acoes/ultima/${stockName}/`,
		//Real time data, but it's limited.
		// url: `https://yahoo-finance15.p.rapidapi.com/api/yahoo/qu/quote/${stockName}/financial-data`,
		// headers: {
		// 	'x-rapidapi-host': 'yahoo-finance15.p.rapidapi.com',
		// 	'x-rapidapi-key': 'f0eb438c2cmsh13a8a0a2b744e88p17ee4cjsn8a3fc5a9f586'
		// }
	}

	try {

		let response = await axios.request(options)

		let responsePrice = response.data.PREULT

		let stockDataObject = {

			stockName: stockName,
			stockPrice: responsePrice
		}
		
		return stockDataObject

	} catch (error) {

		throw error
	}
}

module.exports = {
	GetStocksApi
}
