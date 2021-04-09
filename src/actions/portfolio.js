
export const addPortfolio = portfolio => {
   return {
      type: "ADD_PORTFOLIO",
      payload: portfolio
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