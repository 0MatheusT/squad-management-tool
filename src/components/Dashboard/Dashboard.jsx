import React from 'react';

import './Dashboard.css'
import MyTeams from './MyTeams/MyTeams';
import TopFive from './TopFive/TopFive';
import PickedPlayer from './PickedPlayer/PickedPlayer';



const Dashboard = () => (
  <main className="dashboard">
   
    <div className="myTeams">
      <MyTeams/>
    </div>

    <div className="statistics">
      <TopFive/>
      <PickedPlayer />
    </div>
  
  </main>
);

export default Dashboard;