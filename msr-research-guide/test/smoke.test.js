const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.join(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'src', 'index.html'), 'utf8');
const script = fs.readFileSync(path.join(root, 'src', 'script.js'), 'utf8');

test('page includes all four navigation tabs and panels', () => {
  for (const name of ['sources', 'collection', 'analysis', 'venues']) {
    assert.match(html, new RegExp(`data-tab="${name}"`));
    assert.match(html, new RegExp(`data-panel="${name}"`));
  }
});

test('page includes all requested data sources', () => {
  for (const source of ['GitHub', 'Stack Overflow', 'JIRA', 'Google Play', 'Apple App Store', 'Travis CI', 'Jenkins', 'Mailing Lists', 'npm Registry']) {
    assert.ok(html.includes(source), `Missing source: ${source}`);
  }
});

test('page includes requested collection and analysis methods', () => {
  for (const method of ['REST APIs', 'GraphQL', 'Selenium', 'BeautifulSoup', 'GHTorrent', 'SOTorrent', 'Manual Download',
    'Statistical Analysis', 'Regression Analysis', 'Thematic Analysis', 'Grounded Theory', 'Machine Learning',
    'Time Series Analysis', 'Network Analysis', 'Visualization']) {
    assert.ok(html.includes(method), `Missing method: ${method}`);
  }
});

test('page includes all requested publication venues', () => {
  for (const venue of ['ICSE', 'FSE', 'ASE', 'MSR', 'EASE', 'SANER', 'EMSE', 'TSE', 'TOSEM']) {
    assert.ok(html.includes(`<strong>${venue}</strong>`), `Missing venue: ${venue}`);
  }
});

test('tab switching updates selected state and visible panel', () => {
  const tabs = ['sources', 'collection', 'analysis', 'venues'].map((name) => ({
    dataset: { tab: name }, attrs: { 'aria-selected': 'false' }, tabIndex: -1, classList: {
      toggle() {}
    }, setAttribute(key, value) { this.attrs[key] = value; }, getAttribute(key) { return this.attrs[key]; }, focus() {}
  }));
  const panels = ['sources', 'collection', 'analysis', 'venues'].map((name) => ({
    dataset: { panel: name }, hidden: true
  }));
  const listeners = new Map();
  tabs.forEach((tab) => { tab.addEventListener = (event, fn) => listeners.set(`${tab.dataset.tab}:${event}`, fn); });
  const document = {
    querySelectorAll(selector) {
      if (selector === '[role="tab"][data-tab]') return tabs;
      if (selector === '[role="tabpanel"][data-panel]') return panels;
      return [];
    }
  };
  const window = {};
  vm.runInNewContext(script, { document, window, String, Array });
  assert.equal(window.msrGuide.getActiveTab(), 'sources');
  window.msrGuide.activateTab('analysis');
  assert.equal(window.msrGuide.getActiveTab(), 'analysis');
  assert.equal(window.msrGuide.getVisiblePanel(), 'analysis');
  assert.equal(panels.find((panel) => panel.dataset.panel === 'sources').hidden, true);
});
