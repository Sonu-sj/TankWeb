import React from 'react';

const TankBar = props => {
	let mapLevel = () => {
		if(props.height > 50){
			return 'tank-green';
		} else if(props.height > 25){
			return 'tank-orange';
		} else {
			return 'tank-red';
		}
	}

	return(
		<div className="col-md-2">
			<p className="text-center tank-gal h3" style={{top: `${88 - props.height}%`}}>{props.height*100} GAL</p>
			<div className="tank">
				<div className={`tank-level ${mapLevel()}`}  style={{height: `${props.height}%`}}></div>
			</div>
			<p className="text-center mt-3 h3">{props.product}</p>
		</div>
	)
}

export default TankBar;