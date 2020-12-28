Book-Search Refactoring
(Richard Ay, Dec-Jan 2020/21)

This file lists the refactoring steps followed to convert the 'Book Search' application
from a RESTfulAPI to a GraphQL API built with Apollo Server.



# Refactoring Steps

1) Copy package.json from 'deep-thoughts\client\package.json' and replace book-search\client\package.json
2) Copy package.json from 'deep-thoughts\server\package.json' and replace book-search\server\package.json.  Remove the 'seed' script line.
3) copy package.json from 'deep-thoughts\package.json' and replace book-search\package.json.  Change the name at the top from 'deep-thoughts' to 'book-search'.  In the script section, remove the 'seed' script.  Update the GIT URLs.