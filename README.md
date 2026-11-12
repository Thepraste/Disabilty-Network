# Disability Network website

## Run locally
Open this folder in VS Code and use Live Server on `index.html`.
The JavaScript uses ES modules, so do not open the HTML as a `file://` URL.

## Project structure
- `index.html` – homepage markup
- `css/style.css` – existing base styling
- `css/responsive.css` – responsive layout and mobile navigation styles
- `js/data.js` – central class catalogue and learning categories
- `js/main.js` – page initialization, class rendering, search, filters, navigation and carousels
- `js/booking.js` – booking confirmation and calendar integrations
- `assets/images/` – supplied brand and community images

## Adding a class
Add a new object to the `classes` array in `js/data.js`.
Use an image path that exists under `assets/images/`. The current sample cards reuse the three supplied community photographs so the page does not show broken image links. Replace those image paths with actual class thumbnails when you have them.

## Notes
- The Services section has been removed from the homepage.
- The hero call-to-action now links to the learning section.
- Booking is still a front-end demonstration; no reservation is sent to a server.
- Bookings and saved classes are held in memory and reset when the page reloads.


## Final visual polish
The desktop footer spacing and logo presentation have been lightly refined, and class-card metadata typography has been kept consistent for readability. Existing sections, interactions, mobile layout, and the current design direction are preserved.
