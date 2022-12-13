// alert("Hello everyone!")
// let b = prompt("Nhập nội dung ở đây nha: ")
// let name = confirm("Xác nhận")

// toán tử số học + - * / % ** 
// toán tử gán += *= /=
// toán tử logic && || == !=

// == so sách tương đối 5 có thể == "5"
// === so sánh tuyệt đối (cả kiểu dữ liệu)

// if (1=="1") {
//     alert("hello");
// }

// if (1==="1") {
//     alert("hello everyone");
// }

// toán tử kết hợp ?? tương tự || nhưng thêm xét đến biến được xác định

// let user;
// alert(user ?? "Anonymous") // Anonymous (user is) 

// // tương đương:

// if (user != undefined) {
//     return user;
// } else {
//     return "Anonymous";
// }

// let a = null;
// let b = undefined;
// let c = "";
// let d = 0;
// tương đương fasle

// if ("") {
//     alert("kakaka")
// }



// in ra chỉ số 0 đến (length-1)
// var text = "Viet Nam";
// for (x in text) alert(x);

// let Student = {
//     name: "Do Ngoc Giang",
//     age: 20,
//     major: "SE"
// }
// tạo thêm thuộc tính
// Student.email = "dongocgiang@gmail.com";
// Student['email'] = "dongocgiang@gmail.com";

// for (x in Student) {
    // in ra tên thuộc tính - key
    // console.log(x);
    // in ra thuộc tính - value
    // console.log(Student[x]);
// }



// let student = {
//     name: "Do Ngoc Giang",
//     age: '20',
//     major: "SE"
// }
// // in ra giá trị của từng phần tử trong mảng, chuỗi...

// for (let i of student){
//     console.log(i);
// }

// ham

// function tinhtong(n) {
//     let res = 0;
//     for (let i = 1; i <= n; i++)
//         res += i;
//     return res;
// }

// console.log(tinhtong(100));

// let say = function() {
//     return "hello";
// }

// console.log(say());

// let tinhtong2 = function (a, b) {
//     return a+b;
// }

// console.log(tinhtong2(3,9));

// let tinhtong3 = function (a, b){
//     console.log(a+b);
// }
// tinhtong3(5,7);


// arrow fun
// let tinhtong4 = (a, b) => {
//     return a+b;
// }

// tuong duong
// let tinhtong5 = (a, b) => a + b;
// console.log(tinhtong5(5,8));