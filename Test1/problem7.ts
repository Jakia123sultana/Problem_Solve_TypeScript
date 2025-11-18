const getUniqueValues = (arr1:(number | string)[],arr2:(number | string)[]):(number|string)[]=>{
    const result: (number | string)[]=[];
    for(let i = 0 ; i<arr1.length;i++){
        let exists = false;
    
    for(let j = 0 ; j<result.length; j++){
        if(arr1[i] === result[j]){
            exists = true;
            break;
        }
    }

        if(!exists){
    result[result.length]=arr1[i];
        }
    }
    
      for(let i = 0 ; i<arr2.length;i++){
        let exists = false;
    
    for(let j = 0 ; j<result.length; j++){
        if(arr2[i] === result[j]){
            exists = true;
            break;
        }
    }

        if(!exists){
    result[result.length]=arr2[i];
        }
    }
    
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
console.log(getUniqueValues(array1, array2));