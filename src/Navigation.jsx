import {NavLink} from "react-router-dom";
import './pages/AWMInfo.jsx';
import"./pages/EBoard.jsx";
import "./Navigation.css"
import logo from './pages/photo/awmlogo3b.png';
export default function Navigation(){
    return(
        <>
            <div>
                <div id="intro">
                    <h1><strong>Association for Women in Mathematics, Boston University Chapter</strong></h1>
                    <img id="logo" src= {logo} style={{width: '20%'}}/>
                </div>
                <nav>
                    <ul>
                        <li>
                            <NavLink to={`/`}>
                                About AWM
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={`/EBoard`}>Meet the EBoard!</NavLink>
                        </li>
                        <li>
                            <NavLink to={`/Contact`}>Contact us</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
}