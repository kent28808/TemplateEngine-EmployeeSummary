// TODO: Write code to define and export the Employee class
const Employee =  require("./employee");

class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

}
module.exports = Employee