var employees = []

function employee (name, jobTitle, salary) {
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = "Full Time"
    /*this.printEmployeeForm = function(){
        console.log("Name: " + this.name)
        console.log("Job Title: " + this.jobTitle)
        console.log("Salary: " + this.salary)
        console.log("Status: " + this.status)
    }*/
}

employee.prototype.printEmployeeForm = function(){
    console.log("Name: " + this.name)
    console.log("Job Title: " + this.jobTitle)
    console.log("Salary: " + this.salary)
    console.log("Status: " + this.status)
}


var Dylan = new employee("Dylan", "CEO", "1Million$/Annualy")
var Steve = new employee("Steve", "Manager", "0.01$/Second")
var Emilia = new employee("Emilia", "Contractor", "120$/Hour")
Emilia.status = "Contract"

Dylan.printEmployeeForm()
Steve.printEmployeeForm()
Emilia.printEmployeeForm()