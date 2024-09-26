// Add event listeners to navigation links
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach((link) => {
  link.addEventListener('mouseover', () => {
    link.style.color = '#141312'; // Change link color on hover
    link.style.transition = 'color 0.5s ease-in-out'; // Add transition effect
  });

  link.addEventListener('mouseout', () => {
    link.style.color = '#87CEEB'; // Reset link color on mouseout
  });

  link.addEventListener('click', () => {
    // Add a fade-out effect to the current page
    document.body.style.opacity = 0;
    setTimeout(() => {
      window.location.href = link.href;
    }, 500);
  });
});

// Add animation to hero section on homepage
const heroSection = document.querySelector('.hero');

heroSection.addEventListener('mouseover', () => {
  heroSection.style.transform = 'scale(1.1)'; // Scale up on hover
  heroSection.style.transition = 'transform 0.5s ease-in-out'; // Add transition effect
});

heroSection.addEventListener('mouseout', () => {
  heroSection.style.transform = 'scale(1)'; // Reset scale on mouseout
});

// Add animation to profile picture on profile page
const profilePicture = document.querySelector('.profile-picture');

profilePicture.addEventListener('mouseover', () => {
  profilePicture.style.transform = 'scale(1.1)'; // Scale up on hover
  profilePicture.style.transition = 'transform 0.5s ease-in-out'; // Add transition effect
});

profilePicture.addEventListener('mouseout', () => {
  profilePicture.style.transform = 'scale(1)'; // Reset scale on mouseout
});

// Add animation to description sections
const descriptionSections = document.querySelectorAll('.description');

descriptionSections.forEach((section) => {
  section.addEventListener('mouseover', () => {
    section.style.transform = 'translateY(-10px)'; // Move up on hover
    section.style.transition = 'transform 0.5s ease-in-out'; // Add transition effect
  });

  section.addEventListener('mouseout', () => {
    section.style.transform = 'translateY(0)'; // Reset position on mouseout
  });
});

// Add a loading animation to the page
const loader = document.querySelector('.loader');

window.addEventListener('load', () => {
  loader.style.opacity = 0;
  setTimeout(() => {
    loader.style.display = 'none';
  }, 1000);
});

document.addEventListener('DOMContentLoaded', () => {
  const townImages = document.querySelectorAll('.townimage-gallery img');
  
  townImages.forEach((img) => {
      img.addEventListener('click', () => {
          img.classList.add('bounce');
          setTimeout(() => {
              img.classList.remove('bounce');
          }, 1000);
      });
  });
});

/* Animasi tambahan di CSS */
.bounce {
  animation: imageBounce 0.5s ease-in-out;
}

@keyframes imageBounce {
  0% {
      transform: translateY(0);
  }
  50% {
      transform: translateY(-20px);
  }
  100% {
      transform: translateY(0);
  }
}
