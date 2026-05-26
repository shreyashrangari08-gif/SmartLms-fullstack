const allCourses = [];
const platforms = ["Google", "Microsoft", "AWS", "Infosys", "EduSkills", "Coursera"];
const subjects = ["Data Analytics", "Cloud Computing", "Cybersecurity", "Python Basics", "UX Design", "Machine Learning"];

// 200 courses ka data phir se generate ho gaya
for (let i = 1; i <= 200; i++) {
    allCourses.push({
        id: i,
        title: subjects[i % subjects.length] + " " + i,
        platform: platforms[i % platforms.length],
        desc: "Professional Certification Pathway " + i,
        videoId: "dQw4w9WgXcQ" 
    });
}

function render() {
    const grid = document.getElementById("courseGrid");
    grid.innerHTML = allCourses.map(c => {
        const isEnrolled = localStorage.getItem('enrolled_' + c.id);
        return `
            <div class="card">
                <h3>${c.title}</h3>
                <p>Platform: ${c.platform}</p>
                <p>${c.desc}</p>
                ${!isEnrolled ? 
                    `<button class="enroll-btn" onclick="enroll(${c.id})">Enroll Now</button>` : 
                    `<button class="learn-btn" onclick="openCourse(${c.id}, '${c.videoId}')">Continue Learning</button>`
                }
            </div>
        `;
    }).join('');
}

function enroll(id) {
    localStorage.setItem('enrolled_' + id, 'true');
    alert("We have successfully enrolled you in this course!");
    render();
}

function openCourse(id, videoId) {
    const modal = document.getElementById("courseModal");
    modal.style.display = "block";
    document.getElementById("playerArea").innerHTML = `<iframe width="100%" height="400" src="https://www.youtube.com/embed/${videoId}"></iframe>`;
}

function closeModal() { document.getElementById("courseModal").style.display = "none"; }

render();
