// Data: 200+ Courses
const allCourses = [];
const platforms = ["Google", "Microsoft", "AWS", "Infosys", "Coursera", "EduSkills"];
const subjects = ["Data Analytics", "Cloud Computing", "Cybersecurity", "Python Basics", "UX Design", "Machine Learning"];

for (let i = 1; i <= 200; i++) {
    allCourses.push({
        id: i,
        title: subjects[i % subjects.length] + " " + i,
        platform: platforms[i % platforms.length],
        desc: "Professional Certification Pathway " + i,
        link: "https://www.youtube.com" // Yahan apna YouTube link daalein
    });
}

function render(data) {
    const grid = document.getElementById("courseGrid");
    if (!grid) return;
    
    grid.innerHTML = data.map(c => `
        <div class="card">
            <div class="card-header"><h4>${c.title}</h4></div>
            <div class="card-content">
                <p><strong>Platform:</strong> ${c.platform}</p>
                <p>${c.desc}</p>
                <button onclick="window.open('${c.link}', '_blank')">Start Learning</button>
            </div>
        </div>
    `).join('');
}

// Filter function
function filterPlatform(platform) {
    if(platform === 'All') render(allCourses);
    else render(allCourses.filter(c => c.platform === platform));
}

render(allCourses);
