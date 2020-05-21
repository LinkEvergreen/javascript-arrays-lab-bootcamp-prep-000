var kittens = ['Milo', "Otis", 'Garfield'] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name){
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name){
  kittens = [name, ...kittens]
  return kittens
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
  return kittens
}

function appendKitten(name){
  var newArray = kittens.slice();
  newArray.push(name)
  return newArray
}

function prependKitten (name){
  var newArray = kittens.slice()
  newArray.unshift(name)
  return newArray
}

function removeLastKitten(){
  var newArray = kittens.pop(1);
  return newArray
}

function removeFirstKitten(){
  var newArray = kittens.shift();
  return newArray
}
