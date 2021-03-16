import * as React from 'react';

import './TopFive.css'
import TopFiveList from './TopFiveList/TopFiveList';



const TopFive = () => (
  <div className="topFiveComponent">
    <div className="titleTopFiveComponent">
      <p> Top 5</p>
    </div>
    <hr></hr>

    <div className="topFiveComponentLists">
      <TopFiveList/>
    </div>

  </div>
);

export default TopFive;