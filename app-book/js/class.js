function Book(name, book_code, number, book_writing, type) {
    this.name = name;
    this.book_code = book_code;
    this.number = number;
    this.book_writing = book_writing;
    this.type = type;
    this.getName = function () {
        return this.name;
    };
    this.getBook_code = function () {
        return this.book_code;
    };
    this.getNumber = function () {
        return this.number;
    };
    this.getBook_writing = function () {
        return this.book_writing;
    };
    this.getType = function () {
        return this.type;
    };
    this.setBook_code = function (id, a) {
        this.book_code = book_code - a;
    }
}

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
