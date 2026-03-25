document.addEventListener('DOMContentLoaded', () => {
    initStoriesPage();
});

function initStoriesPage() {
    initViewToggle();
    initFilters();
    initSearch();
    renderStories(STORIES);
    renderTimeline(STORIES);
}

function renderStories(stories, query = '') {
    renderTimeline(stories);
    const grid = document.getElementById('stories-grid');
    if (!grid) return;

    if (!stories.length) {
        grid.innerHTML = '<p style="color:#f0e6d3; text-align:center; width:100%;">No stories match this filter.</p>';
        return;
    }

    grid.innerHTML = stories.map(story => {
        const highlightedTitle = query ? story.title.replace(new RegExp(query, 'gi'), match => `<mark style="background:#f9e29d;color:#1a1a1a;border-radius:3px;">${match}</mark>`) : story.title;
        const storyString = story.story ? story.story.toString().replace(/\s+/g, ' ').trim() : '';
        const storyExcerpt = storyString ? (storyString.length > 160 ? `${storyString.slice(0, 160)}...` : storyString) : '';
        const isFeatured = story.id === 'skeleton';

        return `
        <a href="story.html?id=${story.id}" class="story-card${isFeatured ? ' featured' : ''}" id="card-${story.id}">
          <div class="story-card-header">
            <div>
              <h3 class="story-card-title">${highlightedTitle}</h3>
              ${isFeatured ? '<span class="story-card-badge">Featured</span>' : ''}
            </div>
            <span class="story-card-year">${story.year}</span>
          </div>
          <p class="story-card-excerpt">${story.summary}</p>
          ${storyExcerpt ? `<div class="story-card-preview"><strong>Preview:</strong> ${storyExcerpt}</div>` : ''}
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

function renderTimeline(stories) {
    const timelineList = document.getElementById('timeline-list');
    if (!timelineList) return;

    const byYear = stories.reduce((acc, story) => {
        if (!acc[story.year]) acc[story.year] = [];
        acc[story.year].push(story);
        return acc;
    }, {});

    const years = Object.keys(byYear).sort((a, b) => Number(a) - Number(b));

    timelineList.innerHTML = years.map(year => `
        <div class="timeline-year-block">
          <div class="timeline-year-marker">
            <span>${year}</span>
          </div>
          <div class="timeline-year-content">
            ${byYear[year].map(s => `
              <article class="timeline-story-card">
                <h4><a href="story.html?id=${s.id}">${s.title}</a></h4>
                <p>${s.summary.length > 130 ? `${s.summary.slice(0, 130)}...` : s.summary}</p>
                <div class="timeline-meta"><span>${s.themes[0] || ''}</span><span>${s.year}</span></div>
              </article>
            `).join('')}
          </div>
        </div>
      `).join('');
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
    const timelineBtn = document.getElementById('timeline-view-btn');
    const grid = document.getElementById('stories-grid');
    const storiesContainer = document.querySelector('.stories-container');
    const timelineSection = document.getElementById('timeline-section');

    if (!gridBtn || !listBtn || !timelineBtn || !grid || !storiesContainer || !timelineSection) return;

    function setActive(target) {
        gridBtn.classList.remove('active');
        listBtn.classList.remove('active');
        timelineBtn.classList.remove('active');
        target.classList.add('active');
    }

    gridBtn.addEventListener('click', () => {
        setActive(gridBtn);
        grid.classList.remove('list-view');
        storiesContainer.style.display = 'block';
        timelineSection.classList.add('hidden');
    });

    listBtn.addEventListener('click', () => {
        setActive(listBtn);
        grid.classList.add('list-view');
        storiesContainer.style.display = 'block';
        timelineSection.classList.add('hidden');
    });

    timelineBtn.addEventListener('click', () => {
        setActive(timelineBtn);
        storiesContainer.style.display = 'none';
        timelineSection.classList.remove('hidden');
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
