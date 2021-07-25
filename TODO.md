# TODO
   [x] Test out fetching routes
   [x] Start to implement Redux from the beginning ?? 
   [x] Install and implement react router into app
   [x] Query stock data from an api
   [ ] Save rendered api stock data to backend stocks db (Post request)
   [ ] Save users added portfolio, including any stocks they added to the db.
       It should be accessable to them on login
   [ ] Need to save user added stocks to the db. (They are only saving
       temporarly in store!)
   

   ## Redux
      [x] install redux, react-redux dependinces
      [x] set up redux store
      [x] add connect for mapping state and dispatctch to props
      [x] add stocks data to the store
      [x] add logged in user data to the store
      [x] remove users from the store it is not needed 
          (better for security to only keep this in the db)
      [ ] refactor to make all fetch requests use redux-thunk logic
         - start with login form. Need to authenticate user on backend,
           dispatch action to login user

      [ ] add loading actions for users and portfolios

      [ ] add portfolioReducer for creating users portfolio
         - Portfolio state
            ex 1:
            {
               portfolio: [
                  {
                     id: 1,
                     user_id: 1
                  }
               ],
               stocks: [
                  0: {
                     ticker: 'TSLA',
                     name: 'Tesla'
                  }
               ]
            }

            ex 2:
            {
               portfolio: {},
               stocks: {}
            }





      - Stocks
         what will our state look like ?
            state = {
               stocks: {
                  loadingState: 'notLoading' || 'loading' || 'successfullyLoaded',
                  all: []
               }
            }

         what type of actions will be dispatched?
            - Loading status actions 
            - Action for adding stocks data

         which reducers will care about the action?
            - The stocksReducer
   
         how willthey respond to that action?
            - Will update state, loading status and return new state object
              without mutating

         how will states shape be affected by the action?
            - State will have a new loading status
            - State will have stock data added to it

         

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

      [ ] Build Portfolio container
         - renders Portfolio component
         - passes props

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
         
      [ ] Build SignupForm component
         - is class component
         - has state for user input 
         - renders a form with inputs for 
           email, username , password , submit
         - connect to store (state, dispatch)
         - dispatches action to add user

      [ ] Build Portfolio component
         - is functional component 
         - recieves props from container

