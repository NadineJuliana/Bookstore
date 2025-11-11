// function renderBookList() {
//   let contentBooklistRef = document.getElementById('bookListContainer');

//   for (let indexBooklist = 0; indexBooklist < books.length; indexBooklist++) {

//     contentBooklistRef.innerHTML += getBookTemplate(indexBooklist);
//     renderBookComments(indexBooklist);
//   }

// }


// function renderBookComments(indexBooklist) {
//   let bookCommentsRef = document.getElementById(`commentRef${indexBooklist}`);

//   for (let indexComments = 0; indexComments < books[indexBooklist].comments.length; indexComments++) {
//     let commentsName = books[indexBooklist].comments[indexComments].name;
//     let commentsComment = books[indexBooklist].comments[indexComments].comment;
//     bookCommentsRef.innerHTML += getCommentsTemplate(commentsName, commentsComment);
//   }
// }


// function highlightBooks() {
//   if (condition) {

//   }
// }


function renderBookList() {
  let contentBooklistRef = document.getElementById('bookListContainer');

  for (let indexBooklist = 0; indexBooklist < books.length; indexBooklist++) {
    contentBooklistRef.innerHTML += getBookTemplate(indexBooklist);

    let bookCommentsRef = document.getElementById(`commentRef${indexBooklist}`);

    for (let indexComments = 0; indexComments < books[indexBooklist].comments.length; indexComments++) {
      let commentsName = books[indexBooklist].comments[indexComments].name;
      let commentsComment = books[indexBooklist].comments[indexComments].comment;
      bookCommentsRef.innerHTML += getCommentsTemplate(commentsName, commentsComment);
    }
  }
}