function renderBookList() {
  let contentBooklistRef = document.getElementById('bookListContainer');


  for (let indexBooklist = 0; indexBooklist < books.length; indexBooklist++) {
    contentBooklistRef.innerHTML += getBookTemplate(indexBooklist);
  }
}