import React from 'react';

import './TeamInformation.css'




const TeamInformation = () => (
  <div className="teamInformationComponent">
    <p>Team Information</p>
    <form className="teamInformations">
        <div className="teamNameAndWebsite">
          <div className="teamName">
            
              <label>
                Team Name
                <input type="text" name="teamName" />
              </label>
          </div>
          <div className="teamWebsite">
          <p>Team Website</p>

          </div>
        </div>
        <div className="teamDescriptionAndType">
          <div className="teamDescription">
            <p>Team Description</p>

          </div>
          <div className="teamType">
            <p>Team Type</p>

          </div>
        </div>
    </form>
  </div>
);

export default TeamInformation;