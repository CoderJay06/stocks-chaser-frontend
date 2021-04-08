
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