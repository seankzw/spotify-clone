import React from 'react';
import BottomBar from './components/BottomBar';
import SideBar from "./components/SideBar"

function App() {
  return (
    <div className="relative ">
      <div className="flex">
        <SideBar/>
        {/* The main content area */}
        <div className='bg-gradient-to-b from-blue-600 via-blue-900 to-black w-screen h-screen'>
              <i className="fas fa-angle-left text-white mx-4 my-3 text-xl bg-black px-3 py-1 rounded-full text-center "></i>
        </div>
      </div>
      <BottomBar/>
    </div>
  );
}
export default App;

