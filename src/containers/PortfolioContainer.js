import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Portfolio from '../components/Portfolio';
import { fetchPortfolios } from '../actions/fetchPortfolios';

class PortfolioContainer extends Component {
   handleOnClick = () => {
      // add a new portfolio for current user
      console.log('user inside handleClick: ', this.props.user)
      this.props.dispatchFetchPortfolios(this.props.user)
   }
   render() {
      return (
         <div>
            {console.log('User portfolio: ', this.props.user)}
            {this.props.portfolio ?
               <Portfolio user={this.props.user} portfolio={this.props.portfolio} />
               :
               <button 
                  className="w-half p-4 bg-blue-300 mt-4 hover:bg-blue-400 transition-all duration-200"
                  onClick={this.handleOnClick}
               >Add Portfolio</button>
            }
            <button 
                  className="w-half p-4 bg-blue-300 mt-4 hover:bg-blue-400 transition-all duration-200"
                  onClick={() => this.handleOnClick()}
         >Add Portfolio</button>
         </div>
      )
   }
}

const mapStateToProps = state => {
   return {
      portfolio: state.portfolio,
      user: state.login.user
   }
}

const mapDispatchToProps = dispatch => {
   return {
      dispatchFetchPortfolios: user => dispatch(fetchPortfolios(user))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioContainer);


