function display() {
    let a = order[0];
    let html = "";
    html = html + "<table>";
    html = html + "<tr>";
    html = html + "<td>";
    html = html + "Tên sách: " ;
    html = html + "</td>";
    html = html + "<td>";
    html = html + bookList[a].getName();
    html = html + "</td>";
    html = html + "</tr>";
    html = html + "<tr>";
    html = html + "<td>";
    html = html + "Tác giả: " ;
    html = html + "</td>";
    html = html + "<td>";
    html = html + bookList[a].getBook_writing();
    html = html + "</td>";
    html = html + "</tr>";
    html = html + "<tr>";
    html = html + "<td>";
    html = html + "Thể loại: " ;
    html = html + "</td>";
    html = html + "<td>";
    html = html + bookList[a].getType();
    html = html + "</td>";
    html = html + "</tr>";
    html = html + "<tr>";
    html = html + "<td>";
    html = html + "Số lượng: " ;
    html = html + "</td>";
    html = html + "<td>";
    html = html + bookList[a].getNumber();
    html = html + "</td>";
    html = html + "</tr>";
    html = html + "<tr>";
    html = html + "<td>";
    html = html + "Mã sách: " ;
    html = html + "</td>";
    html = html + "<td>";
    html = html + bookList[a].getBook_code();
    html = html + "</td>";
    html = html + "</tr>";
    html = html + "<tr>";
    html = html + "<td>";
    html = html + "Địa chỉ giao sách " ;
    html = html + "</td>";
    html = html + "<td>";
    html = html + "<input type='text'>";
    html = html + "</td>";
    html = html + "</tr>";
    html = html + "<tr>";
    html = html + "<td>";
    html = html + "Số lượng muốn mua: " ;
    html = html + "</td>";
    html = html + "<td>";
    html = html + "<input id=\"number-buy\" type='number'>";
    html = html + "</td>";
    html = html + "</tr>";
    html = html + "<table>";
    html = html + "<button id =\"order" + a + "\"  onclick=\"finish(this.id.substring(this.id.length -1))\" >Mua sách</button>";


    document.getElementById('buy-table').innerHTML = html;
}


display();

function finish(id) {
    let a = document.getElementById('number-buy').value;

    function changeNumber(id, a) {
        bookList[id].setBook_code(id, a)
    }

    order = [];
    window.location.assign("front-end.html");
}

function changeNumber(id, a) {
    bookList[id].setBook_code(id, a)
}