const allCourses = [];
for (let i = 1; i <= 200; i++) {
    allCourses.push({ id: i, title: "Course " + i, platform: "Google", videoId: "dQw4w9WgXcQ" });
}

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
    render();
}

function openVideo(vId) {
    // Ye video ko current page par hi dikhayega bina design bigade
    document.body.innerHTML += `<div id="vPlayer" style="position:fixed; top:0; left:0; width:100%; height:100%; background:black;">
        <button onclick="document.getElementById('vPlayer').remove()" style="color:white; z-index:99;">Close</button>
        <iframe width="100%" height="90%" src="https://www.youtube.com/embed/${vId}"></iframe>
    </div>`;
}

render();
