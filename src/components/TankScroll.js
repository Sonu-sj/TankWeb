"use-strict";

import React from 'react';
import ReactDOM from 'react-dom';
import { FaAngleRight, FaAngleLeft, FaHome} from 'react-icons/lib/fa';
import {TiHome}  from 'react-icons/lib/ti';

import TankBar from './TankBar';
import SiteList from './SiteList';

const TankScroll = props => {
	let ListContainer = null;
	let scrollHorizontal = (val) => {
    ListContainer.scrollLeft = ListContainer.scrollLeft + val;
}
	return(
		<div className="row height-40 pos-relative tankScroll-container">
			<h1 style={{left: 0}} className="vertical-center display-2 mb-0"><FaAngleLeft className="text-muted" onClick = {()=>{scrollHorizontal(-100)}}/></h1>
			<div className="offset-md-1 col-md-10 height-100">
				<SiteList name = {props.Site.siteName} changeSite={props.changeSite}/>
				<div className="row tank-scroll-container" ref={(container) => { ListContainer = container; }}>
					{props.Site.productList.map((product,i)=><TankBar key={i} height={product.height} product={product.name}/>)}
				</div>
			</div>
			<h1 style={{right: 0}} className="vertical-center display-2 mb-0"><FaAngleRight className="text-muted" onClick = {()=>{scrollHorizontal(100)}}/></h1>
		</div>
	);
}

export default TankScroll;