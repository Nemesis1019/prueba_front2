import { Link  } from "react-router-dom";

export function Nav(){
    return(
        <div className="flex justify-between py-3 w-500">
            
            
            
                <Link to='client/list/'>
                <h1 className="font-bold text-8x1 mb-4">Softseguros</h1>
                </Link>
            
            
                <button className="bg-sky-400 p-3 rounded-lg">
                <Link to='client/list/filter'>Filter</Link>
                </button>
                <button className="bg-sky-400 p-3 rounded-lg">
                <Link to='client/create'>Create</Link>
                </button>
                
            
           
            
        </div>
        

    )
}