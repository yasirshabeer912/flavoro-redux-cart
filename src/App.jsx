import React from 'react'
import './App.css'
import Header from './components/Header'
import FoodMenu from './components/FoodMenu'
import FoodItem from './components/Foods'
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  return (
    <div className='container-fluid px-4'>
      <Header/>
      <FoodMenu/>
      {/* <FoodItem/> */}
    </div>
  )
}

export default App