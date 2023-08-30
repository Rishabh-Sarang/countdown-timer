const arr = [1,2,3,4,5];
arr.unshift(0);
arr.shift();
arr.includes(4,2);
 
const array = [{name: 'asdf',id: 1,name: 'qwer', id: 2}]
console.log(array.find(function(element){return element.id==2}))
console.log(array.find(element => {return element.id==1}))

console.log(arr.concat(array));

console.log(arr.join(' -6.9- '))

console.log(array.filter(element=>{return element.id>1}))