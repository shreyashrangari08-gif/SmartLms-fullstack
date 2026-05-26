// Clean Data Structure
const courses = [
  { id: 1, platform: "Infosys Springboard", course_name: "Python Fundamentals", category: "Programming" },
  { id: 2, platform: "Coursera", course_name: "Google Data Analytics", category: "Data Science" },
  { id: 3, platform: "EduSkills", course_name: "AWS Cloud Internship", category: "Cloud" },
  { id: 4, platform: "Microsoft", course_name: "Azure Fundamentals", category: "Cloud" },
  { id: 5, platform: "Google", course_name: "Cybersecurity Basics", category: "Security" }
];

// Function to render
function displayCourses(data) {
  const container = document.getElementById("courses");
  if (!container) return; // Error handle
  
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

// Initial Call
displayCourses(courses);
