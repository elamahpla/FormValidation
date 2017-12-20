document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('zip').addEventListener('blur', validateZip);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);


function validateName() {
  const name = document.getElementById('name');
  const regName = /^[a-zA-Z]{2,15}$/;
  if(!regName.test(name.value)) {
    name.classList.add('is-invalid');
  } else {
    name.classList.remove('is-invalid');
  }
}

function validateZip() {
  const zip = document.getElementById('zip');
  const regZip = /^[0-9]{5}(-[0-9]{4})?$/;
  if(!regZip.test(zip.value)) {
    zip.classList.add('is-invalid');
  } else {
    zip.classList.remove('is-invalid');
  }
}

function validateEmail() {
  const email = document.getElementById('email');
  const regEmail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-z]{2,5})$/;
  if(!regEmail.test(email.value)) {
    email.classList.add('is-invalid');
  } else {
    email.classList.remove('is-invalid');
  }
}

function validatePhone() {
  const phone = document.getElementById('phone');
  const regPhone = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;
  if(!regPhone.test(phone.value)) {
    phone.classList.add('is-invalid');
  } else {
    phone.classList.remove('is-invalid');
  }
}