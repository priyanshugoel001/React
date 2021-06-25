const user ={
    id:339,
    name:'Tushar',
    age:22,
    education:{
        degree:'Masters',
        school:{
            name:'SPS',
            location:'Pitampura'
        }
    }
};
// let {age} = user;
// console.log(age);

// let degree;
//  let {education} = user;
//  console.log(degree);

// school name
let {education:{school:{name:schoolname}}}=user;
console.log(schoolname);