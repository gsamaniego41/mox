import React from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";


class TeamTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
         }
    }

    
    render() { 
        const columns = [
            { Header: "Player", accessor: "displayName" },
            { Header: "Rank", accessor: "overallRank", width: "20px" },
            { Header: "Position", accessor: "position" },
            { Header: "Pos Rank", accessor: "positionRank", width: "20px" },
            { Header: "Team", accessor: "team" },
            { Header: "Bye", accessor: "byeWeek" },
          ]
        return ( 
            <div>
            {/* {this.props.teamPlayers.map(player => {return player.displayName})} */}
            <ReactTable
            data = {this.props.teamPlayers}
            columns = {columns} 
              className="-striped -highlight"
              style={{ display: "flex", justifycontent: "center", height: "400px", width: "60%" }}
              />
            </div>

         );
    }
}
 
export default TeamTable;