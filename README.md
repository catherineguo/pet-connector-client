# PetConnector - Client
My second project is a full-stack web app that allows pet owners to create and save checklists to share with pet sitters.

- Deployed front end: https://catherineguo.github.io/pet-connector-client/
- Back end repo: https://github.com/catherineguo/pet-connector-api
- Deployed back end: https://floating-lake-10570.herokuapp.com/

Technologies used in this project: JavaScript, Handlebars, jQuery, AJAX, Bootstrap, Sass, Ruby on Rails, PostgreSQL.

## How it works
To use PetConnector, you'll need to create an account. Once you have an account, you can simply click "New Checklist" to create a new checklist. Your checklists are automatically saved so you can view and edit them later. You can also delete checklists that you don't need anymore by clicking the "Delete" button beneath the checklist you want to remove.

It's that simple!

## Planning
My favorite part of planning any web app is drawing the wireframes. For this project, I wanted to keep the functionality in the nav bar at the top, and display checklists beneath the nav bar. You can see that in my wireframes: https://i.imgur.com/zRxK5hH.jpg

The following user stories guided my project design and goals:

1. As a user, I want to be able to create a checklist and save it so I can view or edit it in the future.
2. As a user, I want to be able to edit checklists that I've created.
3. As a user, I want to be able to delete checklists that I've created.
4. As a user, I want to be able to view all of the checklists I've created so I can refer to old checklists when I create new ones.
5. As a user, I want to be able to share the checklists with a pet sitter. (Whether it's via email, downloading as a PDF, sending a URL, etc.)

To view the ERDs for this project, please refer to the back end repo: https://github.com/catherineguo/pet-connector-api

## Development
After setting up the back end using Ruby on Rails, I spent the majority of my time on this project building out the front end interface. I used Handlebars to handle (no pun intended) displaying the checklists fetched from the server. I incorporated more modals in this project than in my first one because I thought it was the best way to display the "new checklist" and "edit checklist" forms. At first, when I created the "edit checklist" form, I left the fields blank, which inevitably led to the problem of blank fields overwriting fields that already had data. I realized I could populate the fields in the edit form by making a GET request for the specific checklist and populating the fields with the data currently in the database.

Overall, I'm quite pleased with how the front end turned out (mostly thanks to Bootstrap for styling).

## Unsolved Problems
- "New Checklist" button changes to green color when clicked because it is a modified Bootstrap Success button.
- Order of checklists seems random (not sorted by ID, date created, date updated, etc.)

## Future Updates
- Add v2 database: checklist items table. Somehow make the items table provide suggestions to the user about what to put in their checklists if something is repeated over and over.
- Enable some form of sharing the checklist: email, export to PDF, copy to clipboard?
