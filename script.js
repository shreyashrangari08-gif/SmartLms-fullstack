const allCourses = [
    { title: "Google Data Analytics", desc: "Professional Certificate" },
    { title: "Google Cybersecurity", desc: "Security Fundamentals" },
    { title: "Azure Fundamentals", desc: "Cloud Computing" },
    { title: "Python Basics", desc: "Programming Foundation" },
    { title: "Digital Marketing", desc: "SEO and Analytics" }
    // Aap yahan aur bhi courses add karte ja sakte hain
];

function renderCourses() {
    const grid = document.getElementById('courseGrid');
    grid.innerHTML = allCourses.map(course => `
        <div class="card">
            <h3>${course.title}</h3>
            <p>${course.desc}</p>
            <button onclick="enroll('${course.title}')">Start Learning</button>
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

function enroll(courseName) {
    alert("Congratulations! Aapne " + courseName + " mein enroll kar liya hai.");
}

window.onload = renderCourses;
