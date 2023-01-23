import React, { useState } from 'react';
import useDataList from '../../Hooks/useDataList';


const Navbar = () => {
    const { loading, error, data } = useDataList();
    

    let countFemale = 0;
    let countMale = 0;
    data.forEach(person => {
        if(person.Gender === "Male") countMale++;
        else countFemale++;
    });
    
    console.log(countFemale);
    console.log(countMale);
    
    return (
        <div className="navbar bg-blue-900 lg:sticky lg:top-0">
            <div className="flex-1">
                <a className=""><span className='text-lime-600 font-semibold text-3xl'><span className='text-4xl'>S</span>ECQUR</span><span className='font-bold text-red-500 text-4xl'>AI</span><span className='text-lime-600 font-semibold text-3xl'>SE</span></a>
            </div>
            <div className="flex-none gap-2">
               
                <div className="dropdown dropdown-end flex">
                <p className='text-xl bg-green-500 mr-3 p-2 rounded-md'>{countFemale}</p>
                <p className='text-xl bg-orange-500 p-2  rounded-md'>{countMale}</p>
                </div>
                
            </div>
        </div>
    );
};



export default Navbar;