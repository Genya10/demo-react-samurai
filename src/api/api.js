import axios from "axios";

const instance= axios.create({
    withCredentials:true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',

})

export const usersAPI= {
getUsers(currentPage=1,pageSize=5){   
   return  instance.get(`users?page=${currentPage}&count=${pageSize}`)
    .then(response=>{
        return response.data;
    });
}
}
/*
export const getUsers=(currentPage=1,pageSize=5)=>{   
    return  axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`,
     {withCredentials:true})
     .then(response=>{
         return response.data;
     });
 }*/