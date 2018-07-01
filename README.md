# HomeWork 7


## How to set up project


- Start a terminal for your mongo server.
- Go to <mongodb-install-directory>/bin directory.
- Run the command. ./mongod.

- run `npm i` from root directory


##New endpoints in compare with homework4:


/api/users/:id  DELETE Deletes SINGLE user
/api/products/:id DELETE Deletes SINGLE product
/api/cities GET Returns ALL cities
/api/cities POST Adds NEW city and returns it
/api/cities/:id PUT Updates SINGLE city by id if exists or adds NEW city with the given id otherwise
/api/cities/:id DELETE Deletes SINGLE city
/api/cities/random GET Fetch random city
