import React, { Component } from 'react';
import DropDownLogo from '../../expand-button.svg'

class List extends Component {
     filterType = [
        {
            name:'Year'
        },
        {
            name:'All Quarters'
        },
        {
            name:'All Record Types'
        },
        {
            name:'All Submission Statuses'
        },
    ];
    render () {
        return(
        <div>
            {this.filterType.map((filterType,index)=>(
                <div style={{display:'flex',border:'solid gray 2px' ,width:250, margin:4, borderRadius:10, paddingLeft: 10,justifyContent:'space-between'}}>
                <p key={index}>{filterType.name}</p>
               <img src={DropDownLogo} alt="" style={{display:'flex', flexDirection:'row',height:20,margin:8}}></img>
                </div>
            ))}
        </div>
         ) ;}
}

export default List;
