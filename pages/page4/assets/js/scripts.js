function addToOrder() {
    const choice = parseInt(document.getElementById("choice").value);
     
    function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
  
    if (name === '') {
      alert('Please enter your name.');
      return false;
    }
  
    if (email === '') {
      alert('Please enter your email.');
      return false;
    } else {
      var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return false;
      }
    }
  
    if (message === '') {
      alert('Please enter your message.');
      return false;
    }
  
    // Form submission successful
    window.alert('Thank you for submitting!');
    return true;
  }
}