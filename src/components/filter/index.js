import React, { Component } from "react";
import List from "../List";
import FilterLogo from "./../../filter.svg";

class Filter extends Component {
  state = { show: false };

  render() {
    const { show } = this.state;
    return (
      <div style={{ flex: 1, padding: 4,flexDirection:'row' }}>
            
          <img src={FilterLogo} alt="" onClick={() => this.setState({show:!show })} style={{ height: 30, width: 30}}></img>
          {show && <span style={{padding:8,marginBottom:8,position:'absolute',marginLeft:8}}>
           Close filters
            </span>}

        {show && <div style={{paddingTop:15}}>
            <List/>
            </div>}
      </div>
    );
  }
}

export default Filter;
