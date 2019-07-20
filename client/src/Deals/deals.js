import React, { Component } from 'react';
import './deals.css';

class Deals extends Component {
    
    constructor() {
      super()
      this.state = {
          loading: true,
          openDeals: [],
          pendingDeals: [],
          closedDeals: [],
          title: "Current Offers"
      }
    }
  
    async componentDidMount() {
        const url = 'http://localhost:3000/api/deals';
        const response = await fetch(url);
        const data = await response.json();
        this.setState({openDeals: data.openDeals, pendingDeals: data.pendingDeals, closedDeals: data.closedDeals, loading: false});
    };

    render() {
        let openDeals = this.state.openDeals;
        console.log(openDeals);
        return (
            <div>
                <h2>{this.state.title}:</h2> 
                {this.state.loading ? (<div>loading...</div>) :
                    <div>
                        <div>OpenDeals</div>
                        <ul className="openDeals">{openDeals.map(deal => 
                            <li key={deal.id} className="dealBox">
                                <div className="dealRow col-md-5">
                                {deal.offered} {deal.offeredQTY} {deal.offeredUnits} 
                                </div>
                                <div className="dealRow for col-md-2">for</div>
                                <div className="dealRow col-md-5">
                                {deal.asked} {deal.askedQTY} {deal.askedUnits}
                                </div>
                            </li>
                        )}
                        </ul> 
                        {/* <div>{this.state.pendingDeals[0].offered}</div>  */}
                    </div>  
                }
                    {/* <ul>{openDeals.map(deal => 
                    <li key={deal.id}>{deal.offered}</li>
                    )}
                </ul> */}
                
            </div>
        )
    }
}

export default Deals;