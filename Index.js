const pets = [
   { name: "Max", type: "dog", bornOn: 2018 },
    { name: "Angel", type: "cat", bornOn: 2015 },
    { name: "Jasper", type: "dog", bornOn: 2016 }
  ];
  
//   function getAge(pet) {
//     return new Date().getFullYear() - pet.bornOn;
//   }

const getAge = (pet) => new Date().getFullYear() - pet.bornOn;
  
//   let petsWithAge = [];
//   for (let i = 0; i < pets.length; i++) {
//     let pet = pets[i];
//     pet.age = getAge(pet);
  
//     petsWithAge.push(pet);
//   }
//   console.log(petsWithAge);

  let petsWithAge = [];
  pets.forEach(pet => {
    pet.age = getAge(pet);
  
    petsWithAge.push(pet);
  })
  console.log(petsWithAge);
  
  
//   let dogs = [];
//   for (let i = 0; i < pets.length; i++) {
//     let pet = pets[i];
//     if (pet.type === "dog") {
//       dogs.push(pet);
//     }
//   }
//   console.log(dogs);

 
 const dogs=pets.filter((dog)=> dog.type==="dog")
  console.log(dogs);

  
//   let jasper;
//   for (let i = 0; i < pets.length; i++) {
//     let pet = pets[i];
//     if (pet.name === "Jasper") {
//       jasper = pet;
//     }
//   }
//   console.log("");



  let jasper = petsWithAge.filter(x => x.name==="Jasper")
  console.log(`Jasper is ${jasper[0].age} years old`)


