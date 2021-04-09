
const Portfolio = ({user, portfolio}) => {
   return (
      <div>
         <h2>{user.username}'s Portfolio</h2>
         {portfolio.stocks.length > 0 ?
            portfolio.stocks.map(stock => stock.Name) : null}
      </div>
   )
}

export default Portfolio;