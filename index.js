function receivesAFunction(fn){
    return fn()
}
function aNamedFunction(){
    return 'hello'
}
function returnsANamedFunction(){
    return function aNamedFunction(){
    }
}
function returnsAnAnonymousFunction(){
    return function(){
    }
}