export class Person {
    id: number;
    name: string;
    address: string;
    phone: string;
    age: number;
    height: number;
    targetKg: number;
    illness: string;
    medication: string;
    allergies: string;

    constructor(id: number, name: string, address: string, phone: string, age: number,
        height: number, targetKg: number, illness: string, medication: string, allergies: string) {
        this.address = address;
        this.age = age;
        this.allergies = allergies;
        this.height = height;
        this.id = id;
        this.illness = illness;
        this.medication = medication;
        this.name = name;
        this.phone = phone;
        this.targetKg = targetKg;
    }

}