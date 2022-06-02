import  React  from 'react';
import { playlist } from '../data/SamplePlaylist';
import Playlist from "./Playlist";

export default function SideBar(){
    return (
      <div className='bg-black text-slate-100 w-400 h-screen'>
        <div className='p-4 mx-auto mb-5 flex align-center'>
          <i className="fab fa-spotify text-slate-100 text-6xl"/>
          <span className="text-3xl text-slate-100 mx-3 font-bold my-auto">Spotify</span>
        </div>
        <div>
        <ul className="list-none">
          <a href="" >
          <li className="text-slate-100 text-2xl align-center flex align-center mb-5">
            <i className="fas fa-home text-slate-200 mx-5 my-auto"></i>
            <p className="text-slate-300 transition ease-in-out duration-300 hover:text-white  my-auto text-base font-bold">Home</p>
          </li>
          </a>
          <a href="">
          <li className="text-slate-100 text-2xl align-center flex mb-5">
            <i className="fas fa-search  text-slate-300 white mx-5"></i>
            <p className="text-slate-300 transition ease-in-out duration-300 hover:text-white my-auto text-base font-bold">Search</p>
          </li>
          </a>
          <a href="">
          <li className="text-slate-100 text-2xl align-center flex mb-5">
            <i className="fas fa-book text-slate-300 mx-5"></i>
            <p className="text-slate-300 my-auto  transition ease-in-out duration-300 hover:text-white text-base font-bold">Library</p>
          </li>
          </a>
        </ul>
        {/* Play list */}
        <ul className='mt-10'>
          <a href="">
          <li className="align-center flex mb-5">
            <i className="fas fa-plus mx-5 bg-slate-300 leading-3 p-2 fill-current text-gray-900 text-sm rounded-sm"></i>
            <p className="text-slate-300 my-auto text-base font-bold">Create Playlist</p>
          </li>
          </a>
          <a href="">
          <li className=" align-center flex mb-5 ">
            <i className="fas fa-heart mx-5 bg-gradient-to-br from-indigo-900 via-violet-500 to-slate-300 leading-3 p-2 fill-current text-slate-300 text-sm rounded-sm"></i>
            <p className="text-slate-300 my-auto text-base font-bold">Liked Songs</p>
          </li>
          </a>
          <a href="">
          <li className=" text-2xl align-center flex mb-5">
            <i className="fas fa-bookmark mx-5 bg-green-800 leading-3 p-2 fill-current text-green-400 text-sm rounded-sm"></i>
            <p className="text-slate-300 my-auto text-base font-bold">Your Episodes</p>
          </li>
          </a>
        </ul>
        <div className="w-60 h-0.5 ml-4 my-8 bg-slate-100 opacity-20"></div>
        <div >
          <ul className='mx-6 my-4'>
            { playlist.map((item,index)=>{
              console.log(item)
                return <Playlist title={item}/>
            })}
          </ul>
        </div>
        </div>
      </div>
    )
}