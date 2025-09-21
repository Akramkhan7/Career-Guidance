const signUpForm = document.getElementById('signUpForm');
const signInForm = document.getElementById('signInForm');
const signInTab = document.getElementById('signInTab');
const signUpTab = document.getElementById('signUpTab');



signUpTab.addEventListener('click', () => {
  signUpForm.classList.remove('hidden');
  signInForm.classList.add('hidden');

  signUpTab.classList.add('text-purple-400', 'font-semibold');
  signUpTab.classList.remove('text-gray-400');

  signInTab.classList.add('text-gray-400');
  signInTab.classList.remove('text-purple-400', 'font-semibold');
});

signInTab.addEventListener('click', () => {
  signInForm.classList.remove('hidden');
  signUpForm.classList.add('hidden');


  signInTab.classList.add('text-purple-400', 'font-semibold');
  signInTab.classList.remove('text-gray-400');

  signUpTab.classList.add('text-gray-400');
  signUpTab.classList.remove('text-purple-400', 'font-semibold');
});

