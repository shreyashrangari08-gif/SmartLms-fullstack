const categories = ["Google", "Azure", "AWS", "DataScience", "CyberSecurity"];
const allCourses = [];

// 500+ courses ka logic (Categories ke hisaab se)
for (let i = 1; i <= 500; i++) {
    let cat = categories[i % categories.length];
    allCourses.push({
        title: cat + " Track " + i,
        desc: "Professional " + cat + " Certification Program " + i,
        cat: cat
    });
}

function renderCourses(filter = 'All') {
    const grid = document.getElementById('courseGrid');
    const filtered = filter === 'All' ? allCourses : allCourses.filter(c => c.cat === filter);
    
    grid.innerHTML = filtered.map(c => `
        <div class="card">
            <div class="card-header ${c.cat === 'Google' ? 'bg-google' : c.cat === 'Azure' ? 'bg-azure' : 'bg-aws'}">
                <h3>${c.title}</h3>
            </div>
            <div class="card-content">
                <p>${c.desc}</p>
                <button onclick="alert('Enrolling in ${c.title}')">Start Learning</button>
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
