import axios from 'axios'

export const GetTasks = () =>{
    return axios.get('http://localhost:8000/api/v1/tasks')
}