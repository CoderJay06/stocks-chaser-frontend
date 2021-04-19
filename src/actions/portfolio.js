
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