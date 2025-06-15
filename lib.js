const myLibrary = [];

function Book(id,title,author,pages,readstat){
if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
  this.id = id;
  this.title=title;
  this.author= author;
  this.pages=pages; 
  this.readstat=readstat;
  this.info= function(){
    return (this.title+","+this.author+","+this.pages+","+this.readstat);
  }
}


function addBooks(title,author,pages,readstat)
{ let id= crypto.randomUUID();
  const newBook = new Book(id,title,author,pages,readstat);
  myLibrary.push(newBook);
}

addBooks("hs","sd",2,"no");
addBooks("hse","sd",2,"no");
addBooks("hs2","sd",2,"no");

let cardarea = document.querySelector(".cardArea");
for(let i=0;i<myLibrary.length;i++)
{
    const card = document.createElement("div");
    card.classList.add("card");
    card.textContent=myLibrary[i].info();
    cardarea.append(card);
}


function loopBook(){
  for (let book of myLibrary){
    console.log(book);
  }
}
loopBook();