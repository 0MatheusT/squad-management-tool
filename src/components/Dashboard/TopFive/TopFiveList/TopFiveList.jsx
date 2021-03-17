import * as React from 'react';

import './TopFiveList.css';


const ageAverageTeam = [
    {id: 1, name: "Barcelona", ageAverage: 30.22},
    {id: 2, name: "Real Madri", ageAverage: 31.15},
    {id: 3, name: "Milan", ageAverage: 28.01},
    {id: 4, name: "Liverpool", ageAverage: 34.10},
    {id: 5, name: "Bayern Munich", ageAverage: 26.22},
  ];



const TopFiveList = () => (
  <div className="topFiveList">

    <div className="listTeamAvg">
      <p>Highest Team Average</p>
      {ageAverageTeam.map(team => (
        <div className="highestTeamAge">
          <div> {team.name} </div>
          <div> {team.ageAverage} </div>
        </div>
      ))}
    </div>

    <div className="listTeamAvg">
      <p>Lowest Team Average</p>

      {ageAverageTeam.map(team => (
        <div className="lowestTeamAge">
          <div> {team.name} </div>
          <div> {team.ageAverage} </div>
        </div>
      ))}
    </div>
    

  </div>
);

export default TopFiveList;