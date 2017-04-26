"use-strict";

import React from 'react';
import { Link } from 'react-router';

import Tankcard from './TankCard';

const TankList = props => {
	console.log(props);
	return (
		<div className="row tankList-container">
			 {props.data.map((d, i) =>
    			<div className="col-md-12" key={i}>
				<Link to="/tank" onClick={()=>props.setFilled(i)}> 
					<Tankcard key={i} index = {i} idate = {d.idate} inventory={d.inventory} set={d.set}/>
				</Link>
			</div>
  )}
		</div>
	)
}

export default TankList;