import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import PersonalInfo from "../Pages/PersonalInfo/PersonalInfo";

const { createBrowserRouter } = require("react-router-dom");


const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            
            {
                path: '/data',
                element: <PersonalInfo></PersonalInfo>
            },

        
        ]
    }
])

export default router;