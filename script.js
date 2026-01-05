// Particles animation
const canvas = document.getElementById('particles-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Particle {
    constructor() {
        this.reset();
        this.y = Math.random() * canvas.height;
        this.opacity = Math.random() * 0.5 + 0.2;
    }

    reset() {
        this.x = Math.random() * canvas.width;
        this.y = -10;
        this.speed = Math.random() * 1 + 0.5;
        this.radius = Math.random() * 2 + 1;
        this.opacity = Math.random() * 0.5 + 0.2;
        
        // Random colors - gold tones and white
        const colors = ['#FFD700', '#D4AF37', '#FFFFFF', '#FFF8E7'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
    }

    update() {
        this.y += this.speed;
        
        // Gentle floating motion
        this.x += Math.sin(this.y * 0.01) * 0.5;
        
        if (this.y > canvas.height) {
            this.reset();
        }
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.fill();
        ctx.globalAlpha = 1;
    }
}

// Create particles
const particles = [];
const particleCount = 50;

for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
}

// Animation loop
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particles.forEach(particle => {
        particle.update();
        particle.draw();
    });
    
    requestAnimationFrame(animate);
}

animate();

// Handle window resize
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Add smooth scroll reveal animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all detail cards
document.querySelectorAll('.detail-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `all 0.6s ease ${index * 0.1}s`;
    observer.observe(card);
});

// Add sparkle effect on hover for photo
const photoFrame = document.querySelector('.photo-frame');
if (photoFrame) {
    photoFrame.addEventListener('mouseenter', () => {
        photoFrame.style.transform = 'scale(1.02)';
        photoFrame.style.transition = 'transform 0.5s ease';
    });
    
    photoFrame.addEventListener('mouseleave', () => {
        photoFrame.style.transform = 'scale(1)';
    });
}

// Add click to copy phone number
const phoneDetail = document.querySelector('.detail-card:nth-child(3)');
if (phoneDetail) {
    phoneDetail.style.cursor = 'pointer';
    phoneDetail.addEventListener('click', () => {
        const phoneNumber = '0935778251';
        navigator.clipboard.writeText(phoneNumber).then(() => {
            // Show copied message
            const originalText = phoneDetail.querySelector('.detail-text').textContent;
            phoneDetail.querySelector('.detail-text').textContent = 'Đã sao chép!';
            
            setTimeout(() => {
                phoneDetail.querySelector('.detail-text').textContent = originalText;
            }, 2000);
        });
    });
}

// Add parallax effect to floating elements
document.addEventListener('mousemove', (e) => {
    const floatingElements = document.querySelectorAll('.float-element');
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    floatingElements.forEach((element, index) => {
        const speed = (index + 1) * 0.02;
        const x = (mouseX - 0.5) * 50 * speed;
        const y = (mouseY - 0.5) * 50 * speed;
        element.style.transform = `translate(${x}px, ${y}px)`;
    });
});

console.log('🎓 Graduation Invitation - Ready!');

