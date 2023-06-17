//header -> when logged in show Hi, (customer name). or Hi, Buddy! if not logged in
let user = { name: "Johny" }; //will fetch actual user from server later

if (user) {
  document.querySelector(".ab-auth-button span").innerHTML = `Hi, ${user.name}`;
}

//footer contact us form
const formUserName = document.querySelector('#senderName');
const eMail = document.querySelector('#eMail');
const msg = document.querySelector('#msg');
const agreedPolicy = document.querySelector('#checkedRequered');
const checkmarkWarning = document.querySelector('#checkmark-warning');

const footerButton = document.querySelector('#sendMsg');
footerButton.onclick = (event) => {
  event.preventDefault();
  if(!agreedPolicy.checked){
    checkmarkWarning.innerHTML = 'In order to submit your message, you need to accept our privacy policy and terms of conditions';
    checkmarkWarning.style.color = '#FF0000';
  } else {
    checkmarkWarning.innerHTML = 'I have read and agree to the Privacy Policy and Terms of Service';
    checkmarkWarning.style.color = '#59219e';
  }
  console.log({
    'sender': senderName.value,
    'e-mail': eMail.value,
    'message': msg.value,
    'Agreed to policy': agreedPolicy.checked
  });
};


