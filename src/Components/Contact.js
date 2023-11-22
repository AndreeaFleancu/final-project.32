import { useContext, useState} from "react"; 
import { AppContext } from "../App";

export function Contact() {
    const {userName: contextName} = useContext(AppContext);
    return <h2>{contextName}</h2>;
    
}