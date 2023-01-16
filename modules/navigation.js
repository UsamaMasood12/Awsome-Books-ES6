const listSection = document.querySelector('#list');
const addNewSection = document.querySelector('#add-new');
const contactSection = document.querySelector('#contact');

export const showListSection = () => {
  listSection.style.display = 'block';
  addNewSection.style.display = 'none';
  contactSection.style.display = 'none';
};

export const showAddNew = () => {
  addNewSection.style.display = 'block';
  listSection.style.display = 'none';
  contactSection.style.display = 'none';
};

export const showContact = () => {
  contactSection.style.display = 'block';
  addNewSection.style.display = 'none';
  listSection.style.display = 'none';
};
