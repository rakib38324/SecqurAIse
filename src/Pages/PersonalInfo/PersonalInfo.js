import React from 'react';
import usePersonInfo from '../../Hooks/usePersonInfo';
 

const PersonalInfo = () => {
    const {data}=usePersonInfo();
    console.log(data)
    return (
        <div>
            <p>Hello{data}</p>
            
        </div>
    );
};

export default PersonalInfo;