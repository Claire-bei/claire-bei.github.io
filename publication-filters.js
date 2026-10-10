'use strict';

// Research-topic filtering, implemented for this site's publication markup.
// Inspiration: https://daviddaiiiii.github.io/ (see README.md).
(function () {
  const parseTags = value => [...new Set((value || '').split('|').map(tag => tag.trim()).filter(Boolean))];

  function countTopics(publications) {
    const counts = new Map();
    for (const tags of publications) {
      for (const tag of new Set(tags)) counts.set(tag, (counts.get(tag) || 0) + 1);
    }
    return counts;
  }

  function matchesTopics(tags, selected) {
    return [...selected].every(tag => tags.includes(tag));
  }

  function initialize(root) {
    const explorer = root.getElementById('publication-explorer');
    const list = root.getElementById('publication-list');
    const controls = root.getElementById('publication-topic-filters');
    const results = root.getElementById('publication-results');
    const clear = root.getElementById('clear-publication-filters');
    const empty = root.getElementById('publication-empty');
    const emptyReset = root.getElementById('reset-empty-publications');
    if (!explorer || !list || !controls || !results || !clear || !empty || !emptyReset) return;

    const publications = [...list.querySelectorAll('.publication-item')].map(article => ({
      article,
      tags: parseTags(article.dataset.tags)
    }));
    const counts = countTopics(publications.map(publication => publication.tags));
    const selected = new Set();
    const buttons = new Map();
    const badges = [];
    const descriptions = {
      CSC: 'Central serous chorioretinopathy',
      'OCT / OCTA': 'Optical coherence tomography / optical coherence tomography angiography'
    };

    controls.replaceChildren();
    for (const [tag, count] of [...counts].sort(([a], [b]) => a.localeCompare(b))) {
      const button = root.createElement('button');
      button.type = 'button';
      button.className = 'topic-filter';
      button.dataset.topic = tag;
      button.setAttribute('aria-pressed', 'false');
      button.setAttribute('aria-controls', 'publication-list');
      button.setAttribute('aria-label', `${descriptions[tag] || tag}: ${count} publication${count === 1 ? '' : 's'}`);
      if (descriptions[tag]) button.title = descriptions[tag];
      const label = root.createElement('span');
      label.textContent = tag;
      const number = root.createElement('span');
      number.className = 'topic-count';
      number.setAttribute('aria-hidden', 'true');
      number.textContent = String(count);
      button.append(label, number);
      button.addEventListener('click', () => {
        if (selected.has(tag)) selected.delete(tag);
        else selected.add(tag);
        render();
      });
      buttons.set(tag, button);
      controls.append(button);
    }

    for (const { article, tags } of publications) {
      const container = article.querySelector('.publication-tags');
      if (!container) continue;
      container.replaceChildren();
      for (const tag of tags) {
        const badge = root.createElement('span');
        badge.className = 'publication-tag';
        badge.textContent = tag;
        badge.dataset.topic = tag;
        if (descriptions[tag]) badge.title = descriptions[tag];
        container.append(badge);
        badges.push({ badge, tag });
      }
    }

    function render() {
      let visible = 0;
      for (const publication of publications) {
        const matches = matchesTopics(publication.tags, selected);
        publication.article.hidden = !matches;
        if (matches) visible += 1;
      }
      for (const [tag, button] of buttons) button.setAttribute('aria-pressed', String(selected.has(tag)));
      for (const { badge, tag } of badges) badge.classList.toggle('is-selected', selected.has(tag));
      const total = publications.length;
      results.textContent = selected.size
        ? `Showing ${visible} of ${total} publications · Matching all selected topics: ${[...selected].join(' + ')}`
        : `Showing all ${total} publication${total === 1 ? '' : 's'}`;
      clear.disabled = selected.size === 0;
      empty.hidden = visible !== 0;
    }

    function reset() {
      selected.clear();
      render();
      // The reset control becomes disabled or hidden; move focus to a usable filter.
      const firstButton = buttons.values().next().value;
      if (firstButton) firstButton.focus();
    }
    clear.addEventListener('click', reset);
    emptyReset.addEventListener('click', reset);
    render();
    explorer.hidden = false;
  }

  if (typeof module !== 'undefined' && module.exports) module.exports = { parseTags, countTopics, matchesTopics, initialize };
  if (typeof document !== 'undefined') initialize(document);
})();
