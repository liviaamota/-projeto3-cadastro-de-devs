const form = document.getElementById("orderForm")

form.addEventListener("submit", function (ev) )

  ev.preventDefault()

  const name = document.querySelector("input[name='name']").value
  const technologies = document.querySelector("input[name='technologies']").value
  const age = document.querySelector("select[name='age']").value
 

  console.log({
    name,
    technologies ,
    age,
  })

  alert(
    "\nNome do cliente: " + name +
    "\nTecnologias: " + technologies +
    "\nidade: " + age +

  )