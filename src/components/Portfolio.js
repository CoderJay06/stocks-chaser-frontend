import Stock from '../components/Stock';

const Portfolio = ({ user, portfolio }) => {
   return (
      <div>
         <h2>{user.username}'s Portfolio</h2>
         {portfolio.stock_quantity > 0 ?
            portfolio.stocks.map(stock => {
               return (
                  <Stock key={stock.ticker} 
                         tickerSymbol={stock.ticker}
                         name={stock.name}
                         pricePerShare={stock.price_per_share} />
               )
            }) : null}
      </div>
   )
}

export default Portfolio;
