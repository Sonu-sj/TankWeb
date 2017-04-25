"use-strict";

import React from 'react';
import { FaAngleRight, FaAngleLeft, FaHome} from 'react-icons/lib/fa';
import {TiHome}  from 'react-icons/lib/ti';


const SiteList = props => {
    return (
      <h1 className="text-center m-0 mt-3 text-uppercase display-4"><FaAngleLeft onClick = {()=>props.changeSite(-1)} className="align-top mr-2" /> <TiHome className="align-top" />  Site-{props.name}  <FaAngleRight onClick = {()=>props.changeSite(1)} className="align-top ml-3" /></h1>
    )
}

export default SiteList;