"use-strict";

import React from 'react';

import { FaAngleRight, FaClockO, FaCircle, FaExclamationCircle} from 'react-icons/lib/fa';
import {TiLocationArrow}  from 'react-icons/lib/ti';

const Tankcard = props => {
	console.log(props);
	return (
		<div className="card mb-3">
			<div className="row">
				<div className="col-md-1">
					<h1 className="text-center display-5 vertical-center mb-0">
						<FaExclamationCircle className={[props.set ? "success":"warning"]}/>
						<FaCircle className="mt-4 success" />
					</h1>
				</div>
				<div className="col-md-10">
					<h1 className="card-title mb-4">
						<TiLocationArrow className="align-top" /> A Kroger
						<span className="float-right text-muted h2">
							<FaClockO /> {props.idate}
						</span>
					</h1>
					<h2 className="card-subtitle mb-3 text-muted">Product: 87 Gasohol</h2>
					<h2 className="card-subtitle mb-3 text-muted">Inventory: {props.inventory} <span className="ml-5 text-muted">Ullage: 12000</span></h2>
				</div>
				<div className="col-md-1">
					<h1 className="text-center vertical-center display-3 mb-0"><FaAngleRight className="text-muted" /></h1>
				</div>
			</div>
		</div>
	)
} 

export default Tankcard;