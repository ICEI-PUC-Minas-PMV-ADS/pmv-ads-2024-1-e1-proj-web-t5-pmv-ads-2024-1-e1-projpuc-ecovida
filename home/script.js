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
      } else {
          // Load the layout HTML
  fetch('../layouts/layout.html')
    .then(response => response.text())
    .then(layout => {
      document.body.innerHTML += layout;
    })
    .then(() => {
      // Ensure layout.js runs after the layout is loaded
      const layoutScript = document.createElement('script');
      layoutScript.src = '../layouts/layout.js';
      layoutScript.onload = () => {
        // Load page.js as the last component
        const pageScript = document.createElement('script');
        pageScript.src = 'script.js';
        document.body.appendChild(pageScript);
      };
      document.body.appendChild(layoutScript);
    })
    .catch(error => console.error('Error loading layout:', error));
      }
  }

  // Call the authentication handler
  handleAuthentication();
});
