var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray (array, element) {
  return [element, ...array]
}


function destructivelyAddElementToBeginningOfArray (array, element) {
array.unshift(element)
return array
}

function addElementToEndOfArray (array, element) {
  return [...array, element]
}
function destructivelyAddElementToEndOfArray (array, element) {
  return array.push(element)
}

function accessElementInArray (array, index) {
   array[index]
   return array
}

function destructivelyRemoveElementFromBeginningOfArray (array, element)
{
  return array.shift(element)
}

function removeElementFromBeginningOfArray (array, element) {
  return array.slice(element)
}

function destructivelyRemoveElementFromEndOfArray (array, element) {
  return array.pop(element)
}

function removeElementFromEndOfArray (array, element) {
  return array.slice(0, array.length-1)
}