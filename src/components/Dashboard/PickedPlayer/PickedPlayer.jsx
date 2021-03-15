import * as React from 'react';

import './PickedPlayer.css'
import winner from '../../../assets/winner.png'
import loser from '../../../assets/loser.png'




const PickedPlayer = () => (
  
  <div className="pickedPlayerComponent">
    <div className="vl">
      <div className="circle"></div>
    </div>

    <div className="info">

      <div className="mostPickedPlayer">
        <p className="playerName"> Most Picked Player</p>
        <div className="playerImgAndPercent">
          <img className="imgPlayerMostPicked" src={winner} alt="logo Venturus"></img>
          <p className="percentPlayer">
            75%
            <hr></hr>
          </p>
        </div>
      </div>

      <div className="lessPickedPlayer"> 
        <p className="playerName"> Less Picked Player</p>
        <div className="playerImgAndPercent">
          <img className="imgPlayerLessPicked" src={loser} alt="logo Venturus"></img>
          <p className="percentPlayer">
            25%
            <hr></hr>
          </p>
        </div>
      </div>

    </div>
    
    
  </div>
);

export default PickedPlayer;