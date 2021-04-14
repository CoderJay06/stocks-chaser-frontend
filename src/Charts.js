import React from 'react';
import Chart from './Chart';
import { getData } from "./utils"


import { TypeChooser } from "react-stockcharts/lib/helper";


class Charts extends React.Component {
    componentDidMount() {
        console.log('props in Charts ', this.props.stockData)
        
        let ticker = this.props.stockTickerSymbol;
        getData(ticker).then(data => {
            data.sort((a,b) => new Date(a.date) > new Date(b.date) ? 1 : -1);
            this.setState({ data })
        })
    }
    render() {
       console.log('state in Charts ', this.state)
        if (this.state == null) {
            return <div>Loading...</div>
        }
        return (
            <TypeChooser>
                {type => <Chart type={type} data={this.state.data} />}
            </TypeChooser>
        )
    }
}
 export default Charts;