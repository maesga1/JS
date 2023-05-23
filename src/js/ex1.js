const title = 'Hello Javascript'


function getElement(){
let sectionex1 = document.getElementById ('ex1')
console.log (sectionex1);
sectionex1.innerHTML = `<h1>${title}</h1>`

}
getElement();