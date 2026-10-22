# MSR Research Guide — Requirements

## Project Overview
The MSR Research Guide is a lightweight website that helps new PhD students and researchers discover data sources, collection techniques, analysis methods, and publication venues relevant to Mining Software Repositories (MSR).

## User Stories
- **US-01 — Browse data sources:** As a PhD student, I want to view available software engineering data sources so that I can identify suitable data for my research.
- **US-02 — Explore collection methods:** As a researcher, I want to compare collection methods and their advantages and disadvantages so that I can choose an appropriate technique.
- **US-03 — Explore analysis methods:** As a PhD student, I want to learn about analysis methods and their use cases so that I can select suitable methods for my research questions.
- **US-04 — Find publication venues:** As a researcher, I want to view relevant conferences and journals so that I can identify appropriate venues for publishing my work.
- **US-05 — Navigate between sections:** As a visitor, I want to switch between four clearly labeled sections so that I can find information easily.
- **US-06 — Read information easily:** As a researcher, I want a clean, readable layout so that I can quickly understand the available resources.
- **US-07 — Use the guide on different devices:** As a student, I want the page to work on desktop and mobile screens so that I can consult it wherever I am.

## Functional Requirements
- **FR-01:** Provide four navigation tabs: Data Sources, Collection Methods, Analysis Methods, and Publication Venues.
- **FR-02:** Selecting a tab displays its corresponding content and updates the selected-tab state.
- **FR-03:** Data Sources entries show the source name, data provided, and a brief description.
- **FR-04:** Collection Methods entries show the method name, purpose, pros, and cons.
- **FR-05:** Analysis Methods entries show the method name, analysis type, and common use cases.
- **FR-06:** Publication Venues are grouped into conferences and journals and show the abbreviation, venue name, focus, and MSR relevance.
- **FR-07:** The layout adapts to narrow screens.
- **FR-08:** Automated checks run through GitHub Actions on pushes and pull requests.

## Non-Functional Requirements
- **NFR-01:** Navigation and content must be understandable without animations.
- **NFR-02:** Use semantic HTML, readable contrast, and keyboard-accessible controls.
- **NFR-03:** The page must work in a modern browser without a backend.
- **NFR-04:** The site should be deployable through GitHub Pages.

## Scope
The initial implementation includes the page structure, working navigation, all four reference sections, responsive styling, and automated smoke tests. Future improvements could add search, filters, source links, and more detailed venue submission guidance.

## Acceptance Criteria
1. All four tabs are visible and keyboard accessible.
2. Selecting each tab displays the correct panel.
3. All requested sources, methods, and venues are present.
4. Each collection method lists at least one advantage and one limitation.
5. Publication venues are separated into conferences and journals.
6. Automated tests pass locally and in GitHub Actions.
