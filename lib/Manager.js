const Employee = require('../lib/Employee.js')
class Manager extends Employee{
  constructor (name, email, phone) {
    super(name, email, phone)
    this.school.school
  }
  getSchool(){
    return this.school
  }
  getRole(){
    return 'Manager'
  }
}
module.exports = Manager