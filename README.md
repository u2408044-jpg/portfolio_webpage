# Personal Website - Phase 2

This is the enhanced Phase 2 version of the Phase 1 personal website. The original profile, CV, education, projects, activities and contact content has been retained.

## Phase 2 additions

### Dynamic greeting
JavaScript checks the current hour and displays Good Morning, Good Afternoon or Good Evening. It uses `getElementById()` and `.textContent`.

### Contact form validation
The form uses the `submit` event. JavaScript validates Name, Email and Message using `.value`, conditions, functions and DOM updates through `.textContent` and `.style`.

### DOM and events
The code demonstrates `getElementById()`, `querySelector()`, `.innerHTML`, `.textContent`, `.style`, `.value` and `addEventListener()` with submit, click, mouseover, mouseout, change and keydown events.

### jQuery gallery
jQuery is loaded from the CDN. Clicking a gallery thumbnail updates the main image, title and description. It demonstrates `$()`, `.on()`, `.data()`, `.text()`, `.attr()` and `.css()`.

### DEV Community articles
The page uses `fetch()` with the DEV Community public API endpoint `https://dev.to/api/articles?per_page=5`. Five recent article titles are inserted dynamically as clickable links. Errors are handled with `try/catch`.

### Live weather
The page uses the OpenWeatherMap Current Weather API. The user enters a city and receives the city name, temperature in Celsius, description and weather icon without reloading the page. Invalid cities, invalid API keys and other API errors are handled gracefully.

## OpenWeatherMap API key

Open `script.js` and replace:

`const OPENWEATHER_API_KEY = "YOUR_OPENWEATHER_API_KEY";`

with your own restricted/educational OpenWeatherMap API key.

Do not put a sensitive production secret in a public GitHub repository. Client-side JavaScript is visible to users, so production secrets require server-side protection. For this educational client-side exercise, use only a restricted/demo key and document the limitation.

## Responsive design

Media queries are included for tablet and mobile screen sizes.

## Deployment

Upload `index.html`, `style.css`, `script.js`, `README.md` and the `images` folder to GitHub. In **Settings > Pages**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.

## Evidence to submit

- Updated GitHub repository URL
- Live GitHub Pages URL
- External `script.js`
- Dynamic greeting
- Form validation
- jQuery gallery
- Five retrieved DEV articles
- Successful weather lookup
- Error handling
- Desktop and mobile screenshots
