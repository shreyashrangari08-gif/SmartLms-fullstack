const courses = [
  { id: 1, platform: "Infosys Springboard", course_name: "Python Fundamentals", category: "Programming" },
  { id: 2, platform: "Coursera", course_name: "Google Data Analytics", category: "Data Science" },
  { id: 3, platform: "EduSkills", course_name: "AWS Cloud Internship", category: "Cloud" },
  { id: 4, platform: "Microsoft", course_name: "Azure Fundamentals", category: "Cloud" },
  { id: 5, platform: "Google", course_name: "Cybersecurity Basics", category: "Security" }
];

function displayCourses(data) {
  const container = document.getElementById("courses");
  container.innerHTML = data.map(c => `
    <div class="card">
      <div class="card-header"><h3>${c.course_name}</h3></div>
      <div class="card-content">
        <p><strong>Platform:</strong> ${c.platform}</p>
        <span class="badge">${c.category}</span>
        <button onclick="alert('Enrolling in ${c.course_name}')">Start Learning</button>
      </div>
    </div>
  `).join('');
}

function filterCourses() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const filtered = courses.filter(c => c.course_name.toLowerCase().includes(input));
  displayCourses(filtered);
}

// Initial Load
displayCourses(courses);
