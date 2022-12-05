import {
  sectionList, sectionAdd, sectionContact, navList, navAdd, navContact,
} from './variables.js';

function showList() {
  sectionList.classList.remove('hide');
  sectionAdd.classList.add('hide');
  sectionContact.classList.add('hide');
  navList.classList.add('blue');
  navAdd.classList.remove('blue');
  navContact.classList.remove('blue');
}
function showAdd() {
  sectionList.classList.add('hide');
  sectionAdd.classList.remove('hide');
  sectionContact.classList.add('hide');
  navList.classList.remove('blue');
  navAdd.classList.add('blue');
  navContact.classList.remove('blue');
}
function showContact() {
  sectionList.classList.add('hide');
  sectionAdd.classList.add('hide');
  sectionContact.classList.remove('hide');
  navList.classList.remove('blue');
  navAdd.classList.remove('blue');
  navContact.classList.add('blue');
}
export { showList, showAdd, showContact };