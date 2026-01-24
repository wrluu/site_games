//задание1
const header = document.querySelector('#header');
const toggleButton = document.querySelector('#toggleButton');

toggleButton.addEventListener('click', () => {
  if (header.style.display === 'none') {
    header.style.display = 'block';
    toggleButton.textContent = 'Скрыть';
  } else {
    header.style.display = 'none';
    toggleButton.textContent = 'Показать';
  }
});

//задание2
const text = document.querySelector('#text');
const changeColorButton = document.querySelector('#changeColorButton');

changeColorButton.addEventListener('click', () => {
  text.style.color = 'red';
});

//задание3
const title = document.querySelector('#title');
const changeTextButton = document.querySelector('#changeTextButton');

changeTextButton.addEventListener('click', () => {
  title.textContent = 'Привет, мир!';
});

//задание4
const changeTextButton4 = document.querySelector('#changeTextButton4');

changeTextButton4.addEventListener('click', () => {
  const descriptions = document.querySelectorAll('.description');
  descriptions.forEach(description => {
    description.textContent = 'Измененный текст';
  });
});

//задание5
const changeTextButton5 = document.querySelector('#changeTextButton5');

changeTextButton5.addEventListener('click', () => {
  const descriptions = document.querySelectorAll('.description');
  descriptions.forEach((description, index) => {
    description.textContent = `Новый текст ${index + 1}`;
  });
});

//задание6
const addElementButton = document.querySelector('#addElementButton');

addElementButton.addEventListener('click', () => {
  const newParagraph = document.createElement('p');
  newParagraph.textContent = 'Новый абзац';
  document.body.appendChild(newParagraph);
});

//задание7
const removeElementButton = document.querySelector('#removeElementButton');

removeElementButton.addEventListener('click', () => {
  const firstDescription = document.querySelector('.description');
  if (firstDescription) {
    firstDescription.remove();
  }
});
