const student = [
    {id: 13, name: 'Rezvi Ahmed'},
    {id: 15, name: 'Mizu Ahmed'},
    {id: 21, name: 'Forid Hossain'},
    {id: 25, name: 'Zobaidul F'}
];

const names = student.map(s => s.name);
const ids = student.map(s => s.id);
const bigger = student.filter(s => s.id>20);
const biggerOne = student.find(s => s.id>20);
console.log(names);
console.log(ids);
console.log(bigger);
console.log(biggerOne);