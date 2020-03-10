function Login(username, password) {
    this.username = username;
    this.password = password;
    this.getUsername = function () {
        return this.username;
    };
    this.getPassword = function () {
        return this.password;
    }
}

let login = [];
let login1 = new Login('admin', 'admin');
login.push(login1);
let login2 = new Login('admin2', 'admin2');
login.push(login2);
let login3 = new Login('admin3', 'admin3');
login.push(login3);
let login4 = new Login('admin4', 'admin4');
login.push(login4);
let login5 = new Login('admin5', 'admin5');
login.push(login5);
let login6 = new Login('admin6', 'admin6');
login.push(login6);


function check(username, password) {
    let count = 0;
    for (let i = 0; i < login.length; i++) {
        if (login[i].getUsername() == username && login[i].getPassword() == password) {
            count++
        }
    }
    if (count > 0) {
        window.location.assign("display.html");
    } else {
        alert('Sai mật khẩu hoặc tài khoản');
        window.location.reload();
    }
}

function login0() {
    let username = document.getElementById('input-username').value;
    let password = document.getElementById('input-password').value;
    if (username == "" || password == "") {
        alert('Bạn chưa điền tài khoản hoặc mật khẩu')
    } else {
        check(username, password);
    }

}