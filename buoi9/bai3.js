// mảng cho trước gồm 3 phần tử
var courses = ["Python", "JavaScript", "Go"]


// hàm thêm 1 phần tử
function addCourse(lst, val) {
    lst.push(val);
}
addCourse(courses, 'Java');
console.log(courses); // [ 'Python', 'JavaScript', 'Go', 'Java' ]


// hàm trả về phần tử đầu tiên
function getFirstElement(lst) {
    return lst[0];
}
var firstElement = getFirstElement(courses);
console.log(firstElement); // Python


// hàm nối các phần tử
function joinArr(lst, char) {
    return lst.join(char);
}
var result1 = joinArr(courses, "-");
var result2 = joinArr(courses, " * ");

console.log(result1); // Python-JavaScript-Go-Java
console.log(result2); // Python * JavaScript * Go * Java