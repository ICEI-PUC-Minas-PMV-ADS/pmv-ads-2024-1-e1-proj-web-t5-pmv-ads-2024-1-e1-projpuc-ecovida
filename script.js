 // Save this as auth.js

 document.addEventListener("DOMContentLoaded", function() {
  // Function to check if the user is logged in
  function checkLoginStatus() {
      // Retrieve the user_logged object from local storage
      const userLogged = JSON.parse(localStorage.getItem('user_logged'));
      
      // Check if user_logged object exists and has valid properties
  return userLogged ? true : false
  }

  // Function to handle redirection if not logged in
  function handleAuthentication() {
      if (!checkLoginStatus()) {
          window.location.href = '/puc-eco-vida/login'; // Redirect to login page
      } 
  }

  // Call the authentication handler
  handleAuthentication();
});
