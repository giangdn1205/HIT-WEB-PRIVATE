const Student = {
    name: "Giang",
    age: 19,
    major: "Software Engineer"
}
function convert(obj) {
    var lst = [];
    for (let x in obj) {
        var data = x + ": " + obj[x];
        lst.push(data); //.toString()
    }
    console.log(lst);
}

convert(Student)
// [ 'name: Giang', 'age: 19', 'major: Software Engineer' ]