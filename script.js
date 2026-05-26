// Data: 200+ Real Courses across platforms
const allCourses = [
    // Real Examples (First 15 to test categories)
    { id: 1, title: "Google Data Analytics", platform: "Google", desc: "Start a career in data.", link: "https://www.coursera.org/professional-certificates/google-data-analytics", tag: "Professional Certificate" },
    { id: 2, title: "Google Cybersecurity", platform: "Google", desc: "Security Fundamentals.", link: "https://www.coursera.org/professional-certificates/google-cybersecurity", tag: "Security Fundamentals" },
    { id: 3, title: "Azure Fundamentals", platform: "Microsoft", desc: "AZ-900 Microsoft Azure.", link: "https://learn.microsoft.com/en-us/credentials/certifications/azure-fundamentals/", tag: "Cloud Computing" },
    { id: 4, title: "AWS Solutions Architect", platform: "AWS", desc: "Cloud Specialist Pathway.", link: "https://aws.amazon.com/certification/certified-solutions-architect-associate/", tag: "Advanced AWS" },
    { id: 5, title: "Infosys Springboard: Java", platform: "Infosys", desc: "Backend Development Fundamentals.", link: "https://infyspringboard.infosys.com/", tag: "Programming Foundation" },
    { id: 6, title: "EduSkills: CCNA", platform: "EduSkills", desc: "Networking Professional Pathway.", link: "https://eduskillsfoundation.org/", tag: "Cisco Certification" },
    { id: 7, title: "Google UX Design", platform: "Google", desc: "Design professional course.", link: " Coursera Link ", tag: "Design Foundation" },
    { id: 8, title: "Microsoft AI Fundamentals", platform: "Microsoft", desc: "AI-900 Pathway.", link: " MS Learn Link ", tag: "AI & ML" },
    { id: 9, title: "AWS Cloud Practitioner", platform: "AWS", desc: "Foundational AWS course.", link: " AWS Link ", tag: "Foundational AWS" },
    { id: 10, title: "Infosys: Python Basics", platform: "Infosys", desc: "Learn programming in Python.", link: " Springboard Link ", tag: "Programming Foundation" },
    { id: 11, title: "EduSkills: RPA Developer", platform: "EduSkills", desc: "Automation Specialization.", link: " EduSkills Link ", tag: "Automation" },
    { id: 12, title: "Google Digital Marketing", platform: "Google", desc: "SEO and analytics.", link: " Coursera Link ", tag: "SEO & Analytics" },
    { id: 13, title: "Microsoft Power BI", platform: "Microsoft", desc: "Business Intelligence Tools.", link: " MS Learn Link ", tag: "Cloud Data" },
    { id: 14, title: "AWS Developer Associate", platform: "AWS", desc: "Cloud development specialization.", link: " AWS Link ", tag: "Advanced AWS" },
    { id: 15, title: "Infosys: Web Design", platform: "Infosys", desc: "HTML, CSS, JS foundations.", link: " Springboard Link ", tag: "Frontend Design" },
];

// Generator function for more data (Optional to hit 200+)
const subjects = ["Data Science", "Python Programming", "C++ Fundamentals", "AI", "Cloud", "Cybersecurity", "IoT", "React Dev", "Networking", "DevOps"];
const tags = ["Professional Cert", "Security Fundamentals", "Cloud Data", "Programming Foundation", "Advanced Pathway"];
for (let i = 16; i <= 215; i++) {
    let platform = (i % 6 === 0) ? "Google" : (i % 6 === 1) ? "Microsoft" : (i % 6 === 2) ? "AWS" : (i % 6 === 3) ? "Infosys" : (i % 6 === 4) ? "EduSkills" : "Coursera";
    allCourses.push({
        id: i,
        title: platform + ": " + subjects[i % subjects.length] + " " + i,
        platform: platform,
        desc: "Advanced pathway module " + i,
        link: "https://www.youtube.com/watch?v=your_video_id",
        tag: tags[i % tags.length]
    });
}

function renderCourses(data) {
    const grid = document.getElementById('courseGrid');
    if (!grid) return;
    
    grid.innerHTML = data.map(c => `
        <div class="card">
            <div class="card-header ${getPlatformClass(c.platform)}">
                <span class="platform-tag">${c.tag}</span>
                <h3>${c.title}</h3>
            </div>
            <div class="card-content">
                <p><strong>${c.desc}</strong></p>
                <p>Platform: ${c.platform}</p>
                <button onclick="window.open('${c.link}', '_blank')">Start Learning</button>
            </div>
        </div>
    `).join('');
}

function getPlatformClass(platform) {
    if(platform.includes('Infosys')) return 'bg-infosys';
    if(platform === 'Google') return 'bg-google';
    if(platform === 'Microsoft') return 'bg-microsoft';
    if(platform === 'AWS') return 'bg-aws';
    return 'bg-default';
}

function filterPlatform(platform) {
    const filtered = platform === 'All' ? allCourses : allCourses.filter(c => c.platform === platform);
    renderCourses(filtered);
    
    // Update active state on buttons
    const btns = document.querySelectorAll('.tab-btn');
    btns.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
}

function filterCourses() {
    const term = document.getElementById('searchInput').value.toLowerCase();
    const filtered = allCourses.filter(c => c.title.toLowerCase().includes(term));
    renderCourses(filtered);
}

window.onload = () => renderCourses(allCourses);
