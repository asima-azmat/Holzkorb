import React, {Component} from "react";


class SellItem extends Component {
    
    
    
    render() {
        return (
          <div className="sellitem">
              <div className="sellitemimage">
              </div>
              <div className="sellitemdetail">
                  {/* TODO: Find carbon footprint API
                            Location calculation formula
                            Add CSS as styled-components*/}
              <text>
                  Product:<br/>
                  Farmer:<br/>
                  Location:<br/>
                  Distance: Location of Farmer - Location of customer<br/>
                  Carbon Footprint: <br/>
              </text>
              </div>
        
          </div>
        );
      }
    

}

export default SellItem;