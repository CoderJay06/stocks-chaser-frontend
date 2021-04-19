import Stock from '../components/Stock';

const Portfolio = ({ user, portfolio }) => {
   return (
      <div>
         <h2>{user.username}'s Portfolio</h2>
         {portfolio.stocks.length > 0 ?
            portfolio.stocks.map(stock => {
               return (
                  <Stock key={stock.id} 
                         tickerSymbol={stock.ticker}
                         name={stock.name}
                         pricePerShare={stock.price_per_share} />
               )
            }) : null}
      </div>
   )
}

export default Portfolio;
