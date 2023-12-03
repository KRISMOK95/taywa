// App.js
import React, { useRef } from 'react';
import Navbar from './components/Navbar';
import Section from './components/Section';

function App() {
  const youRef = useRef(null);
  const usRef = useRef(null);
  const weRef = useRef(null);

  const scrollToRef = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };


  return (
    <div>
      <Navbar />
      <div className='text-9xl decoration-2 decoration-black mb-10 text-left ml-10'>/</div>

      <div className="header text-3xl font-bold cursor-pointer mb-8">
        <a onClick={() => scrollToRef(youRef)} className="inline-block relative px-4 py-2">YOU</a> /
        <a onClick={() => scrollToRef(usRef)} className="inline-block relative px-4 py-2">US</a> /
        <a onClick={() => scrollToRef(weRef)} className="inline-block relative px-4 py-2">WE</a>
      </div>
      <div className="pl-9"> 
        <Section ref={youRef} id="you" title="YOU" content="Are the most important part in our projects / Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua /" />
        <Section ref={usRef} id="us" title="US" content="Our goal is to Help you / Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat /" />
        <Section ref={weRef} id="we" title="WE" content="Together we create the future / Duis aute irure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur /" />
      </div>
    </div>
  );
}

export default App;
