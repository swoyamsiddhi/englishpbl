document.addEventListener('DOMContentLoaded', () => {
    renderStories();
    initViewToggle();
});

function renderStories() {
    const grid = document.getElementById('stories-grid');
    if (!grid) return;

    grid.innerHTML = STORIES.map(story => `
    <a href="story.html?id=${story.id}" class="story-card" id="card-${story.id}">
      <div class="story-card-header">
        <h3 class="story-card-title">${story.title}</h3>
        <span class="story-card-year">${story.year}</span>
      </div>
      <p class="story-card-excerpt">${story.summary}</p>
      <div class="story-card-themes">
        ${story.themes.slice(0, 2).map(t => `<span class="theme-tag">${t}</span>`).join('')}
      </div>
    </a>
  `).join('');
}

function initViewToggle() {
    const gridBtn = document.getElementById('grid-view-btn');
    const listBtn = document.getElementById('list-view-btn');
    const grid = document.getElementById('stories-grid');

    if (!gridBtn || !listBtn || !grid) return;

    gridBtn.addEventListener('click', () => {
        grid.classList.remove('list-view');
        gridBtn.classList.add('active');
        listBtn.classList.remove('active');
    });

    listBtn.addEventListener('click', () => {
        grid.classList.add('list-view');
        listBtn.classList.add('active');
        gridBtn.classList.remove('active');
    });
}
