# Manual Test Checklist

Run these checks locally before opening the pull request.

1. **Initial load:** Open `src/index.html`. Confirm the Data Sources tab is selected and its table is visible.
2. **Tab navigation:** Click Collection Methods, Analysis Methods, and Publication Venues. Confirm the correct panel appears each time and the previous panel is hidden.
3. **Keyboard navigation:** Focus a tab and use Left/Right Arrow, Home, and End. Confirm focus and selected panel move together.
4. **Content completeness:** Confirm all seven data sources, six collection methods, eight analysis methods, six conferences, and three journals appear.
5. **Responsive layout:** Narrow the browser window or use a mobile viewport. Confirm the tabs can be reached and tables scroll horizontally rather than breaking the page.

## Automated tests
The Node.js smoke tests in `test/` check required sections, requested content, and tab switching logic. Run them with `npm test`.
