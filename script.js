document.addEventListener("DOMContentLoaded", () => {
    // services list
    const services = [
        { category: 'web', icon: 'laptop-code', title: 'Custom Software Development', description: 'Tailored web solutions that scale.' },
        { category: 'cloud', icon: 'cloud', title: 'Cloud & DevOps', description: 'Deploy faster with modern cloud infrastructure.' },
        { category: 'web', icon: 'lock', title: 'Security & Compliance', description: 'Enterprise-grade security and privacy.' },
        { category: 'web', icon: 'gears', title: 'System Integration', description: 'APIs and integrations made seamless.' },
        { category: 'mobile', icon: 'mobile-screen-button', title: 'Mobile App Development', description: 'iOS and Android apps built to perform.' },
        { category: 'data', icon: 'chart-simple', title: 'Data Analytics & AI', description: 'Make informed decisions with insights.' }
    ];

    const servicesContainer = document.getElementById('services-list');

    function renderServices(filter) {
        servicesContainer.innerHTML = '';
        services.filter(service => filter === 'all' || service.category === filter)
            .forEach(service => {
                const el = document.createElement('div');
                el.className = 'feature-item fade-in';
                el.innerHTML = `
              <div class="icon"><i class="fa-solid fa-${service.icon} fa-2xl"></i></div>
              <h3>${service.title}</h3>
              <p>${service.description}</p>
            `;
                servicesContainer.appendChild(el);
                setTimeout(() => el.classList.add('visible'), 50);
            });
    }

    renderServices('all');

    document.querySelectorAll('.filter-buttons button').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelector('.filter-buttons button.active')?.classList.remove('active');
            btn.classList.add('active');
            renderServices(btn.dataset.filter);
        });
    });

    const faders = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('visible');
        });
    }, { threshold: 0.1 });

    faders.forEach(el => observer.observe(el));
});