
/*-----------Chunk-----------------*/

let chunk = (array:[],s:number)=> {
   let newArr = [];
   for(let  i=0;i<array.length;i+=s){
    newArr.push(array.slice(i,i+s))
}
return newArr;
}

/*-----------reduce-----------------*/
// reducer takes an array, reducer() and initialValue as argument
function reduce(arr, reducer, initialValue) 
{    
  let accumulator = initialValue === undefined ? 0 : initialValue        // loop though array    
  for(let i=0;i<arr.length;i++){      
   accumulator = reducer(accumulator, arr[i], i, arr);    
  }
  return accumulator;
}

/*-----------Filter-----------------*/
let filter = (array,condition) => {
    let a=[];
    for(let i of array.length){
        if(array[i].condition === true){
            a.push(array[i]);
        }
        
    }
    
}

/*-----------Find-----------------*/
let find = (collection,condition) => {
    for(let i of collection.length){
        if(condition(collection[i])===condition){
            return collection[i];
        }
    }
}

/*-----------Sum-----------------*/
let sum = (array) => {
    let total = 0;
    for(let i of array.length){
        total += array[i];
    }
    return total;
}