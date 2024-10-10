import React, { useEffect } from 'react';
import './App.css';
import NavigationBar from './components/TopNav/TopNav'; // Changed TopNav to NavigationBar
import DashboardView from './components/DashBoard/DashView'; // Changed DashView to DashboardView
import { useDispatch, useSelector } from 'react-redux';
import { loadAllData } from './Actions/DataAction'; // Changed fetchAllData to loadAllData
import Spinner from './components/Loading/Loading'; // Changed Loading to Spinner

const App = () => {
 const performAction = useDispatch();
const { allTickets } = useSelector(state => state.dataReducer); // Changed DataReducer to dataReducer

useEffect(() => {
  performAction(loadAllData());
}, [performAction]);


  return allTickets ? ( // Ensure allTickets is an array and has items
    <div style={{ paddingTop: "10px" }}>
      <NavigationBar />
      <hr style={{ marginTop: "10px" }} />
      <DashboardView />
    </div>
  ) : <Spinner />;
}

export default App;
