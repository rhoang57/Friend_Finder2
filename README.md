# Friend-Finder
A full-stack web app that allows users to answer 10 basic questions about themselves and find their closest match base on their corresponding answers.

Technologies Used:
JavaScript
jQuery
node.js
Express.js
HTML
Chosen for drop down menu styling
Bootstrap

Code Explanation:
Our server.js file sets up the Express server, specifying our port number, the npm packages that need to be loaded, and also the routes, which we have externalized
There are 2 separate HTML files (home.html and survey.html) that serve as the front-end portion of the app; they determine what the user sees (a bare-bones homepage to allow user to start survery and the survey page, which has the survery and will also show the resulting best match in a pop up modal).
Our 2 routing files (htmlRoutes.js and apiRoutes.js): The HTML routes are used to route users based on their browser input and the API routes are to store server-side data.
The best match is calculated by finding the user with the closest scores to the users in the server. The total difference is calculated by the sum of the absolute differences on a per-question basis. 
A modal is then toggled, displaying the the best match to the person who just took the survey. jQuery is used to dynamically insert the proper name of the closest match and targets the source attribute of the image element to find a link of the person to display.
Two default profiles with the name "Slimer" and "Barack Obama" are added to the friends.js file to ensure that the first user will people to compare with.
