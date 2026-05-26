const allCourses = [
    { title: "Google Data", platform: "Google", desc: "Professional Cert" },
    { title: "Azure Basics", platform: "Microsoft", desc: "Cloud Cert" }
];

function render(data) {
    const grid = document.getElementById("courseGrid");
    if (!grid) return;
    grid.innerHTML = data.map(c => `
        <div class="card">
            <h3>${c.title}</h3>
            <p>${c.platform}</p>
        </div>
    `).join('');
}

function filterPlatform(p) {
    if(p === 'All') render(allCourses);
    else render(allCourses.filter(c => c.platform === p));
}

render(allCourses);
