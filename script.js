// ---------- data ----------
const archive = [
  {
    col1: "eve+testosterone=adam (datalove)",
    col2: "2025",
    col3: "p5.js, writing",
    col4: "web-based, publication",
    col5: "in-progress",
    description: `<p>project description here</p>
                  <p>&nbsp;</p>
                  <p>//references</p>
                  <p>andrea long chu, <a href="https://www.are.na/block/25966066" target="_blank" style="color: blue; text-decoration: underline;">females</a>, 2019</p>
                  <p>&nbsp;</p>`,
    images: [
      "images/image.png",
      "images/image.png"
    ]
  },
  {
    col1: "the great white erection",
    col2: "2025",
    col3: "p5.js, ableton, uv printing",
    col4: "web-based, publication",
    col5: "in-progress",
    description: `<p>project description here -> link sound</p>
                  <p>&nbsp;</p>
                  <p>//references</p>
                  <p>gloria e. anzaldúa, <a href="https://likeawhisper.wordpress.com/wp-content/uploads/2010/03/anzaldua-now-let-us-shift.pdf" target="_blank" style="color: blue; text-decoration: underline;">light in the dark, chapter 6</a>, 2016</p>
                  <p>zoë soﬁa, <a href="https://www.researchgate.net/publication/227700296_Container_Technologies" target="_blank" style="color: blue; text-decoration: underline;">container technologies</a>, 2000</p>
                  <p>london's screen archives, <a href="https://www.londonsscreenarchives.org.uk/title/19773/" target="_blank" style="color: blue; text-decoration: underline;">the hammersmith flyover, hammersmith</a>, 1961</p>
                  <p>yoko ono, john lennon, <a href="https://www.londonsscreenarchives.org.uk/title/19773/" target="_blank" style="color: blue; text-decoration: underline;">the war is over!</a>, 1969</p>
                  <p>&nbsp;</p>`,
    images: [
      "iframe:https://kilianhoppner.github.io/thegreatwhiteerection/",
      "images/thegreatwhiteerection/thegreatwhiteerection.png"
    ]
  },
  {
    col1: "electronic superhighway",
    col2: "2025",
    col3: "p5.js, ableton",
    col4: "web-based",
    col5: "in-progress",
    description: `<p>this project visualises the international organisation for migration's (iom) dtm sudan displacement data from the report dated 30 september 2025 in a text-based interactive table. it shows each state of displacement, state codes, the number of idps and households, the percentage of sudanese nationals, and a breakdown by state of origin. -> link sound</p>
                  <p>&nbsp;</p>
                  <p>//references</p>
                  <p>international organisation for migration (iom), <a href="https://dtm.iom.int/sudan" target="_blank" style="color: blue; text-decoration: underline;">dtm sudan report</a>, 2025</p>
                  <p>ryoji ikeda, <a href="https://www.180studios.com/data-cosm" target="_blank" style="color: blue; text-decoration: underline;">data-cosm [nº1]</a>, 2023</p>
                  <p>ai weiwei, <a href="https://en.wikipedia.org/wiki/Human_Flow" target="_blank" style="color: blue; text-decoration: underline;">human flow</a>, 2017</p>
                  <p>&nbsp;</p>`,
    images: [
      "iframe:https://kilianhoppner.github.io/ELECTRONICSUPERHIGHWAY-MAP/",
      "iframe:https://kilianhoppner.github.io/3dspring/"
    ]
  },
  {
    col1: "#surveillancecore pt.01",
    col2: "2025",
    col3: "p5.js",
    col4: "interactive installation",
    col5: "completed",
    description: `<p>#surveillancecore pt.01 is an interactive installation made in collaboration with <a href="https://www.linkedin.com/in/hannah-ogawa-9931ab303/" target="_blank" style="color: blue; text-decoration: underline;"><u>hannah ogawa</u></a>. the camera is coded to track people's faces and detect their emotions. by transforming personal interactions into data, the installation prompts viewers to reflect on surveillance technology and its capability to blur the boundaries between connection and control. it invites critical examination of privacy, agency, and the ethics of observation in the digital age.</p>
                  <p>&nbsp;</p>
                  <p>//references</p>
                  <p>nam june paik, <a href="https://www.artgallery.nsw.gov.au/collection/works/342.2011.a-f/" target="_blank" style="color: blue; text-decoration: underline;">tv buddha</a>, 1976</p>
                  <p>skepta, <a href="https://www.youtube.com/watch?v=rC-J4x-oTto" target="_blank" style="color: blue; text-decoration: underline;">#skeptacore pt.2</a>, 2023</p>
                  <p>ryoji ikeda, <a href="https://www.ryojiikeda.com/project/datamatics/" target="_blank" style="color: blue; text-decoration: underline;">datamatics</a>, 2006</p>
                  <p>transwhite studio, <a href="https://tokyotypedirectorsclub.org/en/award/2024_tdc_03/" target="_blank" style="color: blue; text-decoration: underline;">aranya plein air</a>, 2023</p>
                  <p>&nbsp;</p>`,
    images: [
      "iframe:https://kilianhoppner.github.io/surveillancecore-pt.1/",
      "images/surveillancecorept.01/surveillancecorept.01.png"
    ]
  },
  {
    col1: "the weather room",
    col2: "2024",
    col3: "processing",
    col4: "interactive installation",
    col5: "completed",
    description: `<p>the weather room is an installation created in collaboration with <a href="https://www.isobellemccall.com/" target="_blank" style="color: blue; text-decoration: underline;">isobelle mccall</a> as part of an interactive media course at the university of melbourne. in the space, viewers can influence the ambience through their presence. projected light changes colour from dark blue tones to warm orange hues based on how loud it gets in the room. this creates an audio-visual representation of the human experience with the environment, inviting a deep reflection of our relationship with nature.</p>
                  <p>&nbsp;</p>
                  <p>//references</p>
                  <p>olafur eliasson, <a href="https://olafureliasson.net/artwork/the-weather-project-2003/" target="_blank" style="color: blue; text-decoration: underline;">the weather project</a>, 2003</p>
                  <p>james turrell, <a href="https://www.pacegallery.com/exhibitions/james-turrell-elemental/" target="_blank" style="color: blue; text-decoration: underline;">elemental</a>, 2022</p>
                  <p>julinka ebhardt, francesco tacchini, will yates-johnson, <a href="https://vimeo.com/87979136" target="_blank" style="color: blue; text-decoration: underline;">space replay</a>, 2014</p>
                  <p>john warwicker, <a href="https://www.johnwarwicker.com/sony-connected-identity-1/ez6vgi16gtvobpccjsmq013z90rru2" target="_blank" style="color: blue; text-decoration: underline;">sony connected identity</a>, 2001</p>
                  <p>&nbsp;</p>`,
    images: ["images/theweatherroom/theweatherroom01.png", "images/theweatherroom/theweatherroom02.png"]
  }
];

