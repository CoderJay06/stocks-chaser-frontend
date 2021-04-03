# TODO
   [x] Test out fetching routes
   [ ] Start to implement Redux from the beginning ?? 
   [ ] Install and implement react router into app

   ## Redux
      [x] install redux, react-redux dependinces
      [x] set up redux store

      - Stocks
         what will our state look like ?
            state = {
               stocks: {
                  loadingState: 'notLoading' || 'loading' || 'successfullyLoaded',
                  all: []
               }
            }

         what type of actions will be dispatched?
         which reducers will care about the action?
         how willthey respond to that action?
         how will states shape be affected by the action?

   ## Containers TODO
      [x] Build out StocksContainer
         - is a class component
         - must have state for stocks data { stocks: [...] }
         - uses componentDidMount on render 
         - componentDidMount fetches stocks from backend and
           sets state
         - calls Stocks component inside render 
         - passes state as props to Stocks

      [ ] Build StocksSearchFormContainer
         - renders StockSearchForm component and
           passes state as props

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


      [ ] Build StockSearchForm component
         - will have state for user input
         - renders a form with search box and submit
         - querys alphavintage api to get stock data and
           sets it as search results state
         - renders component to show searched out stock
           on submitting of form

      [ ] Build Navbar component
         - is functional stateless component
         - uses react router for routing to each page
         - imports Signup, Login, StocksContainer, Homepage
         - imports react-router-dom with necessary components 
         




