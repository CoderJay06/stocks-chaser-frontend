import Stock from '../components/Stock';

const Portfolio = ({ user, portfolio }) => {
   return (
      <div>
         <h2>{user.username}'s Portfolio</h2>
         {portfolio.stocks.length > 0 ?
            portfolio.stocks.map(stock => {
               return (
                  <Stock key={stock.Symbol} 
                         stock={stock}
                         tickerSymbol={stock.Symbol}
                         name={stock.Name}
                         pricePerShare={stock['50DayMovingAverage']} />
               )
            }) : null}
      </div>
   )
}

export default Portfolio;
