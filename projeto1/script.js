
const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
    const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
    const dayExists = nlwSetup.dayExists(today)
  
    if (dayExists) {
      alert("Dia já incluso 🔴")
      return
    }
  
    alert("Adicionado com sucesso ✅")
    nlwSetup.addDay(today)
  }
  
function save() {
    localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
  }
  
    
//const data = {
 //   run: ['04-26', '04-27','04-28', '05-03'],
  //  takePills:['04-28', '04-29','04-30'],
  //  journal: [ '04-26'],

const data = JSON.parse(localStorage.getItem("NLWSetup@habits"))|| {}
nlwSetup.setData(data)
nlwSetup.load()

