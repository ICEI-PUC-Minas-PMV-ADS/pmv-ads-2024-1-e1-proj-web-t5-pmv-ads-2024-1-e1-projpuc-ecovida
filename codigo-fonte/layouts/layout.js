const openNavBtn = document.getElementById('openNavBtn');
const navMain = document.getElementById('navMain');
const shadow = document.getElementById('shadow');
const logoutBtn = document.getElementById('logout_btn');



// Function to inject content and load page-specific script
function injectContentAndScript(contentElementId) {
  const contentElement = document.getElementById(contentElementId);

  if (contentElement) {
    const mainContent = document.getElementById('content');
    mainContent.innerHTML = contentElement.innerHTML;
    
  } else {
    console.error(`No content element found with ID: ${contentElementId}`);
  }
}


openNavBtn.addEventListener('click', function () {
  const navStyle = window.getComputedStyle(navMain);
  const navWidth = navStyle.getPropertyValue('width');
  if (parseInt(navWidth) === 0) {
    navMain.style.width = '244px';
    shadow.style.display = 'block'
  } else {
    navMain.style.width = '0px';
    shadow.style.display = 'none';
  }
});

logoutBtn.addEventListener('click', function () {
  localStorage.removeItem('user_logged')
   window.location.href = '/codigo-fonte/login'
});

shadow.addEventListener('click', function () {
  if (window.innerWidth <= 768) navMain.style.width = '0px';
  shadow.style.display = 'none';
});

function ajustNavBar() {
  const navStyle = window.getComputedStyle(navMain);
  const navWidth = navStyle.getPropertyValue('width');
  const shadowStyle = window.getComputedStyle(shadow);
  const shadowDisplay = shadowStyle.getPropertyValue('display');


  if (window.innerWidth >= 768) {
    if (parseInt(navWidth) === 0) {
      navMain.style.width = '244px';
    }
  } else {
    if (shadowDisplay == 'none') {
      navMain.style.width = '0px';
    }
  }






}

window.onresize = ajustNavBar


// Inject content and load the page-specific script
injectContentAndScript('pageContent');
