const addBtn = document.querySelector('.add_button');
const title = document.getElementById('title');
const author = document.getElementById('author');
const container = document.querySelector('.container');
const navList = document.querySelector('#nav_list');
const navAdd = document.querySelector('#nav_add');
const navContact = document.querySelector('#nav_contact');
const sectionList = document.querySelector('#list');
const sectionAdd = document.querySelector('#add_new');
const sectionContact = document.querySelector('#contact');
class CreateObjectBook {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}
export {
  addBtn, title, author, container, navList, navAdd,
  navContact, sectionList, sectionAdd, sectionContact, CreateObjectBook,
};