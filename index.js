const receivesAFunction = namas => console.log(namas())
receivesAFunction(function(){"I'm really excited about today"})
const returnsANamedFunction =() =>{
    let naming = function(){} 
    return naming
}
const returnsAnAnonymousFunction = () =>{
    return function(){}
}