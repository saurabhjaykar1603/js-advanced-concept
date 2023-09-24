const phonebook = [
  {
    name: "shital",
    mobile: "0888888888",
  },
  {
    name: "yogita",
    mobile: "0888888",
  },
  {
    name: "Sagar",
    mobile: "0888888888",
  },
  {
    name: "Vaibhavi",
    mobile: "08888880",
  },
  {
    name: "<NAME>",
    mobile: "0888888888",
  },
  {
    name: "Rani",
    mobile: "0888888888",
  },
];

// const filteredArray = [];

// phonebook.forEach((contactDetails) => {
//   const { name, mobile } = contactDetails;

//   if (name.toLowerCase().includes('a')) {
//     filteredArray.push(contactDetails);
//   }
// });

// console.log(filteredArray);

const searchTerm = 'y'

const filterOutput = phonebook.filter((contactDetails) => {
  const name = contactDetails.name.toLowerCase();
  const mobile = contactDetails.mobile.toLowerCase();
  return name.includes(searchTerm) || mobile.includes(searchTerm);
});

console.log(filterOutput);