import React from 'react';
import Events from '../Events/Events';

const Home = () => {
    return (
        <div className='grid grid-cols-12'>

            <div className='col-span-1'>
                <div className="dropdown">
                    <label htmlFor="my-drawer" className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                </div>
            </div>


            <div className='col-span-7'>

            </div>


            <div className='col-span-4'>

            <Events></Events>
            
            </div>

        </div>
    );
};

export default Home;