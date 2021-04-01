# Plan for Components

   1. What path will be visible in the URL bar?
      /stocks

   2. What API endpoints are involved?
      stocks endpoints: /stocks /stocks/:id 
      portfolio endpoints: /portfolios/:id portfolios/:id/stocks 
                           /portfolios/:id/stocks/:id
      users endpoints: /users/:id 
      user form endpoints: /signup /login

   3. What React component(s) will be rendered?
         StockSearchForm
            ->Stock
         StocksContainer 
            ->Stocks
            -->Stock

         Q1. What state do we need for this component?
         Q2. What props do we need for this component?
         Q3. Do we need componentDidMount (or useEffect) here? If so, what is it that
         should happen after the component renders?
         Q4. What event handlers are required? Will the listener(s) be attached in this
         component or will the handler(s) be passed as props to child components?
         Q5. What possible values for state and props will affect the rendered content?

      containers: 
         ## StocksContainer
            Q1 A: 
            Q2 A: 
            Q3 A:
            Q4 A:
            Q5 A:

         ## PortfolioContainer
            Q1 A: 
            Q2 A: 
            Q3 A:
            Q4 A:
            Q5 A:
      forms: 
         ## StockSearchForm
            Q1 A: 
            Q2 A: 
            Q3 A:
            Q4 A:
            Q5 A:

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
            Q1 A: 
            Q2 A: 
            Q3 A:
            Q4 A:
            Q5 A:

         ## Stock
            Q1 A: 
            Q2 A: 
            Q3 A:
            Q4 A:
            Q5 A:

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

   