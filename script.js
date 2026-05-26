const allCourses = [
    { title: "Google Data Analytics", desc: "Professional Certificate by Google", cat: "Google" },
    { title: "Google Cybersecurity", desc: "Security Operations & Networks", cat: "Google" },
    { title: "Azure Fundamentals", desc: "AZ-900 Microsoft Cloud", cat: "Azure" },
    { title: "AWS Solutions Architect", desc: "Cloud Infrastructure Specialist", cat: "AWS" },
    { title: "Infosys Springboard: Java", desc: "Enterprise App Development", cat: "Google" },
    { title: "Microsoft Power BI", desc: "Business Intelligence Tools", cat: "Azure" },
    { title: "Google Project Management", desc: "Planning & Execution", cat: "Google" },
    { title: "Azure Data Engineer", desc: "Big Data & Storage", cat: "Azure" },
    { title: "AWS Developer Associate", desc: "Coding on Cloud", cat: "AWS" },
    { title: "Python Basics", desc: "Programming Foundation", cat: "Google" },
    { title: "React Development", desc: "Frontend Masterclass", cat: "Google" },
    { title: "Docker & Kubernetes", desc: "Container Management", cat: "AWS" },
    { title: "Azure AI Engineer", desc: "AI Solutions", cat: "Azure" },
    { title: "Google UX Design", desc: "Wireframing & UI", cat: "Google" },
    { title: "Advanced SQL", desc: "Database Querying", cat: "Azure" },
    { title: "DevOps Pipeline", desc: "Automation Tools", cat: "AWS" },
    { title: "Machine Learning", desc: "Data Modeling", cat: "Google" },
    { title: "Cloud Security", desc: "Protection Strategies", cat: "AWS" },
    // ... Agar aapko aise hi 500 chahiye, toh bas isi format mein niche aur add karte jao.
];

function renderCourses(filter = 'All') {
    const grid = document.getElementById('courseGrid');
    const filtered = filter === 'All' ? allCourses : allCourses.filter(c => c.cat === filter);
    
    grid.innerHTML = filtered.map(c => `
        <div class="card">
            <div class="card-header ${c.cat.toLowerCase()}">
                <h3>${c.title}</h3>
            </div>
            <div class="card-content">
                <p>${c.desc}</p>
                <button onclick="alert('Enrolled in ${c.title}')">Start Learning</button>
            </div>
        </div>
    `).join('');
}

function filterCourses() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        let title = card.querySelector('h3').innerText.toLowerCase();
        card.style.display = title.includes(input) ? "" : "none";
    });
}

window.onload = () => renderCourses();
