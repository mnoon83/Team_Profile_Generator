const Employee = require('../lib/Employee.js')
class Intern extends Employee {
  constructor(name, email, phone) {
    super(name, email, phone)
    this.school=school
  }
  getSchool(){
    return this.school
  }
  getRole(){
    reutrn 'Intern'
  }

}
module.exports = Intern