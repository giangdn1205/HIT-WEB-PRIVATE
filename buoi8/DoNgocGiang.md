# PHÂN BIỆT VAR, LET, CONST

- VAR
    + var một khi được khai báo sẽ trở thành biến toàn cục.
    - người dùng có thể khai báo biến var mà không cần giá trị ban đầu - khá giống 1 số kiểu dữ liệu như int, float, bool trong 1 số ngôn ngữ lập trình vd:
        ```
        var text = "HIT 2023";
        console.log(text); // HIT 2023
        var age;
        console.log(age); // undefined (chưa xác định)
        // nếu thực hiện tương tự kiểu khai báo trên ở kiểu dữ liệu const thì kết quả nhận được là lỗi!
        ```
    - var cho phép người dùng định nghĩa lại kiểu dữ liệu vd:
        ```
        var text = "Cua Xinh Xinh";
        console.log(text); // Cua Xinh Xinh
        var text = true;
        console.log(text); // kết quả là true
        // việc thực hiện định nghĩa lại kiểu dữ liệu này cũng không thể thực hiện ở 2 kiểu dữ liệu còn lại.
        ```
    - thường được sử dụng để lưu trữ những biến có thể thay đổi giá trị, kiểu dữ liệu trong khi thực hiện chương trình (khá linh hoạt nhưng không nên quá lạm dụng)
- LET
    - biến cục bộ chỉ có tác dụng trong 1 khối {} vd:
        ```
        let text = "say Hi";
        if (true) {
            let text = "say Hello instead";
            console.log(text); // "say Hello instead"
        }
        console.log(text); // "say Hi"
        ```
    - let không cho phét người dùng khai báo lại vd:
        ```
        let text = "Miu Meo Meo";
        let text = false;
        console.log(a); 
        // SyntaxError: Identifier 'text' has already been declared
        ```
    - cho phép người dùng thao tác trước khi gắn giá trị vd:
        ```
        + let age;
        console.log(age); // undefined
        age = 20;
        console.log(age); // 20
        ```
- CONST
    - hằng số, thường được khai báo ở đầu chương trình.
    - hằng có phạm vi hoạt động ở mọi vị trí.
    - hằng phải được khai báo kèm giá trị vd:
        ```
        const Cua;
        console.log(Cua);
        // SyntaxError: Missing initializer in const declaration
        // vì vậy ta phải cần khai báo nó với 1 giá trị cụ thể
        const Cua = "Cua Xinh Xinh";
        console.log(Cua); // Cua Xinh Xinh
        ```
    - hằng không cho phép khai báo hoặc gắn lại giá trị mới.


Cuối cùng trên đây một số tìm hiểu chủ quan về: Var, Let, Const của mình. Rất mong những góp ý bổ ích của mọi người. Cám ơn mọi người đã đọc ạ ^-^