export const people = [
  {
    id: "1",
    name: "Nicolas",
    age: 18,
    gender: "female"
  },
  {
    id: "2",
    name: "Jisu",
    age: 18,
    gender: "female"
  },
  {
    id: "3",
    name: "Japan Guy",
    age: 18,
    gender: "female"
  },
  {
    id: "4",
    name: "Daal",
    age: 18,
    gender: "female"
  },
  {
    id: "5",
    name: "JD",
    age: 18,
    gender: "female"
  },
  {
    id: "6",
    name: "moondaddi",
    age: 18,
    gender: "female"
  },
  {
    id: "7",
    name: "flynn",
    age: 18,
    gender: "female"
  }
];

export const getById = id => {
  const filteredPeople = people.filter(person => person.id === String(id));
  return filteredPeople[0];
};
