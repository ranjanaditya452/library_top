const myLibrary = [];
let a=0;

function Book(title,author,pages,readstat){
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
{ 
  
}