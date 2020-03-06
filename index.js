//Array methods
const arr=[1,'m',true,{monika:'mohan'},[2,5]]
console.log(arr)

//for Each
console.log('forEach:')
arr.forEach((item,index)=>{
  console.log(item)
})

//map
//The map() method creates a new array with the results of calling a function for every array element.
map=arr.map((item)=>{
 return item;
})
console.log(map)

//filter
const result = arr.filter(word => word.length > 0);
console.log(result)

//include(wont work for objects and functions)
console.log(arr.includes(2));

//indexOf(element,fromindex)
//(wont work for objects and functions)
console.log(arr.indexOf(1,0))

//findIndex(gives the index value)
console.log('findindex:')
const find=(item)=>item==1
console.log(arr.findIndex(find))

//find(finds the value)
console.log(arr.find(element=>element==1))

//reduce
//executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(arr.reduce(reducer));


//slice
//The slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included) where begin and end represent the index of items in that array. The original array will not be modified.
console.log(arr.slice(1,3))


//splice
//The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
console.log(arr.splice(1,0,'sanju'))

//sort
//The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.
console.log(arr.sort())


//reverse
console.log(arr.reverse())


//concat
console.log(arr.concat('mohan'))

//pop
console.log(arr.pop())


//push
//The push() method adds one or more elements to the end of an array and returns the new length of the array.
console.log(arr.push("sanju"))


//shift
//The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.
console.log(arr.shift())


//unshift
console.log(arr.unshift(2,3))