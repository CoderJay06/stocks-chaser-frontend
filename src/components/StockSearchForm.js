import React, { Component } from 'react';

export default class StockSearchForm extends Component {
   state = {
      searchInput: ''
   }

   handleOnChange = event => {
      this.setState({
         searchInput: event.target.value
      });
   }

   handleOnSubmit = event => {
       // fetch searched stock by current state
      event.preventDefault();
      
   }

   render() {
      return (
         <div>
            <form onSubmit={this.handleOnSubmit}
                  className="max-w-6xl w-3/4 mx-auto mt-16 shadow-lg px-4 py-6"
             >
               <label>Search a Stock</label>
               <input type="text" 
                      className="w-full border p-4 my-4"
                      onChange={this.handleOnChange} 
                      value={this.state.searchInput}
                      placeholder="Enter ticker symbol" />
               <br />
               <input 
                  type="submit" 
                  className="w-full p-4 bg-blue-300 mt-4 hover:bg-blue-400 transition-all duration-200"
                  value="Search" />
            </form>
         </div>
      )
   }
}