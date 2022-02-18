export default function getUserAuth():string{
        const token = localStorage.getItem('userToken');
        if(token===null){
          return 'not logged in';
        }
        else{
          return token;
        }

}