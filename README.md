# Flower Language API
I created this API for a language of flowers dictionary. I felt that online dictionaries are difficult to navigate so I decided to create my own dictionary.

https://flower-language-api.herokuapp.com/

## Technologies Used
- Node.js
- Express
- MongoDB
- Mongoose
- Javascript
See the front end for this project here: https://github.com/awang617/Language-of-Flowers

## Running this project
1. Clone this repo using ```git clone https://github.com/awang617/Flower-Language-API.git```
2. Run ```npm install```
3. Run ```mongobd``` and ```node seed.js``` to seed the database
4. Run ```node server.js``` or ```nodemon```
3. Open ```localhost:3001``` in your preferred browser

## Challenges and Successes
Building this database was a time-consuming task, although it wasn't too difficult. It took a lot of time to compile all the information that I wanted in the dictionary, and presently the database is still not fully complete. Another challenge I encountered was enabling partial search querying on the database. Unfortunately, MongoDB does not have built in capability for partial searches, but I found workaround that worked really well in conjuction with the front end of the project. 

## Future Developments
- Complete full database (only A's are complete along with some other entries. All names and meanings have been inputed so far)
- Create a simple front end for the database

## Learnings
It was nice to work on a MERN stack project again and become familiar with working with Node.js some more. I felt fairly strong with building out a back end, but struggled working by myself to implement the entire database. With 271 entries, the process took a lot of time and after a while, though it is necessary, started to feel like busy work. I like that my app is a full stack Javascript application, but the limitations of MongoDB with partial searching made me wonder about alternative approaches and other technologies that may suite my needs better. I spend some time reading about Elasticsearch.js and gave it a try, but ultimately found it was not necessary and found a different approach. It was a fulfilling process to build my own API.
