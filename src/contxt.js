import React from "react";
import Home from "./Home";
import dummyData from './dummyData';
import historyPrice from "./history";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import SignIn from "./signIn";

export const DataContext = React.createContext(dummyData);
export const SelectedContext = React.createContext('');
export const HistoryContext = React.createContext([])
export const LoginContext = React.createContext('false');


export default function Contxt() {
 const[data,setData] = React.useState(dummyData)
 const[selectedCust,setSelectedCust] = React.useState('Alisaie')
 const[history,setHistory] = React.useState([])
 const[isLogin,setIsLogin] = React.useState(false)
 
 
 React.useEffect(()=>{
  const his = historyPrice.filter((d,key)=>d.customer == selectedCust)
  setHistory(his)
 },[selectedCust])
 
  return (
    <DataContext.Provider value={{data,setData}}> 
    <SelectedContext.Provider value={{selectedCust,setSelectedCust}}>
      <HistoryContext.Provider value={{history}}>
      <Router>
      <div>
        <Routes>
          <Route path="/home" element={<Home/>}> </Route>
          <Route path="/" element={isLogin ? <Navigate to="/home" /> : <SignIn />}> </Route>
        </Routes>
      </div>
    </Router>
      </HistoryContext.Provider>
      </SelectedContext.Provider>
    </DataContext.Provider>

  );
}
