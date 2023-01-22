import React from 'react';
import useDataList from '../../Hooks/useDataList';

const Events = () => {
    const { loading, error, data } = useDataList();


    return (
        <div>
            <div>
                
            </div>
            {
                data.map((info) => (
                    <div key={info._id} className='p-3 border-4 m-2'>
                        <div className='flex justify-between'>
                            <p>{info.ID}: {info.Location}</p>
                            <p> {info.Date} {info.Time}</p>
                        </div>
                        <p>Person detected</p>
                    </div>

                ))
            }
        </div>
    );
};

export default Events;