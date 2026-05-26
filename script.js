const courseData = [
    { cat: "Google", list: ["Google Data Analytics", "Google Cybersecurity", "Google UX Design", "Google Digital Marketing & E-commerce", "Google IT Support", "Google Project Management", "Google Advanced Data Analytics", "Google Business Intelligence", "Google AI Essentials", "Google Prompting Essentials"] },
    { cat: "Coursera", list: ["Machine Learning Specialization", "Python for Everybody", "Google Data Analytics Professional Certificate", "IBM Data Science Professional Certificate", "Deep Learning Specialization", "Meta Front-End Developer Professional Certificate", "Introduction to Artificial Intelligence (AI)", "Financial Markets", "English for Career Development", "Cloud Computing Basics"] },
    { cat: "Microsoft", list: ["Azure Fundamentals (AZ-900)", "AI Fundamentals (AI-900)", "Power BI Data Analyst", "Microsoft Security Fundamentals", "Azure AI Engineer Associate", "Microsoft 365 Fundamentals", "Azure Administrator Associate", "GitHub Foundations", "NET Full Stack Development", "Power Platform Fundamentals"] },
    { cat: "AWS", list: ["AWS Cloud Practitioner Essentials", "AWS Solutions Architect Associate", "AWS Machine Learning Foundations", "Introduction to Generative AI", "AWS Security Fundamentals", "AWS Data Analytics Fundamentals", "Developing on AWS", "AWS DevOps Engineer", "AWS Networking Basics", "Serverless Development with AWS Lambda"] },
    { cat: "Eduskill", list: ["AI-ML Virtual Internship", "Cybersecurity Virtual Internship", "Cloud Computing Internship", "Data Analytics Internship", "Salesforce Developer Virtual Internship", "Android Developer Internship", "AWS Cloud Virtual Internship", "Palo Alto Cybersecurity Internship", "Robotic Process Automation Internship", "Full Stack Web Development Internship"] }
];

const allCourses = [];
courseData.forEach(c => c.list.forEach((name, i) => allCourses.push({ id: allCourses.length + 1, title: name, platform: c.cat, video: "dQw4w9WgXcQ" })));

function render() {
    const grid = document.getElementById("courseGrid");
    grid.innerHTML = allCourses.map(c => `
        <div class="card">
            <h3>${c.title}</h3>
            <p><strong>Platform:</strong> ${c.platform}</p>
            ${localStorage.getItem('enrolled_'+c.id) ? 
                `<button class="learn-btn" onclick="openModule(${c.id})">Continue Learning</button>` : 
                `<button class="enroll-btn" onclick="enroll(${c.id})">Enroll Now</button>`}
        </div>
    `).join('');
}

function enroll(id) { localStorage.setItem('enrolled_'+id, 'true'); render(); alert("Successfully Enrolled!"); }

function openModule(id) {
    const modal = document.createElement('div');
    modal.className = "modal";
    modal.innerHTML = `
        <div class="modal-content">
            <button onclick="this.parentElement.parentElement.remove()">Close</button>
            <h2>Course Content</h2>
            <iframe width="100%" height="300" src="https://www.youtube.com/embed/dQw4w9WgXcQ"></iframe>
            <div class="reading"><h3>Reading Material</h3><p>Detailed notes for this course...</p></div>
            <button onclick="startQuiz(${id})">Start Assessment</button>
        </div>
    `;
    document.body.appendChild(modal);
}

function startQuiz(id) {
    alert("Assessment: What is the main goal of this course?");
    if(confirm("Submit Assessment?")) { alert("Passed! Certificate Generated for Course " + id); }
}

render();
