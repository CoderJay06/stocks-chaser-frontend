# TODO
   [x] Test out fetching routes
   [ ] Start to implement Redux from the beginning ?? 
   [ ] Install and implement react router into app

   ## Containers TODO
      [x] Build out StocksContainer
         - is a class component
         - must have state for stocks data { stocks: [...] }
         - uses componentDidMount on render 
         - componentDidMount fetches stocks from backend and
           sets state
         - calls Stocks component inside render 
         - passes state as props to Stocks

   ## Components TODO
      [x] Build Stocks Component
         - is stateless and functional
         - recieves props from parent
         - renders stock data inside divs
           by passing down props to Stock
           component
         
      [ ] Build Stock Component
         - is stateless and functional
         - recieves props from parent
         - renders all stock attributes to the
           page (tickerSymbol, name, pricePerShare)
         - has button for viewing more details of stock





