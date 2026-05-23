const yearElement = document.querySelector('[data-year]');

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

const form = document.querySelector('[data-demo-form]');
const note = document.querySelector('[data-form-note]');

if (form && note) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    note.textContent = 'Demo quote request submitted. Connect this form to your preferred service.';
    form.reset();
  });
}
