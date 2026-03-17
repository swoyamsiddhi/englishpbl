document.addEventListener('DOMContentLoaded', () => {
    initStoriesPage();
});

function initStoriesPage() {
    initViewToggle();
    initFilters();
    initSearch();
    renderStories(STORIES);
}

function renderStories(stories, query = '') {
    const grid = document.getElementById('stories-grid');
    if (!grid) return;

    if (!stories.length) {
        grid.innerHTML = '<p style="color:#f0e6d3; text-align:center; width:100%;">No stories match this filter.</p>';
        return;
    }

    grid.innerHTML = stories.map(story => {
        const highlightedTitle = query ? story.title.replace(new RegExp(query, 'gi'), match => `<mark style="background:#f9e29d;color:#1a1a1a;border-radius:3px;">${match}</mark>`) : story.title;
        return `
        <a href="story.html?id=${story.id}" class="story-card" id="card-${story.id}">
          <div class="story-card-header">
            <h3 class="story-card-title">${highlightedTitle}</h3>
            <span class="story-card-year">${story.year}</span>
          </div>
          <p class="story-card-excerpt">${story.summary}</p>
          <div class="story-card-themes">
            ${story.themes.slice(0, 2).map(t => `<span class="theme-tag">${t}</span>`).join('')}
          </div>
        </a>
      `;
    }).join('');
}

function getUniqueYears() {
    return [...new Set(STORIES.map(s => s.year))].sort((a, b) => a - b);
}

function getUniqueThemes() {
    const allThemes = STORIES.flatMap(s => s.themes);
    return [...new Set(allThemes)].sort((a, b) => a.localeCompare(b));
}

function initFilters() {
    const yearFilter = document.getElementById('year-filter');
    const grid = document.getElementById('stories-grid');

    if (!yearFilter || !grid) return;

    getUniqueYears().forEach(year => {
        const opt = document.createElement('option');
        opt.value = String(year);
        opt.textContent = String(year);
        yearFilter.appendChild(opt);
    });

    const applyFilters = () => {
        const yearValue = yearFilter.value;
        const query = document.getElementById('story-search')?.value.trim().toLowerCase() || '';

        let filtered = [...STORIES];
        if (yearValue !== 'all') {
            filtered = filtered.filter(s => String(s.year) === yearValue);
        }
        if (query) {
            filtered = filtered.filter(s => s.title.toLowerCase().includes(query) || s.summary.toLowerCase().includes(query));
        }

        renderStories(filtered, query);
    };

    yearFilter.addEventListener('change', applyFilters);
    document.getElementById('story-search')?.addEventListener('input', applyFilters);
    document.getElementById('clear-search')?.addEventListener('click', () => {
        const searchInput = document.getElementById('story-search');
        if (searchInput) searchInput.value = '';
        applyFilters();
    });
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

function initSearch() {
    const searchInput = document.getElementById('story-search');
    const clearButton = document.getElementById('clear-search');

    if (!searchInput || !clearButton) return;

    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            searchInput.value = '';
            clearButton.click();
        }
    });
}
