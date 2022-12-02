function run() {
    var s = document.getElementById('input_text').value;
    if (s=='') window.alert("Không được để trống ô!");
    var list_s = s.split(" ");
    var list_len = [];
    for (let i=0; i<list_s.lenght; i++) {
        list_len.push(list_s[i].lenght);
    }
    document.getElementById('result').value = list_len;

}

var ngay = document.getElementById('songay').value;
        var luong = document.getElementById('luong').value;
        var tong_tien = ngay*luong;
        if (ngay>30 || ngay<1) {
            window.alert("Số ngày không thỏa mãn!");
        } else if (luong==0 || luong=="") {
            window.alert("Lương ngày không thỏa mãn!");
        } else {
            document.getElementById('tien').value = tong_tien;
            document.getElementById('tien').style.background="rgb(240, 150, 220)";
        }
        if (ngay<15) {
            document.getElementById('xeploai').value = "Không xếp loại!";
            document.getElementById('xeploai').style.background="rgb(240, 150, 220)";
        } else if (ngay<19) {
            document.getElementById('xeploai').value = "Loại C";
            document.getElementById('xeploai').style.background="rgb(240, 150, 220)";
        } else if (ngay<22) {
            document.getElementById('xeploai').value = "Loại B";
            document.getElementById('xeploai').style.background="rgb(240, 150, 220)";
        } else {
            document.getElementById('xeploai').value = "Loại A";
            document.getElementById('xeploai').style.background="rgb(240, 150, 220)";
        }