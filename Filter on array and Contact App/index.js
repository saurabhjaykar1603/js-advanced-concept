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

const filteredArray = [];

phonebook.forEach((contactDetails) => {
  const { name, mobile } = contactDetails;

  if (name.toLowerCase().includes('a')) {
    filteredArray.push(contactDetails);
  }
});

console.log(filteredArray);
