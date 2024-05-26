const openNavBtn = document.getElementById('openNavBtn');
const navMain = document.getElementById('navMain');
const shadow = document.getElementById('shadow');


// Function to inject content and load page-specific script
function injectContentAndScript(contentElementId, scriptSrc) {
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
    navMain.style.width = '100px';
    shadow.style.display = 'block'
  } else {
    navMain.style.width = '0px';
    shadow.style.display = 'none';
  }
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
      navMain.style.width = '100px';
    }
  } else {
    if (shadowDisplay == 'none') {
      navMain.style.width = '0px';
    }
  }






}

window.onresize = ajustNavBar


// Inject content and load the page-specific script
injectContentAndScript('page-content');
