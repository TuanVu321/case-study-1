//class

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
    }
}
//test
let bookList = [];
let book1 = new Book('doremon', '001', '100', 'Fujiko Fujio', 'Truyện tranh');
bookList.push(book1);

//hien thi
function showList() {
    let html = '';
    for (let i = 0; i < bookList.length; i++) {
        html = html + '<tr>';
        html = html + '<td width="50px">';
        html = html + i + 1;
        html = html + '</td>';
        html = html + '<td>';
        html = html + bookList[i].getName()+ "<button onclick='edit(this," + i +'getName'+")'>edit</button>";
        html = html + '</td>';
        html = html + '<td>';
        html = html + bookList[i].getBook_code();
        html = html + '</td>';
        html = html + '<td>';
        html = html + bookList[i].getType();
        html = html + '</td>';
        html = html + '<td>';
        html = html + bookList[i].getNumber();
        html = html + '</td>';
        html = html + '<td>';
        html = html + bookList[i].getBook_writing();
        html = html + '</td>';
        html = html + '<td>';
        html = html + "<button onclick='delete1(this," + i + ")'>delete</button>";
        html = html + '</td>';
        html = html + '<td>';
        html = html + "<button onclick='edit1(this," + i + ")'>edit</button>";
        html = html + '</td>';
        html = html + '</tr>';
    }
    document.getElementById('table').innerHTML = html;
}

showList();
//xoa
function delete1(id) {
    let r = confirm('Ban co muon xoa hay khong?');
    if (r == true) {
        bookList.splice(id, 1);
    }
    showList();
}

// chinh tung phan
function edit(index,info) {
    let e = prompt("ban muon doi thanh : ", bookList[index].info);
    if (e !== null) {
        bookList[index].info = e;
    }
    showList();
}


