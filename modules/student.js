import Person from "./person.js";

export default class Student extends Person {
    _marks = []
    get marks(){
        return [...this._marks]
    }
    set marks(value){
        this._marks = [...value]
    }

    constructor(marks){
        this.marks = marks
    }
}