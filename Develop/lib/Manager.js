// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Manager =  require("./manager");

class Manager {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

}
module.exports = Manager