import {useForm} from "react-hook-form"
import {useEffect} from 'react';

import { useNavigate,useParams} from "react-router-dom"
import {toast} from "react-hot-toast"
export function Filterclient(){
   
    const {register,handleSubmit,setValue} = useForm()
   
    const navigate= useNavigate()
    
    
    const onSubmit = handleSubmit(async (data) => {
        
           console.log(data)
           toast.success("Datos actualizados")
           navigate("/client/list")
        

        
    })
    const onSubmit2=handleSubmit(async (data) => {
       
           console.log(data)
           toast.success("Datos actualizados")
           navigate("/client/list")
    })
    
        
    
   
    return(
            <div className="grid  justify-center mb-3">
            <div className="flex mr-3 mb-3" >
                <div className="flex mr-3 mb-3">
                <form onSubmit={onSubmit}>
            <input className="rounded-lg block w-full mb-3" type="text" placeholder="Nombre completo"
            {...register("name",{required:true})}
            />
           
            
            <button className="bg-green-400 p-3 hover:bg-green-200 hover:cursor-pointer rounded-lg w-48 ">Por Nombre</button>
            </form>
                </div>
                <div className="flex mr-3 mb-3">
                <form onSubmit={onSubmit2}>
            <input className="rounded-lg block w-full mb-3" type="date" placeholder="Fecha de creación"
            {...register("create_date",{required:true})}/>
            <button className="bg-green-400 p-3 hover:bg-green-200 hover:cursor-pointer rounded-lg w-48 ">Por fecha de creación</button>
            </form>
                </div>
                
            </div>
            <div className="flex justify-center ">
                <button   button className="bg-red-400 p-3 hover:bg-red-200 hover:cursor-pointer rounded-lg w-28" onClick={()=>navigate("/client/list")}>Cancelar</button>
            </div>
            </div> 
            
        
    )
    }
