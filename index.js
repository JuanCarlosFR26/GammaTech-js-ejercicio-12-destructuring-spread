import { countriesObj } from "./countries_data.js";

// Ejercicios

// Ejercicios: Nivel 1

const constants = [2.72, 3.14, 9.81, 37, 100];
const countries = ["Mongolia", "Estonia", "Sweden", "Denmark", "Norway"];
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60,
};
const users = [
  {
    name: "Brook",
    scores: 75,
    skills: ["HTM", "CSS", "JS"],
    age: 16,
  },
  {
    name: "Alex",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "David",
    scores: 75,
    skills: ["HTM", "CSS"],
    age: 22,
  },
  {
    name: "John",
    scores: 85,
    skills: ["HTML"],
    age: 25,
  },
  {
    name: "Sara",
    scores: 95,
    skills: ["HTM", "CSS", "JS"],
    age: 26,
  },
  {
    name: "Martha",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "Thomas",
    scores: 90,
    skills: ["HTM", "CSS", "JS"],
    age: 20,
  },
];
// 1- Desestructurar y asignar los elementos del array de constantes para e, pi, gravedad, humanBodyTemp, waterBoilingTemp.
let [e, pi, gravedad, humanBodyTemp, waterBoilingTemp] = constants;
console.log('Constante e: ', e);
console.log('Constante Pi: ', pi);
console.log('Constante Gravedad: ', gravedad);
console.log('Constante Temperatura humana: ', humanBodyTemp);
console.log('Constante Ebullición: ', waterBoilingTemp);

console.log('===================================');

// 2- Desestructurar y asignar los elementos del array de países a fin, est, sw, den, nor
let [fin, est, sw, den, nor] = countries;
console.log(fin);
console.log(est);
console.log(sw);
console.log(den);
console.log(nor);


console.log('===================================');

// 3- Desestructurar el objeto rectángulo por sus propiedades o keys.
let { width, height, area, perimeter } = rectangle;
console.log(width);
console.log(height);
console.log(area);
console.log(perimeter);

console.log('===================================');


// Ejercicios: Nivel 2

// 1- Iterar a través del array de usuarios y obtener todas las keys del objeto utilizando la desestructuración
// let keys = Object.keys(users[0]);
for(const { name, scores, skills, age } of users) {
    console.log(name, scores, skills, age);
}

console.log('===================================');

// 2- Encuentra las personas que tienen menos de dos habilidades
let usersMoins2Skills = [];
for(const  { name, skills } of users) {
    skills.filter(e => skills.length < 2 ? usersMoins2Skills.push(name) : console.log());
}
console.log(usersMoins2Skills);

console.log('===================================');

// Ejercicios: Nivel 3

// 1- Desestructurar el objeto países imprimir nombre, capital, población e idiomas de todos los países
for(const { name, capital, languages, population } of countriesObj) {
    console.log([name, capital, ...languages, population]);
}

console.log('===================================');

// 2- Un desarrollador junior estructura el nombre del estudiante, las habilidades y la puntuación en un array de arrays que puede no ser fácil de leer. Desestructure la siguiente matriz nombre a nombre, array de habilidades a habilidades, array de puntuaciones a puntuaciones, puntuación de JavaScript a jsScore y puntuación de React a reactScore variable en una línea.
const student = ["David", ["HTML", "CSS", "JS", "React"], [98, 85, 90, 95]];
// console.log(name, skills, jsScore, reactScore);
// David (4) ["HTM", "CSS", "JS", "React"] 90 95
let [ nombre, habilidades, puntuaciones ] = student;
let [ , , jsScrore, reactScore ] = puntuaciones;
console.log(nombre, habilidades, jsScrore, reactScore)

console.log('===================================');


// 3- Escribe una función llamada convertArrayToObject que pueda convertir el array en un objeto estructurado.
const students = [
  ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]],
  ["John", ["HTM", "CSS", "JS", "React"], [85, 80, 85, 80]]
];

// console.log(convertArrayToObject(students))[
//   ({
//     name: "David",
//     skills: ["HTM", "CSS", "JS", "React"],
//     scores: [98, 85, 90, 95],
//   },
//   {
//     name: "John",
//     skills: ["HTM", "CSS", "JS", "React"],
//     scores: [85, 80, 85, 80],
//   })
// ];
const convertArrayToObject = array => {
    let array2 = [];
    for(let [name, skills, points] of array) {
        array2.push({
            "name": name,
            "skills": skills,
            "score": points
        })
    }
    return Object.assign({}, array2);
}
console.log(convertArrayToObject(students));

console.log('===================================');

// 4- Copie el objeto estudiante a newStudent sin mutar el objeto original. En el nuevo objeto añade lo siguiente ?
// Añadir Bootstrap con el nivel 8 a los conjuntos de habilidades de front end
// Añadir Express con nivel 9 a los conjuntos de habilidades del back end
// Añadir SQL con nivel 8 a los conjuntos de habilidades de la base de datos
// Añadir SQL sin nivel a los conjuntos de habilidades de ciencia de datos
const student2 = {
  name: "David",
  age: 25,
  skills: {
    frontEnd: [
      { skill: "HTML", level: 10 },
      { skill: "CSS", level: 8 },
      { skill: "JS", level: 8 },
      { skill: "React", level: 9 },
    ],
    backEnd: [
      { skill: "Node", level: 7 },
      { skill: "GraphQL", level: 8 },
    ],
    dataBase: [{ skill: "MongoDB", level: 7.5 }],
    dataScience: ["Python", "R", "D3.js"],
  },
};
// La salida del objeto copiado debería tener este aspecto:

//     {
//     name: 'David',
//     age: 25,
//     skills: {
//       frontEnd: [
//         {skill: 'HTML',level: 10},
//         {skill: 'CSS',level: 8},
//         {skill: 'JS',level: 8},
//         {skill: 'React',level: 9},
//         {skill: 'BootStrap',level: 8}
//       ],
//       backEnd: [
//         {skill: 'Node',level: 7},
//         {skill: 'GraphQL',level: 8},
//         {skill: 'Express',level: 9}
//       ],
//       dataBase: [
//         { skill: 'MongoDB',level: 7.5},
//         { skill: 'SQL',level: 8}
//       ],
//       dataScience: ['Python','R','D3.js','SQL']
//     }
//   }

// const newStudent = { ...student2, skills: {
//     frontEnd: [
//         {skill: 'HTML',level: 10},
//         {skill: 'CSS',level: 8},
//         {skill: 'JS',level: 8},
//         {skill: 'React',level: 9},
//         {skill: 'BootStrap',level: 8}
//     ],
//     backEnd: [
//         {skill: 'Node',level: 7},
//         {skill: 'GraphQL',level: 8},
//         {skill: 'Express',level: 9}
//     ],
//     dataBase: [
//         { skill: 'MongoDB',level: 7.5},
//         { skill: 'SQL',level: 8}
//     ],
//     dataScience: ['Python','R','D3.js','SQL']
// } };
// console.log(student2)
// console.log(newStudent);

const newStudent = JSON.parse(JSON.stringify(student2));

newStudent.skills.frontEnd.push({skill: 'Bootstrap', level: 8});
newStudent.skills.backEnd.push({skill: 'Express', level: 9});
newStudent.skills.dataBase.push({skill: 'SQL',level: 8});
newStudent.skills.dataScience.push('SQL');

console.log(student2.skills)
console.log(newStudent.skills)

