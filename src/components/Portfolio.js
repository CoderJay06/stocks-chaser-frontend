import Stock from '../components/Stock';

const Portfolio = ({ user, portfolio, renderedSearchResults }) => {
   return (
      <div>
         <h2 className="text-center">{user.username}'s Portfolio</h2>
         {/* {portfolio.stocks.length > 0 ?
            portfolio.stocks.map(stock => {
               return (
                  <Stock key={stock.id} 
                         tickerSymbol={stock.ticker}
                         name={stock.name}
                         pricePerShare={stock.price_per_share} />
               )
            }) : null} */}
            {console.log(renderedSearchResults)}
            {renderedSearchResults.map(stock => {
               return <Stock key={stock.id} 
                             tickerSymbol={stock.ticker}
                             name={stock.name}
                             pricePerShare={stock.price_per_share} />
            })}
      </div>
   )
}

export default Portfolio;
