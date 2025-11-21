const archive = [
  {
    col1: "eve+testosterone=adam",
    col2: "2025",
    col3: "audio/visual, p5.js",
    col4: "letter-press",
    col5: "in-progress",
    description: `<p>this project explores audio-visual media using p5.js to examine how technology shapes artistic dissemination. it includes interactive components and visualizations that challenge traditional hierarchies.</p>
                  <p>references here</p>`,
    images: ["images/eve1.png", "images/eve2.png"]
  },
  {
    col1: "the great white erection",
    col2: "2025",
    col3: "audio/visual, p5.js",
    col4: "web-based, uv printing",
    col5: "in-progress",
    description: `<p>this project explores audio-visual media using p5.js to examine how technology shapes artistic dissemination. it includes interactive components and visualizations that challenge traditional hierarchies.</p>
                  <p>references here</p>`,
    images: ["images/gwe1.png", "images/gwe2.png"]
  },
  {
    col1: "electronic superhighway",
    col2: "2025",
    col3: "p5.js",
    col4: "web-based, typography",
    col5: "in-progress",
    description: `<p>a p5.js installation reflecting on digital structures and social hierarchies through interactive code and visual forms. the piece engages participants in a dynamic exploration of digital spaces.</p>
                  <p>references here</p>`,
    images: ["images/es1.png", "images/es2.png"]
  },
  {
    col1: "the weather room",
    col2: "2024",
    col3: "processing",
    col4: "interactive installation",
    col5: "completed",
    description: `<p>the weather room is an installation created in collaboration with <a href="https://www.isobellemccall.com/" target="_blank" style="color: blue; text-decoration: underline;">isobelle mccall</a> as part of an interactive media course at the university of melbourne. in the space, viewers can influence the ambience through their presence. projected light changes colour from dark blue tones to warm orange hues based on how loud it gets in the room. this creates an audio-visual representation of the human experience with the environment, inviting a deep reflection of our relationship with nature.</p>
                  <p>references here</p>`,
    images: ["images/theweatherroom/theweatherroom01.png", "images/theweatherroom/theweatherroom02.png"]
  }
];
const tableBody = document.getElementById('tableBody');
const toggleAllBtn = document.getElementById('toggleAll');
let allExpanded = false;
const expandedStates = Object.fromEntries(archive.map(e => [e.col1, false]));

function renderTable() {
  tableBody.innerHTML = '';
  archive.forEach(entry => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${entry.col1}</td>
      <td>${entry.col2}</td>
      <td>${entry.col3}</td>
      <td>${entry.col4}</td>
      <td>
        ${entry.col5}
        ${entry.col5.toLowerCase() === 'in-progress' ? '<span class="status-dot"></span>' : ''}
      </td>
      <td></td>
    `;
    row.addEventListener('click', () => {
      expandedStates[entry.col1] = !expandedStates[entry.col1];
      updateRows();
    });
    tableBody.appendChild(row);

    const descRow = document.createElement('tr');
    descRow.className = 'description-row';
    descRow.id = `desc-${entry.col1}`;

    // Use entry.images[0] and entry.images[1] for the two image cells
    descRow.innerHTML = `
      <td></td>
      <td class="desc-cell" colspan="3">
        ${entry.description}
      </td>
      <td>
        <div class="img-container">
          <img src="${entry.images[0]}" class="thumb-img" alt="project image 1">
        </div>
      </td>
      <td>
        <div class="img-container">
          <img src="${entry.images[1]}" class="thumb-img" alt="project image 2">
        </div>
      </td>
    `;

    tableBody.appendChild(descRow);
  });
  updateRows();
}

function updateRows() {
  archive.forEach(entry => {
    const descRow = document.getElementById(`desc-${entry.col1}`);
    if (descRow) {
      descRow.style.display = expandedStates[entry.col1] ? 'table-row' : 'none';
    }
  });
  allExpanded = archive.every(e => expandedStates[e.col1]);
  toggleAllBtn.textContent = allExpanded ? '—' : '+';
}

toggleAllBtn.addEventListener('click', () => {
  allExpanded = !allExpanded;
  archive.forEach(e => expandedStates[e.col1] = allExpanded);
  updateRows();
});

renderTable();