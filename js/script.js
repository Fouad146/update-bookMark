

let siteUrl = document.getElementById("siteUrl")
let inputName = document.getElementById("inputName")
let tableContent = document.getElementById("tableContent")
let alertBox = document.getElementById("alertBox")





let books = getBook() || [];
display();


function submet() {
    let book = {
        index: books.length+1,
        url: inputName.value,
        site: siteUrl.value,
    }

    if (inputName.value === "" ||
        inputName.value.includes(':') ||
        inputName.value.includes('/') ||
        inputName.value.includes('@') ||
        inputName.value.includes('.') ||
        inputName.value.includes('$')) {
        alertBox.classList.replace('d-none', `d-flex`);
        alert("this Name does not work, you should not use    \" \"    :   /   $   .   @ in name ");
    } else if (!siteUrl.value.includes(`https`) ||
        !siteUrl.value.includes(`:`) ||
        !siteUrl.value.includes(`/`) ||
        !siteUrl.value.includes(`www`) ||
        !siteUrl.value.includes(`.`) ||
        !siteUrl.value.includes(`.com`)) {
        alertBox.classList.replace('d-none', `d-flex`);
        alert("this URL does not work URl should have https://www. `site` .com ")
    } else {
        books.push(book)
        display()
        saveBook()
        inputName.value = "";
        siteUrl.value = "";
    }
}



document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
});


function display() {
    var cartona = "";
    if (books.length > 0) {

        for (var i = 0; i < books.length; i++) {
            cartona += `<tr>
                            <th>${books[i].index}</th>
                            <th>${books[i].url}</th>
                            <th>
                                <button class="btn btn-success"><i class="fa-regular fa-eye pe-2" onclick="visitBook(${i})"></i>Visit</button>
                            </th>
                            <th>
                                <button class="btn btn-danger"><i class="fa-solid fa-trash-can pe-2" onclick="removeBook(${i})"></i>Delete</button>
                            </th>
                        </tr>
    `;

        }
        tableContent.innerHTML = cartona
    } else {
        books.pop()
    }
}


function removeBook(r) {
    books.splice(r, 1)
    saveBook()
    display()
}
function visitBook(v) {
    window.location.href= books[v].site;
    display()
    
}

function xAlertBox() {
    alertBox.classList.replace(`d-flex`, `d-none`)
}



function saveBook() {

    return localStorage.setItem("books", JSON.stringify(books))

}
function getBook() {
    return JSON.parse(localStorage.getItem("books"))
}

