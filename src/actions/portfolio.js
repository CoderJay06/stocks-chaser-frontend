
export const addPortfolio = portfolio => {
   return {
      type: "ADD_PORTFOLIO",
      payload: portfolio
   }
}

export const addExistingPortfolio = portfolio => {
   return {
      type: "ADD_EXISTING_PORTFOLIO",
      payload: portfolio
   }
}

export const removePortfolio = () => {
   return {
      type: "REMOVE_PORTFOLIO"
   }
}

export const viewPortfolio = portfolio => {
   return {
      type: "VIEW_PORTFOLIO",
      payload: portfolio
   }
}

export const addStock = stock => {
   return {
      type: "ADD_STOCK",
      payload: stock
   }
}

export const portfolioError = error => {
   return {
      type: "ERROR_LOADING_PORTFOLIO",
      payload: error
   }
}

// loading statuses
export const START_LOADING_PORTFOLIO = "START_LOADING_PORTFOLIO";
export const ERROR_LOADING_PORTFOLIO = "ERROR_LOADING_PORTFOLIO";
export const SUCCESSFULLY_LOADED_PORTFOLIO = "SUCCESSFULLY_LOADED_PORTFOLIO";

// types
export const ADD_PORTFOLIO = "ADD_PORTFOLIO";
export const ADD_EXISTING_PORTFOLIO = "ADD_EXISTING_PORTFOLIO";
export const REMOVE_PORTFOLIO = "REMOVE_PORTFOLIO";
export const VIEW_PORTFOLIO = "VIEW_PORTFOLIO";
export const ADD_STOCK = "ADD_STOCK";