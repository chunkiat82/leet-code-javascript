/**
 * @param {number} num
 * @return {number}
 */
const addDigits = function(num) {
    const numString = String(num);
    
    let total = 0;
    numString.split('').forEach((i)=>{
         total+=parseInt(i);
    });
    
    if (total < 10){
        return total;  
    } 
    else{
        return addDigits(total);
    }
};

console.log(addDigits('11031982'));