import {useForm} from "react-hook-form"
import {useEffect} from 'react';
import { updateclient,getClient } from '../api/list_api';
import { useNavigate,useParams} from "react-router-dom"
import {toast} from "react-hot-toast"

export function Updateclient(){
    const {register,handleSubmit,setValue} = useForm()
   
    const navigate= useNavigate()
    const params= useParams()
    
    const onSubmit = handleSubmit(async (data) => {
        if(params.id){
           await updateclient(params.id,data)
           toast.success("Datos actualizados")
           navigate("/client/list")
        }
        
    })
    
        
    
    useEffect(()=>{
        async function loadClient(){
        if(params.id){
            const rest=await getClient(params.id)
            setValue("name",rest.data.name)
            setValue("number_id",rest.data.number_id)
            setValue("email",rest.data.email)
            setValue("born_date",rest.data.born_date)

        }
        
    }
    loadClient()
    }, [])
    return(
            <div className="grid  justify-center items-center mb-3">
            <div className="mb-3">
           <form onSubmit={onSubmit}>
            <input className="rounded-lg block w-full mb-3" type="text" placeholder="Nombre completo"
            {...register("name",{required:true})}
            />
            <input className="rounded-lg block w-full mb-3" type="number" placeholder="Numero de documento"
            {...register("number_id",{required:true})}/>
            <input className="rounded-lg block w-full mb-3" type="email" placeholder="Email"
            {...register("email", {required:true})}/>
            <input className="rounded-lg block w-full mb-3" type="date" placeholder="Fecha de nacimiento"
            {...register("born_date",{required:true})}/>
            <button className="bg-green-400 p-3 hover:bg-green-200 hover:cursor-pointer rounded-lg w-48 ">Actualizar</button>
            </form> 
            </div> 
            <div className="mb-3">
            <button className="bg-red-400 p-3 hover:bg-red-200 hover:cursor-pointer rounded-lg w-48" onClick={()=>navigate("/client/list")}>Cancelar</button>
            </div>
            </div>
        
    )
    }
