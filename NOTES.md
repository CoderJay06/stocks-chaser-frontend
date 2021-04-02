# Plan for Components

   1. What path will be visible in the URL bar?
      /stocks

   2. What API endpoints are involved?
      stocks endpoints: api/v1/stocks 
                        api/v1/stocks/:id 

      portfolio endpoints: api/v1/portfolios/:id 
                           api/v1/portfolios/:id/stocks 

      users endpoints: api/v1/users/:id 
                       api/v1/users/:id/portfolios/:id

      user form endpoints: /signup /login

   3. What React component(s) will be rendered?

         StocksContainer 
            ->Stocks
            -->Stock

         PortfolioContainer 
            ->Portfolio

         StockSearchForm
            ->Stock (fetch stocks/:id)

         SignupForm
         LoginForm
            ->UserProfile

         Q1. What state do we need for this component?
         Q2. What props do we need for this component?
         Q3. Do we need componentDidMount (or useEffect) here? If so, what is it that
             should happen after the component renders?
         Q4. What event handlers are required? Will the listener(s) be attached in this
             component or will the handler(s) be passed as props to child components?
         Q5. What possible values for state and props will affect the rendered content?

      containers: 
         ## StocksContainer
            Q1 A: state => array of fetched stocks
            Q2 A: props needed ?
            Q3 A: componentDidMount can be used to fetch stocks data (use middleWare Redux thunk)
            Q4 A: event handlers? TBD
            Q5 A: When component is rendered stock data will be fetched and set as state

         ## PortfolioContainer
            Q1 A: 
            Q2 A: 
            Q3 A:
            Q4 A:
            Q5 A:
      forms: 
         ## StockSearchForm
            Q1 A: state => for input value entered by user
            Q2 A: no props needed yet
            Q3 A: no componentDidMount
            Q4 A: event handlers will be onSubmit, onChange
            Q5 A: When rendered will display a search form for searching stocks

         ## SignupForm
            Q1 A: 
            Q2 A: 
            Q3 A:
            Q4 A:
            Q5 A:

         ## LoginForm
            Q1 A: 
            Q2 A: 
            Q3 A:
            Q4 A:
            Q5 A:

      stateless & presentational: 
         ## Stocks (or StocksIndex)
            Q1 A: Stateless
            Q2 A: Recieves stocks props  
            Q3 A: Doesn't need a componentDidMount 
            Q4 A: No event handlers 
            Q5 A: When rendered, passes down props to Stock component

         ## Stock
            Q1 A: Stateless
            Q2 A: Recieves props for each stock (ticker, name, price_per_share)
            Q3 A: No componentDidMount
            Q4 A: Event handlers: onClick handler for viewing a specific stock
            Q5 A: Displays each stock and its details on render

         ## UserProfile
            Q1 A: 
            Q2 A: 
            Q3 A:
            Q4 A:
            Q5 A:

         ## Portfolio
            Q1 A: 
            Q2 A: 
            Q3 A:
            Q4 A:
            Q5 A:

         ## Navbar 
            Q1 A: 
            Q2 A: 
            Q3 A:
            Q4 A:
            Q5 A:

   