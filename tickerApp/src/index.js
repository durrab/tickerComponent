import React from 'react';
import ReactDOM from 'react-dom';
import ClickTickerDataTableComponent from '../../src/ClickTickerDataTableComponent';

export default class MainApp extends React.Component{

  constructor( props ) {
    super(props);

  }

  componentDidMount(){
  }

 render(){

   return (
         <ClickTickerDataTableComponent />
   )
}

}

var job = window.signalR.trickerHub;
job.client.displayhourlyreport = function () {  // Lets move it to the JS file
  console.log("display hourly report in react main application");
};

//import MainComponent from '../../src/demo/MainComponent.jsx';

//render(  <MainComponent />, document.getElementById("root"));
var container = document.getElementById('root');
ReactDOM.render(
  <MainApp />,
  container
);
