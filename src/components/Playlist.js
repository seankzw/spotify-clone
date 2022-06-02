import React from 'react';

export default function Playlist(props) {
    return (
            <a href="#" >
              <li className="my-3 text-base whitespace-nowrap text-slate-300 w-full ">{props.title}</li>
            </a>
    );
}
