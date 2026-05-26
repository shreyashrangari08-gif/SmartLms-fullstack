const allCourses = [
    // Infosys Springboard
    { title: "Python Fundamentals", platform: "Infosys Springboard", desc: "Core Python Programming", cat: "Programming" },
    { title: "Java Enterprise", platform: "Infosys Springboard", desc: "Backend Development", cat: "Backend" },
    { title: "Data Structures", platform: "Infosys Springboard", desc: "Algorithms & Logic", cat: "Computer Science" },
    
    // Coursera
    { title: "Google Data Analytics", platform: "Coursera", desc: "Data Professional Cert", cat: "Data" },
    { title: "IBM Data Science", platform: "Coursera", desc: "Advanced AI & ML", cat: "AI" },
    { title: "Digital Marketing", platform: "Coursera", desc: "SEO & Social Media", cat: "Marketing" },

    // EduSkills
    { title: "AWS Cloud Internship", platform: "EduSkills", desc: "Hands-on AWS Training", cat: "Cloud" },
    { title: "Cybersecurity Ops", platform: "EduSkills", desc: "Network Defense", cat: "Security" },
    { title: "Blue Prism RPA", platform: "EduSkills", desc: "Automation Specialist", cat: "Robotics" },

    // Google
    { title: "Google Cybersecurity", platform: "Google", desc: "SOC Analyst Training", cat: "Security" },
    { title: "Cloud Digital Leader", platform: "Google", desc: "Google Cloud Basics", cat: "Cloud" },
    { title: "UX Design Specialization", platform: "Google", desc: "UI/UX Foundations", cat: "Design" },

    // Microsoft
    { title: "Azure Fundamentals (AZ-900)", platform: "Microsoft", desc: "Cloud Infrastructure", cat: "Cloud" },
    { title: "Power BI Data Analyst", platform: "Microsoft", desc: "Data Visualization", cat: "Data" },
    { title: "AI Fundamentals (AI-900)", platform: "Microsoft", desc: "Azure AI Services", cat: "AI" }
];

// 200 courses generator for testing (Optional)
for(let i=1; i<=185; i++) {
    allCourses.push({ title: "Module " + i, platform: "Google", desc: "Certification pathway", cat: "General" });
}

function renderCourses(data) {
    const grid = document.getElementById('courseGrid');
    grid.innerHTML = data.map(c => `
        <div class="card">
            <div class="card-header ${getPlatformClass(c.platform)}">
                <h3>${c.title}</h3>
            </div>
            <div class="card-content">
                <p><strong>Platform:</strong> ${c.platform}</p>
                <p>${c.desc}</p>
                <button onclick="alert('Starting ${c.title}...')">Learn Now</button>
            </div>
        </div>
    `).join('');
}

function getPlatformClass(platform) {
    if(platform.includes('Infosys')) return 'bg-infosys';
    if(platform === 'Google') return 'bg-google';
    if(platform === 'Microsoft') return 'bg-microsoft';
    if(platform === 'Coursera') return 'bg-coursera';
    return 'bg-eduskills';
}

function filterPlatform(platform) {
    // Update active tab button style
    const btns = document.querySelectorAll('.tab-btn');
    btns.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    const filtered = platform === 'All' ? allCourses : allCourses.filter(c => c.platform === platform);
    renderCourses(filtered);
}

function searchCourses() {
    const term = document.getElementById('searchInput').value.toLowerCase();
    const filtered = allCourses.filter(c => c.title.toLowerCase().includes(term));
    renderCourses(filtered);
}

window.onload = () => renderCourses(allCourses);
