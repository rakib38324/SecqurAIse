import React from 'react';
import { Link } from 'react-router-dom';
import useDataList from '../../Hooks/useDataList';

const Events = () => {
    const { loading, error, data } = useDataList();


    return (
        <div>
            <div className='flex justify-between'>
                <p className='text-2xl'>Event</p>
                <p className='text-xl'>filter</p>
            </div>
            {
                data.map((info) => (
                    <div key={info._id} className='p-3 border-4 m-2 '>
                        <Link to={`/${info.ID}`}>
                            <div className='flex justify-between cursor-pointer'>
                                <p>{info.ID}: {info.Location}</p>
                                <p> {info.Date} {info.Time}</p>
                            </div>
                        </Link>
                        <p>Person detected</p>
                    </div>

                ))

            }
        </div>
    );
};

export default Events;