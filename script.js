const courses = [
    { title: "Google Data Analytics", desc: "Google Data Analytics Professional Certificate", cat: "Google", link: "https://www.youtube.com/watch?v=your_video_id" },
    { title: "Google Cybersecurity", desc: "Google Cybersecurity Frameworks", cat: "Google", link: "https://www.youtube.com/watch?v=your_video_id" },
    { title: "Azure Fundamentals", desc: "Microsoft Azure (AZ-900)", cat: "Microsoft", link: "https://www.youtube.com/watch?v=your_video_id" },
    { title: "AWS Solutions", desc: "AWS Cloud Operations", cat: "AWS", link: "https://www.youtube.com/watch?v=your_video_id" }
];

function render(data) {
    const grid = document.getElementById("courseGrid");
    grid.innerHTML = data.map(c => `
        <div class="card">
            <div class="card-header"><h4>${c.title}</h4></div>
            <div class="card-content">
                <p>${c.desc}</p>
                <button onclick="window.open('${c.link}', '_blank')">Start Learning</button>
            </div>
        </div>
    `).join('');
}

function filterCategory(cat) {
    if(cat === 'All') render(courses);
    else render(courses.filter(c => c.cat === cat));
}

function filterCourses() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    render(courses.filter(c => c.title.toLowerCase().includes(input)));
}

render(courses);
