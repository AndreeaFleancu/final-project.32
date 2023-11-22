import React, { useContext } from "react";
import { AppContext } from "../App";

export function About() {
    const { userName, setUserName } = useContext(AppContext);

    // Function to handle input change and set the username
    const changeName = (event) => {
        setUserName(event.target.value);
    };

    return (
        <div>
            {/* Input field to change the username */}
            <input type="text" onChange={changeName} />
        </div>
    );
}


//transferam informatii dintr-o parte in alta, care usnt accesibile din alte locuri putem folosi acest tip de cod