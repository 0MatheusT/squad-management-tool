import React from 'react';

import './CreateTeam.css'


const CreateTeam = () => (

  

  <main className="createTeam">
    <div className="createTeamComponent">
      <div className="titleCreateTeamComponent">
        <p> Create your team</p>
      </div>
      <hr></hr>
      <form>
        <div className="teamInformationComponent">
          <p>Team Information</p>
          <div className="teamInformations">

              <div className="teamNameAndWebsite">
                <div className="teamName">
                  <p>
                    Team Name
                  </p>
                  <input 
                    className="teamNameInput"
                    type="text" 
                    name="teamName"
                    placeholder="Insert team name"
                    required="true" 
                  />
                </div>

                <div className="teamWebsite">
                  <p>
                    Team website
                  </p>
                  <input 
                      className="teamWebsiteInput"
                      type="text" 
                      name="website"
                      placeholder="http://myteam.com"
                      required="true"
                  />
                </div>
              </div>

              <div className="teamDescriptionAndTypeAndTags">
                <div className="teamDescription">
                  <p>
                    Team Description
                  </p> 
                  <textarea 
                    className="teamDescriptionInput"
                    type="textarea" 
                    style={{resize:'none'}}


                  />
                         
                </div>

                <div className="teamTypeAndTags">
                  <div className="teamType">
                    <p>
                      Team type
                    </p> 
                    <div className="buttonTeamType">
                      <input type="radio" value="Male" name="gender" /> Real
                      <input type="radio" value="Female" name="gender" /> Fantasy                  </div>
                    </div>
                  <div className="teamTags">
                    <p>
                      Team tags
                    </p> 
                    <textarea 
                      className="teamTagsInput"
                      type="textarea"
                      style={{resize:'none'}}
                      wrap="on"
                 
                    />
                  </div>
                </div>
              </div>
          </div>
        </div>

      Configure squad
      
      <input type='submit' value="Save" />
      </form>
    </div>
  </main>
);

export default CreateTeam;