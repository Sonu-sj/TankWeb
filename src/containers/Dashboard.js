'use strict';

// Dependencies
import React, { Component } from 'react';

// Components
import TankScroll from '../components/TankScroll'
import TankList from '../components/TankList'

//mock Data
import mockData from '../mockData.js'

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.Sites = [{
      siteName: 'A',
      productList: [
        { name: 'Diesel', height: 30 },
        { height: 33, name: "Blend-DSL" },
        { height: 20, name: "Propane" },
        { height: 60, name: "RU-DSL" },
        { height: 35, name: "SU-DSL" },
        { height: 29, name: "Butane" }
      ]
    }];
    for (let i = 66; i < 91; i++) {
      this.Sites.push({
        siteName: String.fromCharCode(i),
        productList: this.getRandomProducts(),
      })
    }

    const ListData = Array.from({length: 5}, (v, i) => {
        return {
          inventory:181560,
          idate:"09/24/2016",
          set:false
        }
      })
    this.currentSite = this.Sites[0];
    this.currentSiteIndex = 0;
    this.state = {
      title: "123456789",
      currentSite: this.currentSite,
      currentSiteIndex: this.currentSiteIndex,
      ListData:{data:ListData}
    }
  }
  getRandomProducts = () => {
    return [...Array(7)].map((x, i) => {
      return {
        height: this.getRandomInt(0,80),
        name: mockData[this.getRandomInt(2,9)].Code.substring(0, 7)
      }
    })
  }
  changeSite = (factor) => {
    this.currentSiteIndex = this.currentSiteIndex + factor;
    if (this.currentSiteIndex > this.Sites.length) {
      this.currentSiteIndex = 0;
    }
    if(this.currentSiteIndex < 0){
      this.currentSiteIndex = this.Sites.length-1;
    }
    this.currentSite = this.Sites[this.currentSiteIndex]
    this.setState({
      currentSite: this.currentSite,
      currentSiteIndex: this.currentSiteIndex
    })
  }

  setFilled = (index) =>{
    this.state.ListData.data[index].set = true;
  }

  getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  render() {
    return (
      <div className="height-100 base-layout">
        <TankScroll Site={this.state.currentSite} changeSite={this.changeSite} />
        <TankList {...this.props.data} {...this.state.ListData} setFilled = {this.setFilled}/>
      </div>
    );
  }
};

export default Dashboard;