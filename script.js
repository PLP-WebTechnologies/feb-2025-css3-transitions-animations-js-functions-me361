// Get button and body
const themeBtn = document.getElementById('themeBtn');
const body = document.body;

// Load saved theme from localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  body.classList.add(savedTheme);
} else {
  // Default to light theme if no theme is saved
  body.classList.add('light');
}

// Function to toggle theme
function toggleTheme() {
  if (body.classList.contains('dark')) {
    body.classList.replace('dark', 'light');
    localStorage.setItem('theme', 'light');
  } else {
    body.classList.replace('light', 'dark');
    localStorage.setItem('theme', 'dark');
  }

  // Trigger button animation
  themeBtn.classList.add('animate');
  setTimeout(() => themeBtn.classList.remove('animate'), 400);
}

// Attach click event
themeBtn.addEventListener('click', toggleTheme);
