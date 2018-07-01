var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element){
  newArray = [element, ...array]
  return newArray
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array
}

<<<<<<< HEAD
function addElementToEndOfArray(array, element){
  newArray = [...array, element]
  return newArray
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  return array
}

=======
>>>>>>> 0165f54095cb7fa23445616df2dee9cbb2d31933
function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift(1)
  return array
}

function removeElementFromBeginningOfArray(array){
  temp = array.slice(1)
<<<<<<< HEAD
  return temp
}

function  destructivelyRemoveElementFromEndOfArray(array){
  array.pop(array.length)
  return array
}

function removeElementFromEndOfArray(array){
  newArray = array.slice(0, array.length - 1)
  return newArray
}

function accessElementInArray(array, index){
  accessEle = array[index]
  return accessEle
}
=======
  return array
}

>>>>>>> 0165f54095cb7fa23445616df2dee9cbb2d31933
