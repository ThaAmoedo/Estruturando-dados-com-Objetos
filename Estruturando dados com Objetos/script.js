/* 
  Crie uma lista de pacientes

  Cada paciente dentro da lista, deverá conter
    nome
    idade
    peso
    altura

  Escreva uma lista contendo o nome dos pacientes
*/

let paciente  = [
    {
      name: "Rakan",
      age: 24,
      weight: 53,
      height: 175,
    },
    {
      name: "Xayah",
      age: 21,
      weight: 70,
      height: 163,
    },
    {
      name: "Lux",
      age: 23,
      weight: 56,
      height: 171,
    },
  ]

  let patientsNames = []

for(let patient of paciente) {
  patientsNames.push(patient.name)
}

alert(patientsNames)