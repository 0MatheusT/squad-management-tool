import React from 'react';

import './CreateTeam.css'


const playerInformations = [
  {id: 1, name: "Paulinho Gogó", age: 55, "nacionality":"Brazil"},
  {id: 2, name: "Cristiano Reinaldo", age: 38, "nacionality":"Brazil"},
  {id: 3, name: "Fabiano Sales", age: 24, "nacionality":"Brazil"},

];

const CreateTeam = () => (

  

  <main className="createTeam">
    <div className="createTeamComponent">
      <div className="titleCreateTeamComponent">
        <p> Create your team</p>
      </div>
      <hr></hr>
      <form>

        <div className="teamInformation">
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

        <div className="configureSquad">
          <p>Configure Squad</p>
          <div className="squadInformations">
            <div className="formationAndFieldSquad">
              <div className="formationSquad">
                <span>
                  Formation:  
                </span> 
                <select value=''>
                  <option value="3-2-2-3">3 - 2 - 2 - 3</option>
                  <option value="3-2-3-1">3 - 2 - 3 - 1</option>
                  <option value="3-4-3">3 - 4 - 3</option>
                  <option value="3-5-2">3 - 5 - 2</option>
                  <option value="4-2-3-1">4 - 2 - 3 - 1</option>
                  <option value="4-3-1-1">4 - 3 - 1 - 1</option>
                  <option value="4-3-2">4 - 3 - 2</option>
                  <option value="4-4-2">4 - 4 - 2</option>                    <option value="4-5-1">4 - 5 - 1</option>
                  <option value="5-4-1">5 - 4 - 1</option>
                </select>
              </div>
              <div className="fieldSquad">
                <div className="vlSquadField">
                  <div className="circleSquadField"></div>
                </div>
              </div>
              <button className="submitSquad" type='submit' value="Save"> Save </button> 
            </div>
            <div className="searchPlayerAndFilter">
              <div className="searchPlayer">
                    <p>
                      Search a player
                    </p>
                    <input 
                      className="searchPlayerInput"
                      type="text" 
                      name="PlayerName"
                      placeholder="Put the name's player here"
                      required="true" 
                    />
              </div>
              <div className="listOfPlayers">
                  {playerInformations.map(player => (
                    <div className="informationPlayer">
                      <div className="playersInformationData"> 
                      <div>
                          Name: <span className="colorInfoPlayer">{player.name}</span>
                        </div>
                        <div>
                          Age: <span className="colorInfoPlayer">{player.age}</span>
                        </div>
                      </div>
                      <div> 
                      <br></br>
                      <div>
                          Nacionality: <span className="colorInfoPlayer">{player.nacionality}</span>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
           
          </div>
        </div>

      </form>
    </div>
  </main>
);

export default CreateTeam;