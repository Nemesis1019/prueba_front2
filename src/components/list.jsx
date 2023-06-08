import { useEffect, useState } from "react";
import {getAllClients} from "../api/list_api"
import {Clientcard}from "../components/client_card"

export function SList(){
    const [Client,setClient] = useState([]);
useEffect(()=>{
    
    async function loadClient(){
        const res= await getAllClients();
        setClient(res.data)
        
    }

    loadClient()
    
},[]);
    return(
        
        <div className="grip grip-cols-3 gap-3">
            {Client.map(client=>(
                <Clientcard key={client.id} client= {client}
                />
                
            ))}
                
        </div>
    )
}