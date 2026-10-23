const engineSelect = document.getElementById('engineSelect');
const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');
const resultsFrame = document.getElementById('resultsFrame');

const searchMap = {
  duckduckgo: 'https://duckduckgo.com/?q=',
  google: 'https://www.google.com/search?q=',
  bing: 'https://www.bing.com/search?q=',
  brave: 'https://search.brave.com/search?q=',
  ecosia: 'https://www.ecosia.org/search?q=',
  wikipedia: 'https://en.wikipedia.org/wiki/Special:Search?search='
};

function loadSearchResults(query, engine) {
  const baseUrl = searchMap[engine] || searchMap.duckduckgo;
  const trimmed = query.trim();

  if (!trimmed) {
    resultsFrame.src = 'about:blank';
    return;
  }

  resultsFrame.src = `${baseUrl}${encodeURIComponent(trimmed)}`;
}

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  loadSearchResults(searchInput.value, engineSelect.value);
});

engineSelect.addEventListener('change', () => {
  if (searchInput.value.trim()) {
    loadSearchResults(searchInput.value, engineSelect.value);
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const defaultQuery = 'GitHub';
  searchInput.value = defaultQuery;
  loadSearchResults(defaultQuery, engineSelect.value);
  searchInput.focus();
});
