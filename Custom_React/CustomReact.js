function createElemant(element , root) {
   let newElement = document.createElement(element.type)
//    newElement.setAttribute('href' , element.props.href)
//    newElement.setAttribute('target' , element.props.target)
//    newElement.innerHTML = element.children
//    root.appendChild(newElement)


newElement.innerHTML = element.children
for (const prop in element.props) {
    if (prop == 'children') continue;
    
    newElement.setAttribute(prop , element.props[prop])  
}

root.appendChild(newElement)

}

const element = {
    type : 'a',
    props : {
        href : "https://google.com",
        target : '_blank'
    },
    children : "Click Here"
}

const root = document.getElementById('root')

createElemant(element , root)