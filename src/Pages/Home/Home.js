import { child, get, getDatabase, ref } from 'firebase/database';
import React, { useState } from 'react';
import useDataList from '../../Hooks/useDataList';


const Home = () => {
  const { data } = useDataList();

  const [info, setInfo] = useState({})

  console.log(info)
  const handlePersonalInfo = (id) => {

    const dbRef = ref(getDatabase());
    get(child(dbRef, `data/${id}`)).then((snapshot) => {
      if (snapshot.exists()) {
        setInfo(snapshot.val());
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });

  }

  return (
    <div className='grid grid-cols-12'>

      <div className='col-span-1 sticky top-0 h-[500px]'>
        <div className="dropdown">
          <label htmlFor="my-drawer" className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
          </label>
        </div>
      </div>


      <div className='col-span-7 sticky top-0 h-[500px]'>

        <p className='text-center text-2xl mb-5'> {info.Gender}</p>
        <div className='grid grid-cols-2'>

          <div>
            <p className='text-2xl font-bold '>{info.ID}</p>
            <p className='text-2xl font-bold mb-3'>Person detected</p>
            
            <div className="overflow-x-auto">
              <table className="table border-none ">
                
                
                <tbody>
                 
                  <tr>
                    <td className='border-0 p-0 pr-3 text-2xl'>Name</td>
                    <td className='border-0 p-0 text-2xl'>: {info.Name}</td>
                  </tr>
                 
                  <tr>
                    <td className='border-0 p-0 pr-3 text-2xl'>Location</td>
                    <td className='border-0 p-0 text-2xl'>: {info.Location}</td>
                  </tr>
                
                  <tr>
                    <td className='border-0 p-0 pr-3 text-2xl'>Date</td>
                    <td className='border-0 p-0 text-2xl'>: {info.Date}</td>
                  </tr>
                  <tr>
                    <td className='border-0 p-0 pr-3 text-2xl'>Time</td>
                    <td className='border-0 p-0 text-2xl'>: {info.Time}</td>
                  </tr>
                
                </tbody>
              </table>
            </div>

            <p className='text-xl w-1/2 mt-5 font-semibold'>Description: {info.Details}</p>
          </div>
          <div>
            <img className='w-3/4 h-96' src={info.Image} alt='profile'></img>
          </div>
        </div>



      </div>


      <div className='col-span-4 '>

        <div>
          <div className='flex justify-between'>
            <p className='text-2xl'>Event</p>
            <p className='text-xl'>filter</p>
          </div>
          {
            data.map((info) => (
              <div key={info._id} className='p-3 border-4 m-2 cursor-pointer' onClick={() => handlePersonalInfo(info.ID)}>

                <div className='flex justify-between '>
                  <p>{info.ID}: {info.Location}</p>
                  <p> {info.Date} {info.Time}</p>
                </div>

                <p>Person detected</p>
              </div>

            ))

          }
        </div>

      </div>

    </div>
  );
};

export default Home;