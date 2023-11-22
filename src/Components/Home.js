import { useContext } from "react"; //ce folosim ca sa intram in curte
import { AppContext } from "../App"; //curtea noastra

export function Home() {
     const {userName: contextName} = useContext(AppContext);
     return <h2>{contextName}</h2>;
     //{userName: name} = obiect - folosim aceasta formula ca sa schimbam numele in acest caz. "name" sau orice valoare
}