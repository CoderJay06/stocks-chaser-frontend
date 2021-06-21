import Stock from '../components/Stock';

const Portfolio = ({ renderedSearchResults }) => {
   return (
      <div>
         <h2 className="text-center">Your Portfolio</h2>
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
