var org = {
    "name": "Relevel",
    "cohort": "Fe"
}
console.log(org);
var student1 = Object.create(org)
student1.student_name = "Name",
student1.student_age = 28
console.log(student1)