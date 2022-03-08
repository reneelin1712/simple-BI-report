import React from "react";
import App from "./App";
import dummyData from './dummyData';
import historyPrice from "./history";

export const DataContext = React.createContext(dummyData);
export const SelectedContext = React.createContext('');
export const HistoryContext = React.createContext([])


export default function Contxt() {
 const[data,setData] = React.useState(dummyData)
 const[selectedCust,setSelectedCust] = React.useState('Alisaie')
 const[history,setHistory] = React.useState([])
 
 React.useEffect(()=>{
  const his = historyPrice.filter((d,key)=>d.customer == selectedCust)
  setHistory(his)
 },[selectedCust])
 
  return (
    <DataContext.Provider value={{data,setData}}> 
    <SelectedContext.Provider value={{selectedCust,setSelectedCust}}>
      <HistoryContext.Provider value={{history}}>
      <App></App>
      </HistoryContext.Provider>
      </SelectedContext.Provider>
    </DataContext.Provider>

  );
}
