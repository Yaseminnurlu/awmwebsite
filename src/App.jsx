import './App.css';
import AWMInfo from './pages/AWMInfo.jsx';
import MeetTheEboard from './pages/EBoard.jsx';
import Navigation from './Navigation.jsx';
import {createBrowserRouter, Route, RouterProvider, Routes} from "react-router-dom";
import Contact from "./pages/Contact.jsx";
function Root(){
    return(
        <>
            <Navigation/>
            <Routes>
                <Route path="/" element={<AWMInfo/>}/>
                <Route path="/Eboard" element={<MeetTheEboard/>}/>
                <Route path="/Contact" element={<Contact/>}/>
            </Routes>
        </>
    )
}

// Define the routes using createBrowserRouter
const router = createBrowserRouter(
    [{path:"*", Component:Root},]
);

export default function App() {
    return (
        <div>
            <RouterProvider router={router} />
        </div>

    );
}
