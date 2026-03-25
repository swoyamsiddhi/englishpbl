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
    <div class="story-meta-item">
      <span class="meta-icon">💡</span> ${story.themes[0] || 'Classic Theme'}
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
    <div class="key-quote reveal" id="key-quote-panel">
      <p id="key-quote-text">${story.keyQuote}</p>
      <button id="copy-quote-btn" style="position:absolute; top:0.8rem; right:0.8rem; background:rgba(255,255,255,0.12); border:1px solid rgba(255,255,255,0.3); color:#fff; border-radius:999px; font-size:0.75rem; padding:0.25rem 0.6rem; cursor:pointer;">Copy</button>
    </div>

    <!-- Themes -->
    <div class="story-section reveal">
      <div class="story-section-label">Key Themes</div>
      <ul class="themes-list">
        ${story.themes.map(t => `<li>${t}</li>`).join('')}
      </ul>
    </div>

    <!-- story -->
    <div class="story-section reveal">
      <div class="story-section-label">Full Story</div>
      <div class="story-text">
        ${story.story ? story.story
          .replace(/\t/g, ' ')
          .split(/\n\s*\n+/)
          .map(paragraph => `<p>${paragraph.trim()}</p>`)
          .join('')
          : '<p>Full story text not available.</p>'}
      </div>
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

    const quoteText = document.getElementById('key-quote-text');
    const copyBtn = document.getElementById('copy-quote-btn');
    if (quoteText && copyBtn) {
        copyBtn.addEventListener('click', async () => {
            try {
                await navigator.clipboard.writeText(quoteText.textContent || '');
                copyBtn.textContent = 'Copied!';
                setTimeout(() => copyBtn.textContent = 'Copy', 1400);
            } catch (error) {
                copyBtn.textContent = 'Failed';
                setTimeout(() => copyBtn.textContent = 'Copy', 1400);
            }
        });
    }
}
