function renderBookList() {
  let contentBooklistRef = document.getElementById('bookListContainer');
  contentBooklistRef.innerHTML = "";
  for (let indexBooklist = 0; indexBooklist < books.length; indexBooklist++) {
    contentBooklistRef.innerHTML += getBookTemplate(indexBooklist);
    let bookCommentsRef = document.getElementById(`commentRef${indexBooklist}`);
    for (let indexComments = 0; indexComments < books[indexBooklist].comments.length; indexComments++) {
      let commentsName = books[indexBooklist].comments[indexComments].name;
      let commentsComment = books[indexBooklist].comments[indexComments].comment;
      bookCommentsRef.innerHTML += getCommentsTemplate(commentsName, commentsComment);
    }
    highlightedBook(indexBooklist);
  }
}

function highlightedBook(indexBooklist) {
  let highlightImage = document.getElementById(`bookHighlight${indexBooklist}`);
  let indexHighlight = document.getElementById(`counterLikes${indexBooklist}`);
  if (books[indexBooklist].liked) {
    highlightImage.src = "assets/icons/002-lieblings-1.png";
    indexHighlight.innerHTML = "";
    indexHighlight.innerHTML += `${books[indexBooklist].likes}`;
  } if (!books[indexBooklist].liked) {
    indexHighlight.innerHTML = "";
    indexHighlight.innerHTML += `${books[indexBooklist].likes}`;
  }
}

function changeHighlight(indexBooklist) {
  let highlightImage = document.getElementById(`bookHighlight${indexBooklist}`);
  if (books[indexBooklist].liked) {
    books[indexBooklist].likes--;
    books[indexBooklist].liked = false;
  } else {
    highlightImage.src = "assets/icons/002-lieblings-1.png";
    books[indexBooklist].likes++;
    books[indexBooklist].liked = true;
  }
  renderBookList();
}

function addComment(indexBooklist) {
  let newNameRef = document.getElementById(`newName${indexBooklist}`);
  let newCommentRef = document.getElementById(`newComment${indexBooklist}`);
  newName = newNameRef.value.trim();
  newComment = newCommentRef.value.trim();
  if (newName === "" || newComment === "") {
    alert("Bitte ausfüllen!");
    return;
  }
  document.getElementById(`commentRef${indexBooklist}`).innerHTML += getAddCommentsTemplate(newName, newComment);
  books[indexBooklist].comments.push(newName, newComment);
  newCommentRef.value = "";
}