function getBookTemplate(indexBooklist) {
    return `
     <div id="bookListRef${indexBooklist}" class="bookContainer">
            <h2>${books[indexBooklist].name}</h2>
            <img class="bookImages" src="${books[indexBooklist].img}" alt="${books[indexBooklist].alt}">
            <section class="highlightSection">
            <p class="priceInfo">${books[indexBooklist].price} €</p>
            <section class="likeSection">
                <p id="counterLikes${indexBooklist}">${books[indexBooklist].likes}</p>
                <img onclick="changeHighlight(indexBooklist)" id="bookHighlight${indexBooklist}" class="likebutton" src="assets/icons/001-lieblings.png" alt="Likebutton">
            </section>
            </section>
            <section class="bookInformations">
                <p><b>Autor:</b> ${books[indexBooklist].author}</p>
                <p><b>Erscheinungsjahr:</b> ${books[indexBooklist].publishedYear}</p>
                <p><b>Genre:</b> ${books[indexBooklist].genre}</p>
            </section>
            <h3>Kommentare:</h3>
            <section class="commentDepartment">
            <table id="commentRef${indexBooklist}">
            </table>
            </section>
            <section class="inputSection">
            <input class="commentInput" type="text">
                <img onclick="" class="sharebutton" src="assets/icons/006-like-button.png" alt="Send Comment">
            </section>
        </div> `
}

function getCommentsTemplate(commentsName, commentsComment) {
    return `
    <th>[${commentsName}]</th>
    <td>${commentsComment}</td>         
  `
}