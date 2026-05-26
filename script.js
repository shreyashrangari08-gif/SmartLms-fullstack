const allCourses = [];
const categories = [
    { name: "Google", video: "n_w4nL2HSqA" }, // Google Analytics
    { name: "Coursera", video: "jNQXAC9IVRw" }, // Data Science
    { name: "Microsoft", video: "d2J37ac9C80" }, // Azure
    { name: "AWS", video: "Q-pY7bI4J8E" },      // AWS Cloud
    { name: "EduSkills", video: "k2r55y67z89" }   // Skill Dev
];

// 5 categories * 10 courses each = 50 courses
categories.forEach(cat => {
    for (let i = 1; i <= 10; i++) {
        allCourses.push({
            id: allCourses.length + 1,
            title: `${cat.name} ${cat.name === 'Google' ? 'Data' : 'Expert'} Course ${i}`,
            platform: cat.name,
            videoId: cat.video // Category ka exact video
        });
    }
});

function render() {
    const grid = document.getElementById("courseGrid");
    grid.innerHTML = allCourses.map(c => {
        const isEnrolled = localStorage.getItem('enrolled_' + c.id);
        return `
            <div class="card">
                <h3>${c.title}</h3>
                <p>Platform: ${c.platform}</p>
                ${!isEnrolled ? 
                    `<button class="enroll-btn" onclick="enroll(${c.id})">Enroll Now</button>` : 
                    `<button class="learn-btn" onclick="openVideo('${c.videoId}')">Continue Learning</button>`
                }
            </div>
        `;
    }).join('');
}

function enroll(id) {
    localStorage.setItem('enrolled_' + id, 'true');
    alert("Successfully Enrolled!");
    render();
}

function openVideo(vId) {
    // Ye design ko stable rakhega
    const modal = document.createElement('div');
    modal.innerHTML = `
        <div style="position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.9); z-index:9999;">
            <button onclick="this.parentElement.parentElement.remove()" style="margin:20px; padding:10px;">Close</button>
            <iframe width="100%" height="80%" src="https://www.youtube.com/embed/${vId}"></iframe>
        </div>
    `;
    document.body.appendChild(modal);
}
render();
