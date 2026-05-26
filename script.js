const allCourses = [
    { id: 1, title: "Google Data Analytics", platform: "Google", videoId: "dQw4w9WgXcQ" },
    { id: 2, title: "Azure Fundamentals", platform: "Microsoft", videoId: "jNQXAC9IVRw" },
    { id: 3, title: "AWS Solutions Architect", platform: "AWS", videoId: "Q-pY7bI4J8E" }
];

function enroll(id) {
    localStorage.setItem('enrolled_' + id, 'true');
    alert("We have successfully enrolled you in this course!");
    render();
}

function openCourse(id, videoId) {
    const modal = document.getElementById("courseModal");
    modal.style.display = "block";
    document.getElementById("playerArea").style.display = "block";
    document.getElementById("quizArea").style.display = "none";
    document.getElementById("assessmentBtn").style.display = "block";
    
    document.getElementById("playerArea").innerHTML = 
        `<iframe width="100%" height="400" src="https://www.youtube.com/embed/${videoId}" allowfullscreen></iframe>`;
}

function startAssessment() {
    document.getElementById("playerArea").style.display = "none";
    document.getElementById("assessmentBtn").style.display = "none";
    document.getElementById("quizArea").style.display = "block";
}

function finishAssessment() {
    alert("Congratulations! You have passed the assessment. Certificate Generated.");
    closeModal();
}

function closeModal() {
    document.getElementById("courseModal").style.display = "none";
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
                    `<button class="learn-btn" onclick="openCourse(${c.id}, '${c.videoId}')">Continue Learning</button>`
                }
            </div>
        `;
    }).join('');
}
render();
