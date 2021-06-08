import api from './axios/axios';
import { useDispatch } from 'react-redux'
export default function UpdateSession(updatedState) {
    const dispatch = useDispatch();
    //  api.get(`/users/${JSON.parse(sessionStorage.getItem('userInfo')).userId}`)
    //     .then(res => {
    //         const {bio,profileImage,displayName} =  res.data[0];


    //         console.log(userInfo);
    //     })
    //     .catch(err => console.log(err))

   

}