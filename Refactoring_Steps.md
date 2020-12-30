Book-Search Refactoring
(Richard Ay, Dec-Jan 2020/21)

This file lists the refactoring steps followed to convert the 'Book Search' application
from a RESTfulAPI to a GraphQL API built with Apollo Server.



# Refactoring Steps

1.0) Create a new branch: feature/packages.

1.1) Copy package.json and .gitignore from 'deep-thoughts\client\package.json' and replace book-search\client\package.json. Run 'npm i' from the \client folder.

1.2) Copy package.json from 'deep-thoughts\server\package.json' and replace book-search\server\package.json.  Remove the 'seed' script line. Run 'npm i' from the \server folder.

1.3) Copy package.json and .gitignore from 'deep-thoughts\package.json' and replace book-search\package.json.  Change the name at the top from 'deep-thoughts' to 'book-search'.  In the script section, remove the 'seed' script.  Update the GIT URLs. Run 'npm i' from the \root of the project.

1.4) Copy server.js from the of 'deep-thoughts\server' to 'book-search\server'.

1.6) In \server\config\connection.js, change then name of the project to 'book-search'.

1.7) In \servers, create a new folder \schemas. Copy \schemas\index.js from 'deep-thoughts' to 'book-search'.  Create empty files for 'typeDefs.js' and 'resolvers.js', with basic starting boilerplate.

1.8) In \client\src, copy 'index.js' and 'serviceWorker.js' from 'deep-thoughts' and replace the existing 'index.js' and add 'serviceWorker.js.

1.9) Copy the files in \server\utils from 'deep-thoughts', replacing 'auth.js' and 'dateFormat.js'.

1.10) Update app names in manifest.json.


2.0) Update models and schemas.

2.1) In \models\user.js, add the 'getters'.

2.2) In \models\user.js, trim the username, set minimum password length.


3.0) Update \schemas\typeDefs.js as suggested in the 'hints'.  Query type 'me', Users, Auth, Book.

3.1) Setup the mutations for \schemas\typeDefs.js as suggested in the 'hints'.  This includes the "input type", details can be found at this link: https://graphql.org/graphql-js/mutations-and-input-types/

3.2) Add the mutation CRUD operations to \schemas\resolvers.js.

3.1) CD to the \server directory and "npm run watch" to make sure the backend server can start without errors.


4.0) Setup the front-end specifications.  Begin by copying \src\utils\queries.js and mutations.js from 'deep-thoughts' and place them in \src\utils of 'book-search'.
