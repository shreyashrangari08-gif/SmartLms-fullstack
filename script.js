const allCourses = [
    { title: "Google Data Analytics", desc: "Professional Certificate", cat: "Google" },
    { title: "Google Cybersecurity", desc: "Security Fundamentals", cat: "Google" },
    { title: "Azure Fundamentals", desc: "Microsoft Azure (AZ-900)", cat: "Azure" },
    { title: "Azure Data Engineer", desc: "Big Data & Storage", cat: "Azure" },
    { title: "Google Digital UX", desc: "Design Foundation", cat: "Google" },
    { title: "Microsoft Power BI", desc: "Data Visualization", cat: "Azure" }
];

function renderCourses(filter = 'All') {
    const grid = document.getElementById('courseGrid');
    const filtered = filter === 'All' ? allCourses : allCourses.filter(c => c.cat === filter);
    
    grid.innerHTML = filtered.map(c => `
        <div class="card">
            <div class="card-header ${c.cat === 'Google' ? 'bg-google' : 'bg-azure'}">
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
