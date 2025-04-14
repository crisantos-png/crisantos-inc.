
document.addEventListener('DOMContentLoaded', () => {
    // Initialize the current year for copyright
    document.getElementById('currentYear').textContent = new Date().getFullYear();

    // Mobile menu functionality
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when a link is clicked
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Skills tabs functionality
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanels = document.querySelectorAll('.tab-panel');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Deactivate all buttons and panels
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanels.forEach(panel => panel.classList.remove('active'));
            
            // Activate the clicked button and corresponding panel
            button.classList.add('active');
            const category = button.dataset.category;
            document.getElementById(category).classList.add('active');
        });
    });

    // Projects filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Deactivate all filter buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Activate the clicked filter button
            button.classList.add('active');
            
            const filter = button.dataset.filter;
            
            projectCards.forEach(card => {
                if (filter === 'all' || card.dataset.category.includes(filter)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Project modal functionality
    const projectModal = document.getElementById('projectModal');
    const modalBody = document.getElementById('modalBody');
    const closeModal = document.querySelector('.close-modal');
    const projectBtns = document.querySelectorAll('.project-btn');
    
    // Project data
    const projects = [
        {
            id: 1,
            title: "E-commerce Platform",
            description: "A fully functional online store with shopping cart, payment integration and user authentication.",
            image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&q=80",
            category: ["fullstack", "frontend"],
            technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
            liveUrl: "https://example.com",
            githubUrl: "https://github.com",
            detailedDescription: "A comprehensive e-commerce solution featuring product browsing, cart functionality, user reviews, and secure payment processing.",
            challenges: "Implementing real-time inventory tracking and ensuring a seamless checkout experience across different payment methods.",
            solutions: "Leveraged WebSockets for real-time inventory updates and built a modular payment processing system that handles multiple payment providers."
        },
        {
            id: 2,
            title: "Portfolio Website",
            description: "A personal portfolio showcasing my skills and projects with a modern design and smooth animations.",
            image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&q=80",
            category: ["frontend"],
            technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
            liveUrl: "https://example.com",
            githubUrl: "https://github.com",
            detailedDescription: "A sleek, responsive portfolio website with interactive elements, smooth transitions, and optimized performance.",
            challenges: "Creating a visually striking yet performant site with complex animations and responsive design across all devices.",
            solutions: "Utilized code-splitting, lazy loading, and optimized animations with Framer Motion to maintain smooth performance while preserving visual fidelity."
        },
        {
            id: 3,
            title: "Task Management App",
            description: "A productivity tool that helps users manage tasks, set deadlines and track progress.",
            image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
            category: ["fullstack", "mobile"],
            technologies: ["React Native", "Firebase", "Redux", "Express", "Node.js"],
            liveUrl: "https://example.com",
            githubUrl: "https://github.com",
            detailedDescription: "A cross-platform task management application with features like drag-and-drop organization, notifications, and collaborative task sharing.",
            challenges: "Ensuring consistent user experience across different platforms while maintaining offline functionality and data synchronization.",
            solutions: "Implemented a robust offline-first architecture with background synchronization and platform-specific UI adaptations to maintain native feel on each platform."
        },
        {
            id: 4,
            title: "Content Management System",
            description: "A custom CMS for managing digital content, user permissions and workflow automation.",
            image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80",
            category: ["backend", "fullstack"],
            technologies: ["Next.js", "PostgreSQL", "GraphQL", "AWS", "Docker"],
            liveUrl: "https://example.com",
            githubUrl: "https://github.com",
            detailedDescription: "An enterprise-grade content management system with workflow approval processes, role-based access control, and content versioning.",
            challenges: "Building a flexible system that accommodates various content types while maintaining security and performance at scale.",
            solutions: "Designed a modular architecture with pluggable content types and implemented efficient caching strategies coupled with a robust permission system."
        }
    ];
    
    // Open modal with project details
    projectBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const projectId = parseInt(btn.dataset.id);
            const project = projects.find(p => p.id === projectId);
            
            if (project) {
                modalBody.innerHTML = `
                    <div class="modal-image">
                        <img src="${project.image}" alt="${project.title}">
                    </div>
                    <div class="modal-details" style="padding: 2rem;">
                        <h3 style="font-size: 1.75rem; margin-bottom: 1rem;">${project.title}</h3>
                        <p style="margin-bottom: 1.5rem;">${project.description}</p>
                        
                        <div style="margin-bottom: 1.5rem;">
                            <h4 style="font-size: 1.25rem; margin-bottom: 0.5rem;">Project Overview</h4>
                            <p>${project.detailedDescription}</p>
                        </div>
                        
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 1.5rem;">
                            <div>
                                <h4 style="font-size: 1.25rem; margin-bottom: 0.5rem;">Challenges</h4>
                                <p>${project.challenges}</p>
                            </div>
                            <div>
                                <h4 style="font-size: 1.25rem; margin-bottom: 0.5rem;">Solutions</h4>
                                <p>${project.solutions}</p>
                            </div>
                        </div>
                        
                        <div style="margin-bottom: 1.5rem;">
                            <h4 style="font-size: 1.25rem; margin-bottom: 0.5rem;">Technologies Used</h4>
                            <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                                ${project.technologies.map(tech => `<span class="tag">${tech}</span>`).join('')}
                            </div>
                        </div>
                        
                        <div style="display: flex; gap: 1rem;">
                            ${project.liveUrl ? 
                                `<a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="display: inline-flex; align-items: center; gap: 0.5rem;">
                                    <i class="fas fa-external-link-alt"></i> Visit Live
                                </a>` : ''
                            }
                            ${project.githubUrl ? 
                                `<a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline" style="display: inline-flex; align-items: center; gap: 0.5rem;">
                                    <i class="fab fa-github"></i> View Code
                                </a>` : ''
                            }
                        </div>
                    </div>
                `;
                
                projectModal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        });
    });
    
    // Close modal
    closeModal.addEventListener('click', () => {
        projectModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    // Close modal when clicking outside of content
    window.addEventListener('click', (e) => {
        if (e.target === projectModal) {
            projectModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    const submitText = document.getElementById('submitText');
    const submittingText = document.getElementById('submittingText');
    const toast = document.getElementById('toast');
    
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Disable the submit button and show loading state
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        submitBtn.disabled = true;
        submitText.style.display = 'none';
        submittingText.style.display = 'block';
        
        const formData = new FormData(contactForm);
        
        try {
            const response = await fetch('/submit-contact', {
                method: 'POST',
                body: formData
            });
            
            if (response.ok) {
                // Show success toast
                showToast('success', 'Message sent successfully!');
                contactForm.reset();
            } else {
                // Show error toast
                showToast('error', 'Failed to send message. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            showToast('error', 'An error occurred. Please try again.');
        } finally {
            // Re-enable the submit button and restore original text
            submitBtn.disabled = false;
            submitText.style.display = 'block';
            submittingText.style.display = 'none';
        }
    });
    
    // Toast notification function
    function showToast(type, message) {
        const toastIcon = document.querySelector('.toast-icon');
        const toastMessage = document.querySelector('.toast-message');
        
        // Set icon and message based on type
        if (type === 'success') {
            toastIcon.className = 'fas fa-check-circle toast-icon success';
        } else {
            toastIcon.className = 'fas fa-exclamation-circle toast-icon error';
        }
        
        toastMessage.textContent = message;
        
        // Show toast
        toast.classList.add('show');
        
        // Hide toast after timeout
        setTimeout(() => {
            toast.classList.remove('show');
        }, 5000);
    }

    // Activate animation for skills progress bars when they come into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.width = entry.target.dataset.progress;
            }
        });
    }, { threshold: 0.1 });

    // Observe all progress bars
    document.querySelectorAll('.progress-fill').forEach(progressBar => {
        const width = progressBar.style.width;
        progressBar.style.width = '0';
        progressBar.dataset.progress = width;
        observer.observe(progressBar);
    });

    // Add scroll class to header when scrolled
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});