// ---------- DOM refs & state ----------
const tableBody = document.getElementById('tableBody');
const toggleAllBtn = document.getElementById('toggleAll');
let allExpanded = false;
const expandedStates = Object.fromEntries(archive.map(e => [e.col1, false]));

// ---------- helper: create media cell ----------
function createMediaCell(mediaValue, idx) {
  const td = document.createElement('td');
  td.style.verticalAlign = 'top';
  const wrapper = document.createElement('div');
  wrapper.className = 'img-container';
  td.appendChild(wrapper);

  if (!mediaValue) {
    const img = document.createElement('img');
    img.className = 'thumb-img';
    img.alt = `project image ${idx}`;
    img.src = 'images/image.png';
    wrapper.appendChild(img);
    return td;
  }

  if (typeof mediaValue === 'string' && mediaValue.startsWith('iframe:')) {
    const url = mediaValue.slice('iframe:'.length);

    // responsive wrapper (intrinsic ratio)
    const ar = document.createElement('div');
    ar.style.position = 'relative';
    ar.style.width = '100%';
    ar.style.maxWidth = '800px';
    ar.style.paddingTop = '65.125%'; // 521 / 800 * 100%
    ar.style.overflow = 'hidden';

    const iframe = document.createElement('iframe');
    iframe.src = url;
    iframe.title = `embedded-${idx}`;
    iframe.frameBorder = '0';
    iframe.loading = 'lazy';
    iframe.allow = 'camera; microphone; fullscreen; autoplay';
    iframe.allowFullscreen = true;
    iframe.style.position = 'absolute';
    iframe.style.top = '0';
    iframe.style.left = '0';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = '0';

    ar.appendChild(iframe);
    wrapper.appendChild(ar);
    return td;
  }

  if (typeof mediaValue === 'string' && mediaValue.trim().startsWith('<iframe')) {
    wrapper.innerHTML = mediaValue;
    return td;
  }

  const img = document.createElement('img');
  img.className = 'thumb-img';
  img.alt = `project image ${idx}`;
  img.src = mediaValue;
  wrapper.appendChild(img);
  return td;
}

// ---------- render table ----------
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

    descRow.appendChild(document.createElement('td'));

    const descTd = document.createElement('td');
    descTd.className = 'desc-cell';
    descTd.colSpan = 3;
    descTd.innerHTML = entry.description || '';
    descRow.appendChild(descTd);

    const m0 = createMediaCell(entry.images?.[0], 1);
    const m1 = createMediaCell(entry.images?.[1], 2);
    descRow.appendChild(m0);
    descRow.appendChild(m1);

    tableBody.appendChild(descRow);
  });

  updateRows();
}

// ---------- update rows ----------
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

// ---------- toggle all ----------
toggleAllBtn.addEventListener('click', () => {
  allExpanded = !allExpanded;
  archive.forEach(e => expandedStates[e.col1] = allExpanded);
  updateRows();
});

// initial render
renderTable();