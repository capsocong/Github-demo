const message : string = 'Hello world';
console.log(message);

const b : number = 10;
function sum(a: number, b: number){
    return a + b;
}
console.log(sum(2, b)); // 5
type A = Awaited<Promise<number>>; // number
type B = Awaited<Promise<String>>; // string
interface Person{
    firstName: string;
    lastName: string;
    address: string;
    age: number;
};
class student implements Person{
    fullName: string;
    constructor(
        public firstName: string,
        public lastName: string,
        public address: string,
        public age: number
    ){
        this.fullName = firstName + " " + lastName;
    }
}
type PartialPerson = Partial<Person>;
function updatePerson(firstName: String, update: PartialPerson){
    return {firstName, update};
}
type OmitPerson = Omit<Person, 'address'>;
function getFullName(person : OmitPerson){
    return "FullName:"+person.firstName + " " + person.lastName + " Age:" + person.age; ;
}
// function getFullName(person : Person){
//     return "FullName:"+person.firstName + " " + person.lastName + " Address:" + person.address + " Age:" + person.age; ;
// }
type PersonWithAddressAndAge = Pick<Person, 'address' | 'age'>;
function getAddressAndAge(person: Person): PersonWithAddressAndAge{
    return {address: person.address, age: person.age};
}
type muBool = true | false;
var user = new student('Tien', 'Tran', 'Hòa Bình', 20);
// console.log(getFullName(user)); // Tien Tran
console.log(updatePerson('tien 3',{lastName: 'Ngố'})); // { id: 1, update: { firstName: 'Tien2', lastName: 'Tran' } }
console.log(getFullName(user)); // Tien2 Tran
console.log(getAddressAndAge(user)); // { address: 'Hòa Bình', age: 20 }
// document.body.textContent = user.fullName;