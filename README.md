Users Directory Web Application: 
A lightweight, vanilla JavaScript web application that fetches remote user data from a REST API and dynamically renders user profile cards with loading and error state management.

Features
Asynchronous Data Fetching: Uses modern JavaScript async/await to retrieve data from the JSONPlaceholder mock API.

Loading State Management: Displays a loader while waiting for the network response and cleanly removes it using a finally block once the request settles.

Dynamic DOM Manipulation: Iterates through user records to create and inject card components with contact details, location, and company information.

Error Handling: Implements a try...catch block to capture network failures or parsing issues.

Tech Stack
HTML5: Semantic markup and layout structure.

CSS3: Flexbox-based responsive grid layout and hover transitions.

JavaScript (ES6+): Fetch API, Promises, async/await, and DOM manipulation.

Data Source: JSONPlaceholder Users API
