'use strict';

// Dependencies
import React, {Component} from 'react';
import { Link } from 'react-router';
import { FaInbox, FaAreaChart, FaAngleRight, FaAngleLeft, FaGroup, FaThumbTack, FaTint, FaAngleDoubleDown, FaTruck, FaCircle,FaPencil,FaFlask } from 'react-icons/lib/fa';
import { GoDash} from 'react-icons/lib/go';
import { MdDataUsage, MdAccessTime} from 'react-icons/lib/md';
import { TiStopwatch } from 'react-icons/lib/ti';

// Components
import Tankpiechart from '../components/TankPieChart';

import InventoryInput from '../components/InventoryInput';

import {AreaChart , Area, ResponsiveContainer, XAxis, YAxis, CartesianGrid} from 'recharts';

const data = [
  {name: '13:00', value: 184, value2: 123},
  {name: '14:00', value: 167, value2: 121},
  {name: '15:00', value: 150, value2: 114},
  {name: '16:00', value: 138, value2: 109},
  {name: '17:00', value: 123, value2: 76},
  {name: '18:00', value: 91, value2: 48},
];

class XAxisTick extends Component{
  render () {
    const {x, y, stroke, payload} = this.props;
    
    return (
      <g transform={`translate(${x},${y})`}>
        <text style={{fontSize: 30}}  x={30} y={30} dy={13} textAnchor="end" fill="#fff" transform="rotate(0)">{payload.value}</text>
      </g>
    );
  }
};

class YAxisTick extends Component{
  render () {
    const {x, y, stroke, payload} = this.props;
    return (
      <g transform={`translate(${x},${y})`}>
        <text style={{fontSize: 30}}  x={0} y={0} dx={-16} textAnchor="end" fill="#fff" transform="rotate(0)">{payload.value}</text>
      </g>
    );
  }
};

class TankDetails extends Component {
	constructor(props){
		super(props);
    var d = new Date();
    d.setDate(d.getDate() - 1);
		this.state = {
			title: "123456789",
      openModal:false,
      idate:d,
      Inventory:"180156"
		}
	}
  
  updateData=(obj)=>{
    this.setState({
      Inventory:obj.Inventory,
      idate:obj.idate
    })
  }


  render() {
    return (
      <div className="height-100 p-4">
        <div className="row height-40 m-0 pos-relative" onClick={()=>this.setState({openModal:true})}>
          <h1 style={{left: 0}} className="vertical-center display-2 mb-0"><FaAngleLeft className="text-muted"/></h1>
          <div className="offset-md-2 col-md-8 height-100">
            <h1 className="text-center display-3 mb-5"><Link to="/"><FaAngleLeft style={{position:"absolute",left:0}} className="text-muted" /></Link>T2 - Diesel</h1>
            <h1 style={{top: '35%'}} className="text-muted2 horizontal-center">INVENTORY</h1>
            <h1 className="center display-3 font-weight-bold">{this.state.Inventory}</h1>
            <h1 style={{top: '65%'}} className="horizontal-center">3,864</h1>
            <h1 style={{top: '75%'}} className="text-muted2 horizontal-center">ULLAGE</h1>
            <Tankpiechart />
            <InventoryInput open = {this.state.openModal} idate ={this.state.idate} test = "test23" Inventory = {this.state.Inventory} updateData = {this.updateData}/>
          </div>
          <h1 style={{right: 0}} className="vertical-center display-2 mb-0"><FaAngleRight className="text-muted" /></h1>
        </div>


        <div className="row height-50 m-0 flex-nowrap" style={{overflow: 'scroll'}}>
          <div className="col-md-12">
            <div className="row">

              <div className="col-md-12 mb-5r text-uppercase">
                <h2 className="text-muted2"><FaThumbTack className="align-top"/>  Site Name</h2>
                <p className="h1 ml-5">Aberdeen BP - (102110)</p>
              </div>

              <div className="col-md-6 mb-5r text-uppercase">
                <h2 className="text-muted2"><TiStopwatch className="align-top"/>  TTSL</h2>
                <p className="h1 ml-5">39 Hrs</p>
              </div>

              <div className="col-md-6 mb-5r text-uppercase">
                 <h2 className="text-muted2"><FaInbox className="align-top"/>  Max Fill</h2>
                 <p className="h1 ml-5">22,000 GAL</p>
              </div>
              <div className="col-md-6 mb-5r text-uppercase">
                <h2 className="text-muted2"><FaFlask className="align-top"/> Inventory</h2>
                <p className="h1 ml-5">{this.state.Inventory} GAL<FaPencil onClick={()=>this.setState({openModal:true})} className="align-top" style={{"fontSize":"1.8rem"}}/></p>
              </div>
              <div className="col-md-6 mb-5r text-uppercase">
                <h2 className="text-muted2"><MdAccessTime className="align-top"/> Last Inventory</h2>
                <p className="h1 ml-5">03/17/2017 04:08</p>
              </div>
              <div className="col-md-6 mb-5r text-uppercase">
                <h2 className="text-muted2"><FaTruck className="align-top"/>Last Delivery</h2>
                <p className="h1 ml-5">03/17/2017 02:39</p>
              </div>

              <div className="col-md-6 mb-5r text-uppercase">
                <h2 className="text-muted2"><FaGroup className="align-top"/>  Customer</h2>
                <p className="h1 ml-5 mb-5r">Aberdeen BP</p>
              </div>

            </div>
          </div>


          <div className="col-md-12 pos-relative h-100">
            <div className="row h-100">

              <div className="col-md-12 text-uppercase h-100">
                <h2 className="text-muted2 mb-5"><FaAreaChart className="align-top"/>Forecast Usage</h2>
                <ResponsiveContainer width="95%" height="80%">
                  <AreaChart data={data}>
                    <XAxis dataKey="name" height={60} tick={<XAxisTick />} />
                    <YAxis height={60} tick={<YAxisTick />} />
                    <CartesianGrid vertical={false} />
                    <Area type='monotone' dataKey='value'  stroke='#42b597' fill="#42b597" />
                    <Area type='monotone' dataKey='value2' stroke='#2bc28a' fill="#2bc28a" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

            </div>
          </div>

        </div>

        <div className="row height-10 m-0 flex-nowrap" style={{overflow: 'scroll'}}>
          <div className="col-md-12 text-uppercase">
            <p className="text-center m-0"><FaCircle className="align-top"/><FaCircle className="align-top ml-3"/></p>
            <h4 className="text-muted2 text-center mt-5 mb-0">Swipe for More Details</h4>
            <h2 className="text-center display-4 mb-0"><FaAngleDoubleDown className="align-top"/></h2>
          </div>
        </div>

      </div>
    );
  }
};

export default TankDetails;