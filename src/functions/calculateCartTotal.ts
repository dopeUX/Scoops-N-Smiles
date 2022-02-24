
export default async function calculateCartTotal(res:[]){
    let sum: number = 0;
    let promise = await res.map((item: any) => {
        sum += item.price * item.quantity;
        return sum;
      });
     return Promise.all(promise).then((res) => {
        return sum; 
      });
    
}