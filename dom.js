//TRAVERSING THE DOM

//parentnode - parentElement and parentNode does the same thing//
const parent = document.querySelector('#items').parentNode
parent.style.background = '#f4f4f4'

//childNode(gives the space or break element as a text node) or children
var itemList = document.querySelector('#items')
var children = itemList.children
/* for (let i of itemList.children) {
    i.style.background = 'red'
} */

//firstChild or firstElementChild. similarly lastElementChild
var firstChild = itemList.firstElementChild

//sibling - nextElementSibling - similarly previousElementSibling
var nextSibling = firstChild.nextElementSibling

//Create element
var newDiv = document.createElement('div')

//Add Class
newDiv.className = 'class-name'

//Add id
newDiv.id = 'id-name'

//Add Attribute
newDiv.setAttribute('title', 'title-name')

//Add children - creating a text node
var newChild = document.createTextNode('Hello World')

//Append textnode to div
newDiv.appendChild(newChild)

//insert the div to DOM after the header
var header = document.querySelector('#header-title')
header.after(newDiv)

//insert the div in between container and header
var container = document.querySelector('header .container')
container.insertBefore(newDiv, header)


console.log(newDiv)