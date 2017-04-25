"use-strict";

import React from 'react';
import { Link } from 'react-router';

import Tankcard from './TankCard';

const TankList = props => {
	return (
		<div className="row tankList-container">
			 {[...Array(7)].map((x, i) =>
    			<div className="col-md-12" key={i}>
				<Link to="/tank"> 
					<Tankcard key={i} index = {i} idate = {"09/24/2016"} inventory="181560"/>
				</Link>
			</div>
  )}
		</div>
	)
}

export default TankList;