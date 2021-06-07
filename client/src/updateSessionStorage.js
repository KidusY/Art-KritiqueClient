import api from './axios/axios';
export default function updateSession(updateState) {
     api.get(`/users/${JSON.parse(sessionStorage.getItem('userInfo')).userId}`)
        .then(res => {
            const {bio,profileImage,displayName} =  res.data[0];
         
            const userInfo = { ...JSON.parse(sessionStorage.getItem('userInfo')),bio,profileImage,displayName }
           
            sessionStorage.setItem('userInfo', JSON.stringify(userInfo));
            console.log(userInfo);
        })
        .catch(err => console.log(err))

  

}