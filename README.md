# Book Search Engine (Refactoring)
(Richard Ay - December 2020)


## Table of Contents
* [Project Objective](#project-objective)
* [Acceptance Criteria](#acceptance-criteria)
* [Technologies Used](#technologies-used)
* [Deployment Link](#deployment-link)
* [Application Screen Shot](#application-screen-shot)


## Project Objective
As an avid reader I want to search for new books to read so that I can keep a list of books to purchase.  This project starts with a fully functioning Google Books API, then refactors it to be a GraphQL API built with Apollo Server.  The existing RESTful APIs will be replaced with GraphQL queries and mutations.

## Acceptance Criteria
Given a book search engine:

* When I load the search engine then I am presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button.

* When I click on the Search for Books menu option then I am presented with an input field to search for books and a submit button.

* When I am not logged in and enter a search term in the input field and click the submit button then I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site.

* When I click on the Login/Signup menu option then a modal appears on the screen with a toggle between the option to log in or sign up.

* When the toggle is set to Signup then I am presented with three inputs for a username, an email address, and a password, and a signup button.

* When the toggle is set to Login then I am presented with two inputs for an email address and a password and login button.

* When I enter a valid email address and create a password and click on the signup button then my user account is created and I am logged in to the site.

* When I enter my account’s email address and password and click on the login button then the modal closes and I am logged in to the site.

* When I am logged in to the site then the menu options change to Search for Books, an option to see my saved books, and Logout.

* When I am logged in and enter a search term in the input field and click the submit button then I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site and a button to save a book to my account.

* When I click on the Save button on a book then that book’s information is saved to my account.

* When I click on the option to see my saved books then I am presented with all of the books I have saved to my account, each featuring the book’s title, author, description, image, and a link to that book on the Google Books site and a button to remove a book from my account.

* When I click on the Remove button on a book then that book is deleted from my saved books list.

* When I click on the Logout button then I am logged out of the site and presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button.  


## Technologies Used

* GraphQL
* Apollo Server
* JWT (JSON Web Token)
* NodeJS, Express.JS
* MongoDB
* React



## Deployment Link
The deployment link to display the updated web page is: 
[gh-pages](https://captainrich.github.io/React-Portfolio-R_Ay/) 



## Application Screen Shot

![React-Portfolio-R_Ay Image 1](./src/assets/images/portfolio1.jpg) The first image shows the 'about me' page.

![React-Portfolio-R_Ay Image 2](./src/assets/images/portfolio2.jpg) The second image shows the top-most view of the portfolio page.

![React-Portfolio-R_Ay Image 3](./src/assets/images/portfolio3.jpg) The third image shows the skills and capabilities page.

![React-Portfolio-R_Ay Image 3](./src/assets/images/portfolio4.jpg) The third image shows  the 'contact me' page.


