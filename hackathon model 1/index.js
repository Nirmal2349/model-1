

async function getdata() {
    var alldata = document.getElementById("data")
    let res = await fetch('https://www.anapioficeandfire.com/api/books')
    let result = await res.json();
    console.log(result);


    for (var i=0;i<result.length;i++) {

        var name = document.createElement("div");
        name.setAttribute("id", "card")
        name.innerHTML = (`Name: ` + result[i].name);

        var isbn = document.createElement("li")
        isbn.innerHTML = (`Isbn: ` + result[i].isbn);
        name.appendChild(isbn)

        var pages = document.createElement("li")
        pages.innerHTML = (`Number of pages: ` + result[i].numberOfPages);
        name.appendChild(pages)

        var authors = document.createElement("li")
        authors.innerHTML = (`Authors Name: ` + result[i].authors[0]);
        name.appendChild(authors)

        var publisher = document.createElement("li")
        publisher.innerHTML = (`Publisher Name: ` + result[i].publisher);
        name.appendChild(publisher)

        var released = document.createElement("li")
        released.innerHTML = (`Released Date: ` + result[i].released.slice(0, 9));
        name.appendChild(released)

        var characters1 = document.createElement("li")
        characters1.innerHTML = ('characters Name:' + result[i].characters[0].name);
        name.appendChild(characters1)
        alldata.appendChild(name)

    }
}
getdata()
