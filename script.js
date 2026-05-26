const allCourses = [
    { title: "Google Data Analytics", desc: "Professional Certificate by Google", cat: "Google" },
    { title: "Google Cybersecurity", desc: "Security Operations & Networks", cat: "Google" },
    { title: "Azure Fundamentals", desc: "AZ-900 Microsoft Cloud", cat: "Azure" },
    { title: "AWS Solutions Architect", desc: "Cloud Infrastructure Specialist", cat: "AWS" },
    { title: "Infosys Springboard: Java", desc: "Enterprise App Development", cat: "Google" },
    { title: "Microsoft Power BI", desc: "Business Intelligence Tools", cat: "Azure" }
    // Yahan apne 500 courses ki list add karte jao...
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
                <button onclick="alert('Started: ${c.title}')">Start Learning</button>
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
