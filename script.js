const parrafos = document.querySelectorAll(".parrafo")
const seccion = document.querySelectorAll(".seccion")
const basura = document.querySelectorAll(".basuracont")

parrafos.forEach(parrafo => {

  parrafo.addEventListener("dragstart", event => {

    event.dataTransfer.setData("id", parrafo.id);
    parrafo.classList.add("drag")
  
  })
  parrafo.addEventListener("dragend", () => {
    parrafo.classList.remove("drag")
  })
})

seccion.forEach(seccion => {
  seccion.addEventListener("dragover", event => {
    
    event.preventDefault()
    event.dataTransfer.dropEffect = "move"
  
  })
  
  seccion.addEventListener("drop", event => {

    const id_parrafo = event.dataTransfer.getData("id")
    const parrafo = document.getElementById(id_parrafo)
    //parrafo.remove()
    seccion.appendChild(parrafo)
    
  })
})

basura.forEach(basura => {
  basura.addEventListener("dragover", event => {
    
    event.preventDefault()
    event.dataTransfer.dropEffect = "move"
  
  })
  
  basura.addEventListener("drop", event => {

    const id_parrafo = event.dataTransfer.getData("id")
    const parrafo = document.getElementById(id_parrafo)
    parrafo.remove()
    
  })
})