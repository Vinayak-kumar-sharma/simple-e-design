document.addEventListener('DOMContentLoaded', () => {
    showPage('home'); // Display home page on load
  });
  
  function showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
  
    // Show the selected page
    document.getElementById(pageId).classList.add('active');
  }
  
  // Handle form submission (Contact Page)
  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your inquiry!');
    showPage('home'); // Redirect back to the home page or thank you message
  });
  