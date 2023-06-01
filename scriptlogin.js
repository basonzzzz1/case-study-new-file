var listAccount = ["bason","admin"];
var listPassword = ["bason","password"];

function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var isAuthenticated = false;

    for (var i = 0; i < listAccount.length; i++) {
        if (username === listAccount[i] && password === listPassword[i]) {
            isAuthenticated = true;
            break;
        }
    }

    if (isAuthenticated===true) {
        window.location.href = "Math.html";
        // Thực hiện các thao tác sau khi đăng nhập thành công
    } else {
        alert("Tài khoản và mật khẩu không đúng!");
    }
}

function register() {
    document.getElementById("pushaccount").innerHTML = `
        <h3 style="color: blue ;text-align: center ">New Acount</h3>
        <input type="text" id="account1" placeholder="New User Name" style="width: 300px "><br>
        <input type="text" id="password1" placeholder="New Password" style="width: 300px"><br>
        <input type="number" id="Number Phone" placeholder="Phone Number" style="width: 300px "><br>
        <button onclick="add1()" style="margin: auto; width: 100%">Register</button>
    `;
}

function add1() {
    var newAccount = document.getElementById("account1").value;
    var newPassword = document.getElementById("password1").value;

    listAccount.push(newAccount);
    listPassword.push(newPassword);

    alert("Tài khoản đã được đăng ký thành công!");
}