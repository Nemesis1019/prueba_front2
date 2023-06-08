import { deleteClient } from "../api/list_api"
import { useNavigate} from "react-router-dom"
import { toast } from "react-hot-toast"
import imagen from "../assets/20116.png"



export function Clientcard({client}){
    const navigate= useNavigate()
    const eliminar_id = async (id)=>{
        const rest = window.confirm("¿Desesas eliminar este registro?")
        if(rest){
            deleteClient(id)
            deleteClient(id)
            window.location.reload();
            toast.success("Cliente eliminado")
        }
        
    }
    const actualizar_id = (id)=>{
        navigate(`/client/list/${client.id}`)
    }
    
    return(
            
                <div  > 
                    
                    <div className="grid grid-cols-2 gap-2">
                    
                   <div className="flex gap-2">
                    <div>
                    <img src={imagen} className="w-10 h-10 object-cover" alt="persona.jpg" />
                    </div>
                   <div className="grid gap-2"> 
                   <p className="font-bold uppercase">{client.name}</p>
                    <p className="font-bold uppercase">{client.email}</p>
                   </div>
                    
                    
                   </div>
                    
                    <div className="grid justify-end">
                    
                    
                    <p className="font-bold uppercase">{client.born_date}</p>
                    <p className="font-bold uppercase">{client.create_date}</p>
                    </div>
                    
                    
                    </div>
                    <div className="flex justify-end">
                    <button className="bg-red-400 p-3 hover:bg-red-200 hover:cursor-pointer rounded-lg py-3 px-2" key={client.id} onClick={() => eliminar_id(client.id)}>Eliminar</button>
                    <button className="bg-green-400 p-3 hover:bg-green-200 hover:cursor-pointer rounded-lg" key={client.id} onClick={() => actualizar_id(client.id)}>Actualizar</button>
                   
                    
                    </div>
                    <hr />
                </div>
                
    )
}