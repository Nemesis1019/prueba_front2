import {useForm} from "react-hook-form"
import { postClients } from '../api/list_api';
import { useNavigate} from "react-router-dom"
import {toast} from 'react-hot-toast';



export function Createclient(){
    const {register,handleSubmit} = useForm()
   
    const navigate= useNavigate()
    const onSubmit = handleSubmit(async data => {
        await postClients(data)
        toast.success("Cliente creado")
        navigate("/client/list")
    })
    return(
            <div className="grid  justify-center mb-3">
            <div className="mb-3" >
           <form onSubmit={onSubmit}>
            <input className="rounded-lg block w-full mb-3" type="text" placeholder="Nombre completo"
            {...register("name",{required:true})}
            />
            <input className="rounded-lg block w-full mb-3" type="number" placeholder="Numero de documento"
            {...register("number_id",{required:true})}/>
            <input className="rounded-lg block w-full mb-3" type="email" placeholder="Email"
            {...register("email", {required:true})}/>
            <input className="rounded-lg block w-full mb-3"type="date" placeholder="Fecha de nacimiento"
            {...register("born_date",{required:true})}/>
            
            <button className="bg-sky-400 p-3 hover:bg-sky-200 hover:cursor-pointer rounded-lg mb-15 w-48">Guardar</button> 
            
            
            </form> 
            </div>
            <div className="mb-3"> 
            <button className="bg-red-400 p-3 hover:bg-red-200 hover:cursor-pointer rounded-lg mb-15 w-48" onClick={()=>navigate("/client/list")}>Cancelar</button>
            </div>
            </div>
        
        
        
        
        
    )
}