## Requirements
* NodeJS 18
* MongoDB

## Get Started
1. Run MongoDB locally at 127.0.0.1:27017
2. Clone this repo
3. npm i
4. node reset-database.js
5. npm start

## Troubleshooting
* Make sure NodeJS version is 18: node -v
* Make sure MongoDB is running locally: https://stackoverflow.com/questions/31561098/how-to-check-if-mongo-db-is-running-on-mac
* Check what port Mongo is running on: https://stackoverflow.com/questions/9346431/how-can-i-see-what-ports-mongo-is-listening-on-from-mongo-shell
* To run Mongo shell: mongo
* When testing POST/PUT w/Postman, make sure Content-Type header is application/json and use "raw" body
* Reset Git remote: git remote set-url origin https://yourusername@github.com/user/repo.git

## Miscellaneous Links
Mongo shell commands - https://www.mongodb.com/docs/mongodb-shell/crud/insert/
