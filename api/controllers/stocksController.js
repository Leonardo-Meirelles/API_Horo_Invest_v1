import { stocks } from '../../models/stocks';

const getStocks = async (req, res) => {

   try {
       const result = await stocks.findAll({});
       const finalResult = result.map( item => {
           const { id, stockName} = item;
           return {
               id,
               stockName
           }
       })
       res.status(200).send(finalResult)
   } catch(error) {
       throw error
   }

};

const postStocksOrder = (req, res) => {

    const {userName, userEmail, stock, quantity, stockValue} = req.body;
    const viewModel = {
        userName,
        userEmail,
        stock,
        quantity,
        stockValue
    }

}

module.exports = {

    getStocks,
    postStocksOrder

}

