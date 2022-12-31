# web_development_final_project
E-commerce website for buying/selling/reviewing vintage vinyl records.
## Group members:
B. Lucian Tisdale (myself)<br>
Christopher Schelb<br>
Ragunath Reddy Arava<br>
Saloni Sunil Patil<br>
## Background:
This was an open-ended group project for web development course. We chose to do an e-commerce site for buying/selling vinyl records. The requirements were long and complex and involved how the backend server was to be created and how the navigation between pages were to be done. The website is attached to a MongoDB database which stores user information, album reviews, following data, and listing data, created by sellers, which includes album info and price. Another requirement was that the search results had to come from an external API. The site we came up with is fun (if you're a music lover) and colorful.
## Features:
* Different info displayed for logged-in users compared to guest user
* User types: buyer, seller, admin
* Home Page: displays wish list for logged-in user
* Profile Page: shows user info, hides sensitive info if not the current user, displays reviews left by user
* Edit Profile Page: allows changes to be made to current user's info, saved in database
* Login/Register Page: allows user to login or create a new profile, handles errors
* Search Bar: Allows to search an API to get album information, sellers can then create listings with prices from this information; album can be added to wish list or added to cart
* Shopping cart: a simple cart to simulate a purchase (we don't actually ask for credit card info!)
* Users can follow or unfollow other users
* Logged-in users can leave reviews of their favorite albums
## How to run locally
Open project in IntelliJ. Open two terminals.
For React.js frontend project, cd into team-apts-CS5610-final-project and type "npm start"
```
cd team-apts-CS5610-final-project
npm start
```
In the second terminal, for Node.js backend server, cd into app-server-backend and run "node index.js"
```
cd team-apts-CS5610-final-project
cd app-server-backend
node index.js
```
***
![home-page-capture](https://user-images.githubusercontent.com/53150782/210153170-009554c0-9613-450a-898a-1eb788b59ce9.PNG)
***
![login-page-capture](https://user-images.githubusercontent.com/53150782/210153181-73ad010b-ea41-4cc7-b4f6-8ec7b248a032.PNG)
***
![Bob-Cat-profile-capture](https://user-images.githubusercontent.com/53150782/210153186-07e2bf1e-59fe-41c0-89a4-a10dd62da5a3.PNG)
***
![details-page-capture](https://user-images.githubusercontent.com/53150782/210153188-35a754c9-d3f3-4dd9-b6da-0f36d248617e.PNG)
