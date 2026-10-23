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
  const encodedQuery = encodeURIComponent(query.trim());

  if (!encodedQuery) {
    resultsFrame.src = 'about:blank';
    return;
  }

  resultsFrame.src = `${baseUrl}${encodedQuery}`;
}

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const selectedEngine = engineSelect.value;
  const query = searchInput.value;
  loadSearchResults(query, selectedEngine);
});

engineSelect.addEventListener('change', () => {
  const query = searchInput.value.trim();
  if (query) {
    loadSearchResults(query, engineSelect.value);
  }
});

searchInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    searchForm.requestSubmit();
  }
});

document.addEventListener('DOMContentLoaded', () => {
  searchInput.focus();
  const defaultQuery = 'GitHub';
  searchInput.value = defaultQuery;
  loadSearchResults(defaultQuery, engineSelect.value);
});
