import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

import './MyTeams.css'


const columns = [
  { field: 'name', headerName: 'Name', width: 200},
  { field: 'description', headerName: 'Description', width: 200},

  
];

const rows = [
  {id: 1, name: "Barcelona", description:"Barcelona Squad"},
  {id: 2, name: "Real Madri", description:"Real Madri Squad"},
  {id: 3, name: "Milan", description:"Milan Squad"},
  {id: 4, name: "Liverpool", description:"Liverpool Squad"},
  {id: 5, name: "Bayern Munich", description:"Bayern Munich Squad"},
  {id: 6, name: "Lazio", description:"Lazio Squad"},
  {id: 7, name: "Barcelona", description:"Barcelona Squad"},
  {id: 8, name: "Real Madri", description:"Real Madri Squad"},
  {id: 9, name: "Milan", description:"Milan Squad"},
  {id: 10, name: "Liverpool", description:"Liverpool Squad"},
  {id: 11, name: "Bayern Munich", description:"Bayern Munich Squad"},
  {id: 12, name: "Lazio", description:"Lazio Squad"},
  {id: 13, name: "Barcelona", description:"Barcelona Squad"},
  {id: 14, name: "Real Madri", description:"Real Madri Squad"},
  {id: 15, name: "Milan", description:"Milan Squad"},
  {id: 16, name: "Liverpool", description:"Liverpool Squad"},
  {id: 17, name: "Bayern Munich", description:"Bayern Munich Squad"},
  {id: 18, name: "Lazio", description:"Lazio Squad"},
  {id: 19, name: "Barcelona", description:"Barcelona Squad"},
  {id: 20, name: "Real Madri", description:"Real Madri Squad"},
  {id: 21, name: "Milan", description:"Milan Squad"},
  {id: 22, name: "Liverpool", description:"Liverpool Squad"},

 
];


const MyTeams = () => (
  <div className="myTeamsComponent">
    <div className="titleMyTeamsComponent">
      <p> My Teams</p>
      <button 
            onClick= "/" 
            className="button">
            +
        </button>
    </div>
    <hr></hr>
    <div style={{ height: 700, width: '100%'}}>
      <DataGrid rows={rows} columns={columns} pageSize={10} />
    </div>
  
  </div>
);

export default MyTeams;