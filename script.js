const courses = [
    { title: "Google Data Analytics", desc: "Learn SQL and Tableau" },
    { title: "Google Cybersecurity", desc: "Master Network Security" },
    { title: "Azure Fundamentals", desc: "Microsoft Cloud basics" },
    // Aise hi aap yahan 500 tak add kar sakte ho!
];

function loadCourses() {
    const grid = document.querySelector('.course-grid');
    grid.innerHTML = ""; // Purane cards hatayein
    courses.forEach(course => {
        grid.innerHTML += `
            <div class="card">
                <h3>${course.title}</h3>
                <p>${course.desc}</p>
                <button onclick="enroll('${course.title}')">Start Learning</button>
            </div>
        `;
    });
}

// Page load hote hi courses dikhayein
window.onload = loadCourses;
