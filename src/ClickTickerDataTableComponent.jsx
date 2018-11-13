import React from "react";
import { makeData, Logo, Tips } from "./Utils";
// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";
import DateFormat from 'dateformat';
import Odometer from 'react-odometerjs';
import 'odometer/themes/odometer-theme-default.css'
//import * as signalR from '@aspnet/signalr';
//import './loader.js'



export default class ClickTickerDataTableComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: makeData(),
      columns: [],
      tickerData: [],
      reload : false,
      intervalId: null,
    };
    window.tickerComponentReact = this;
  }


  callDisplayReport() {
    console.log("Called in React here");
    fetch(window.reportUrl)
   .then(response => response.json())
   .then(result => this.setState({ data : result }));

  }


  componentDidMount(){
      // get the columns from properties
      console.log("Columns from window obj: in react " + JSON.stringify(window.columns));
      console.log("Columns to Display " + JSON.stringify(window.columnsToDisplay));
      console.log("URL to load data from==> " + window.reportUrl);

      var generatedColumns = [];

      for(var item in window.columns){
        if(window.columnsToDisplay[item] !== undefined && window.columnsToDisplay[item] === true){
          generatedColumns.push(this.generateNormalColumn(item,item, false));
        }
      }
      this.setState({columns: generatedColumns});
      fetch(window.reportUrl)
     .then(response => response.json())
     .then(result => this.setState({ data : result }));

  }

  generateNormalColumn(columnName, data, isAnimatable){
    var column = {
      Header: columnName,
      accessor: data,
      Cell: row => {
         if(data === "Clicks" || data === "Conversions"){
           return (
             <div>
              <Odometer
                  format="d"
                  duration={ 2000 }
                  value={ row.value }
              />
          </div>
           );
         }
         else{
           if(row.original[data] === undefined){
             return '';
           }
           return row.value;
         }

      }
    };
    return column;
  }

  generateDateColumn(columnName, data, fieldName, dateExpression) {

    var column = {
      Header: columnName,
      accessor: data,
      Cell: row => {
        if(row.original[fieldName] !== undefined){
            return DateFormat(row.value, dateExpression);
        }
        return '';
      }
    };
    return column;
  }


  render() {
    console.log("Window reload indicator:===> " +  this.state.reload);
    const {columns, data } = this.state;
    return (
      <div>
        <ReactTable
          showPagination={false}
          data={data}
          columns={columns}
          defaultPageSize={10}
          className="-striped -highlight"
        />

      </div>
    );
  }
}
