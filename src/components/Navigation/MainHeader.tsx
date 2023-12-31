import { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "../UI/Button";
import UpcomingSessions from "../Sessions/UpcomingSessions";


export default function MainHeader() {

    const [upcomingSessionsVisible, setUpcomingSessionsVisible] = useState(false);

    function showUpcomingSessions() {
        setUpcomingSessionsVisible(true);
    }

    function hideUpcomingSessions() {
        setUpcomingSessionsVisible(false);
    }
    return (
        <>
            {upcomingSessionsVisible && (
                <UpcomingSessions onClose={hideUpcomingSessions} />
            )}
            <header id="main-header">
                <h1>AllForce Development</h1>\
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/" className={({isActive}) => isActive ? 'active' : '' }>O mnie</NavLink>
                        </li>
                        <li>
                            <NavLink to="/sessions" className={({isActive}) => isActive ? 'active' : '' }>Kursy</NavLink>
                        </li>
                        <li>
                            <Button onClick={showUpcomingSessions}>Koszyk</Button>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}