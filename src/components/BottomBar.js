import React  from 'react';

export default function BottomBar() {
    return (
        <div className="bg-zinc-900 h-28 w-screen flex overflow-hidden bottom-0 fixed">
            <div className="flex w-2/6" >
            <section className="bg-slate-300 w-20 h-20 ml-6 my-auto border-4 align-center border-sky-500 "></section>
            <ul className='my-auto mx-6'>
                <a href="#" className='text-white text-sm leading-4'><li>In The Stars</li></a>
                <a href="#" className='text-slate-300 text-sm'><li>Benson Boone</li></a>
            </ul>
                <i className="fas fa-heart text-green-500 text-lg my-auto ml-5"/>
                <i className="fas fa-clone text-slate-400 text-lg my-auto ml-5"/>
            </div>
          <div className="my-auto w-2/6">
              <section className="flex align-middle mx-auto h-1/2 px-auto">
                  <i className="fas fa-random mx-auto my-auto text-xl text-slate-400"></i>
                  <i className="fas fa-backward mx-auto my-auto text-xl text-slate-400"></i>
                        <i className="fas fa-play text-zinc-800 mx-8 my-auto text-xl bg-slate-100 py-2 px-3 rounded-full text-center "></i>
                  <i className="fas fa-forward mx-auto my-auto text-xl text-slate-400"></i>
                  <i className="fas fa-redo mx-auto my-auto text-xl text-slate-400"></i>
              </section>
              <div className="flex my-2 w-full h-1/2">
                <p className="text-sm my-auto text-slate-300 mr-3">0.00</p>
                <section className="w-full h-1.5 my-auto  bg-slate-700 rounded-xl "/>
                <p className="text-sm my-auto text-slate-300 ml-3">3.35</p>
             </div>
          </div>
          <div className="flex w-2/6 justify-end space-x-5 pr-10">
             <i className="fas fa-microphone text-slate-400 my-auto text-lg "></i>
             <i className="fas fa-bars text-slate-400 my-auto text-lg "></i>
             <i className="fab fa-chromecast text-slate-400 my-auto text-lg"></i>
             <section className="flex space-x-5">
                <i className="fas fa-volume-down text-slate-400 my-auto text-lg"></i>
                <section className="w-20 h-1.5 my-auto  bg-slate-700 rounded-xl "/>
             </section>
             <a href="#" className='my-auto'>
                 <i className="fas fa-expand-alt text-slate-400 text-lg my-auto "></i>
            </a>
           </div>
        </div>
    );
}