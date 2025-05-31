// Dark/Light mode toggle
const container = document.querySelector('.container');
const headerSection = document.querySelector('.header_section');
const icon2 = document.querySelector('.icon2');

icon2.addEventListener('click', () => {
    container.classList.toggle('dark-mode');
    document.body.classList.toggle('dark-mode');
    
    // Toggle between moon and sun icon
    if (container.classList.contains('dark-mode')) {
        icon2.classList.remove('fa-moon');
        icon2.classList.add('fa-sun');
    } else {
        icon2.classList.remove('fa-sun');
        icon2.classList.add('fa-moon');
    }
});

// Profile image hover effect
const profileImage = document.querySelector('.image_section img');
profileImage.addEventListener('mouseover', () => {
    profileImage.style.transform = 'scale(1.1)';
    profileImage.style.transition = 'transform 0.3s ease';
});

profileImage.addEventListener('mouseout', () => {
    profileImage.style.transform = 'scale(1)';
});

// Dynamic greeting based on time
const greeting = document.createElement('p');
greeting.className = 'greeting';
document.querySelector('.info_section').prepend(greeting);

function updateGreeting() {
    const hour = new Date().getHours();
    let message = '';
    
    if (hour < 12) message = 'Good Morning!';
    else if (hour < 18) message = 'Good Afternoon!';
    else message = 'Good Evening!';
    
    greeting.textContent = message;
}

updateGreeting();
setInterval(updateGreeting, 60000); // Update every minute

// Profile views counter
let views = 0;
const viewsCounter = document.createElement('p');
viewsCounter.className = 'views-counter';
viewsCounter.textContent = 'Profile Views: 0';
document.querySelector('.info_section').appendChild(viewsCounter);

// Simulate profile views
setInterval(() => {
    views += Math.floor(Math.random() * 3);
    viewsCounter.textContent = `Profile Views: ${views}`;
}, 5000); 