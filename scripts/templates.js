function getBookTemplate(indexBooklist) {
    return `
     <div id="bookListRef${indexBooklist}" class="bookContainer">
            <h2>${books[indexBooklist].name}</h2>
            <img src="" alt="">
            <p class="priceInfo">${books[indexBooklist].price}</p>
            <section class="likesection">
                ${books[indexBooklist].likes}
                <button onclick="" class="likebutton"></button>
            </section>
            <section class="bookinformations">
                <p>Author: ${books[indexBooklist].author}</p>
                <p>Erscheinungsjahr: ${books[indexBooklist].publishedYear}</p>
                <p>Genre: ${books[indexBooklist].genre}</p>
            </section>
            <section class="commentdepartment">
            <h3>Kommentare:</h3>
            <table id="commentRef${indexBooklist}">
            </table>
            <input class="commentInput" type="text">
                <button onclick="" class="sharebutton"></button>
            </section>
        </div> `
}

function getCommentsTemplate(commentsName, commentsComment) {
    return `
    <th>${commentsName}</th>
    <tr>${commentsComment}</tr>         
  `
}