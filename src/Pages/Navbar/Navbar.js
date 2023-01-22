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
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">SecqurAIse</a>
            </div>
            <div className="flex-none gap-2">
               
                <div className="dropdown dropdown-end flex">
                <p className='text-xl bg-green-500 mr-3 p-2'>{countFemale}</p>
                <p className='text-xl bg-orange-500 p-2'>{countMale}</p>
                </div>
                
            </div>
        </div>
    );
};

const countGender = () => {
    
}

export default Navbar;