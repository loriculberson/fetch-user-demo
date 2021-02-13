import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import BasicTable from './BasicTable'


function App() {
  const [data, setData] = useState([])
 
  useEffect(()=> {
    console.log('useEffect data')
    const fetchData= async () => {
      try {
        const response = await fetch(
          'https://randomuser.me/api/?results=10',
        );
        const data = await response.json();
        setData(data.results)
      } catch (e) {
        console.log(e);
      }
    }
    fetchData()
  }, [])
  useEffect(() => console.log('where data', data))

  return (
    <div className="container">
      <h2>User Data Table</h2>
      <BasicTable
        users={data}
      />
    </div>
  );
}

export default App;
