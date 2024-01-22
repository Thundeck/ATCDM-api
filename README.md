# ATC - Dream Match

Have you ever thought about watching a 5-a-side soccer game with your favorite players from around the world?
Choose your crest, the name of the team and make your dream match come true!

## Built with 🛠️

MongoDB - NoSQL database used
Mongoose - Used for modeling the application data
Express.js - Framework for Node.js

## Installation

Follow these steps to install and configure this project on your local machine:

- Clone this repository with `git clone https://github.com/Thundeck/ATCDM-api.git`.
- Install the dependencies with `npm install`.
- Make a copy of the `env.example` file, rename it to `.env` and fill it with your values.

## Usage

To start the project, run `npm start`. Then connect to `http://localhost:3001` from the frontend.

#Endpoints

/team/
-GET:retrieves all created devices from the database
-POST:creates a team with the data received by req.body

/team/:id
-GET:with the received id returns the team data 
-PUT:with the received id search and update the desired team
-DELETE:with the received id searches and deletes the desired team, and the players created by it to avoid overloading the database.

/player/:teamId
-POST:with the received id check the existence of the team, if it exists create and add the new player to the team

/player/:playerId/:teamId
-DELETE:verifies the existence of the received team and player, removes the player from the team's array and finally deletes the player

## Contribution

Contributions are welcome. To contribute:

1. make a fork of this repository.
2. Create a new branch with `git checkout -b name-of-your-branch`.
3. Make your changes and then commit your changes with `git commit -m 'Description of your changes'`.
4. Push your branch with `git push origin branch-name`.
5. Create a new pull request from your fork.

## License

This project is licensed under the MIT license.

## Contact

If you have any questions or comments, feel free to contact me:

- GitHub: Thundeck
- Email: briangleguizamon@gmail.com or thundekk@gmail.com
- Linkedin: https://www.linkedin.com/in/thundeck/
