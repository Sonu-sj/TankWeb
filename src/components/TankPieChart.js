"use strict";

import React, {Component} from 'react';
import {Pie, Cell, PieChart, ResponsiveContainer } from 'recharts';

class TankPieChart extends Component {
	render(){
		const data = [
		  {value: 400}
		];

		return (
		  <ResponsiveContainer width="80%" height="70%">
		    <PieChart>
		      <Pie data={data} startAngle={220} endAngle={0} innerRadius={200} outerRadius={212} fill="#53f5b9" stroke="#53f5b9" paddingAngle={5} />
		      <Pie data={data} startAngle={320} endAngle={358} innerRadius={203} outerRadius={208} fill="#5d81c7" stroke="#5d81c7" paddingAngle={5} />
		    </PieChart>
		  </ResponsiveContainer>
		);
	}
}

export default TankPieChart;