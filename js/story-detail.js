// ===== STORY DETAIL PAGE =====

document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const storyId = params.get('id');

    if (!storyId) {
        window.location.href = 'stories.html';
        return;
    }

    const storyIndex = STORIES.findIndex(s => s.id === storyId);

    if (storyIndex === -1) {
        window.location.href = 'stories.html';
        return;
    }

    const story = STORIES[storyIndex];
    renderStoryDetail(story, storyIndex);
});

function renderStoryDetail(story, index) {
    // Update page title
    document.title = `${story.title} (${story.year}) — Tagore's Stories`;

    // Update meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
        metaDesc.setAttribute('content', `${story.title} by Rabindranath Tagore (${story.year}): ${story.summary.slice(0, 150)}...`);
    }

    // Hero title
    document.getElementById('story-title').textContent = story.title;

    // Meta info
    const metaContainer = document.getElementById('story-meta');
    metaContainer.innerHTML = `
    <div class="story-meta-item">
      <span class="meta-icon">📅</span> ${story.year}
    </div>
    <div class="story-meta-item">
      <span class="meta-icon">📚</span> Short Story
    </div>
    <div class="story-meta-item">
      <span class="meta-icon">✍️</span> Rabindranath Tagore
    </div>
  `;

    // Story content
    const contentContainer = document.getElementById('story-content');
    contentContainer.innerHTML = `
    <!-- Summary -->
    <div class="story-section reveal">
      <div class="story-section-label">Summary</div>
      <p>${story.summary}</p>
    </div>

    <!-- Key Quote -->
    <div class="key-quote reveal">
      <p>${story.keyQuote}</p>
    </div>

    <!-- Themes -->
    <div class="story-section reveal">
      <div class="story-section-label">Key Themes</div>
      <ul class="themes-list">
        ${story.themes.map(t => `<li>${t}</li>`).join('')}
      </ul>
    </div>

    <!-- Analysis -->
    <div class="story-section reveal">
      <div class="story-section-label">Critical Analysis</div>
      <p>${story.analysis}</p>
    </div>

    <!-- Navigation -->
    <nav class="story-nav">
      ${index > 0 ? `
        <a href="story.html?id=${STORIES[index - 1].id}">
          <span>←</span>
          <div>
            <div class="nav-direction">Previous</div>
            <div class="nav-title">${STORIES[index - 1].title}</div>
          </div>
        </a>
      ` : '<div></div>'}
      ${index < STORIES.length - 1 ? `
        <a href="story.html?id=${STORIES[index + 1].id}">
          <div style="text-align: right;">
            <div class="nav-direction">Next</div>
            <div class="nav-title">${STORIES[index + 1].title}</div>
          </div>
          <span>→</span>
        </a>
      ` : '<div></div>'}
    </nav>
  `;

    // Re-init scroll reveal for dynamically added elements
    const reveals = contentContainer.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    reveals.forEach(el => observer.observe(el));
}
