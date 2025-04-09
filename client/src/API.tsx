import axios,{AxiosResponse} from 'axios'

const baseUrl:string ="http://localhost:5000"

export const getTodos= async ():Promise<AxiosResponse<ApiDataType>> =>{
    try{

        const todos:AxiosResponse<ApiDataType> =await axios.get(baseUrl +"/todos")

        console.log(todos)

        return todos

    }catch(error){

        throw error
    }
}

export const addTodo = async (formData:ITodo): Promise<AxiosResponse<ApiDataType>> =>{
    
    try{
        
        const todo: Omit<ITodo, "_id"> ={

            name:formData.name,
            description:formData.description,
            status:false
        }

        const saveTodo: AxiosResponse<ApiDataType> = await axios.post(baseUrl + "/add-todo", todo)
        return saveTodo

    }catch(error){

        throw error
    }
}


export const updateTodo = async (todo:ITodo): Promise<AxiosResponse<ApiDataType>> =>{

    try{

        const todoUpdate: Pick<ITodo , "status"> = {

            status:true,
        }

        const updateTodo:AxiosResponse<ApiDataType> =await axios.put(`${baseUrl}/edit-todo/${todo._id}`, todoUpdate)

        return updateTodo

    }catch(error){
        throw error
    }
}


export const deleteTodo = async (_id:string): Promise<AxiosResponse<ApiDataType>> =>{

    try{

        const deletTodo: AxiosResponse<ApiDataType> = await axios.delete(` ${baseUrl}/delete-todo/${_id}`)

        return deletTodo

    }catch(error){

        throw error
    }
}