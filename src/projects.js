export const projects = [
    {
        "img": "./images/Movie1.png", 
        "title": "What We Watchin'", 
        "description": [
            {
                "intro": "React Native social media app where users can come together and share their recommendations of movies/Tv shows they would like to watch with friends.",
                "use" : "The problem - How often do we find ourselves planning a movie night with friends and don’t know what to watch? We find ourselves scrolling for hours on Netflix or Hulu trying to find the right movie. By the time we pick something that looks half decent, the popcorn is all gone and everyone is already tired. A failed movie night.",
                "show" : "The Solution - What We Watchin’ - A React Native social media app where users can come together and share movies or tv shows that they’d recommend, or want to watch soon. This app provides interaction with your friends by clicking on one’s profile and seeing what tv shows or movies they really enjoyed watching. My app solves the issue of spending countless hours trying to find something to watch when planning a movie night."
            }
        ],
        "technologies": "React Native optimized for IOS and Android. Ruby on Rails MVC framework for creating a backend API server. PostgreSQL database for persisting user accounts, watch later playlists, and user friendships. OMDB API (Open Movie Database)",
        "code": "https://github.com/Barak-S/Movies-App",
        "details": [ 
            {
                "img": "./images/Movie3.png", 
            }, 
            { 
                "img": "./images/Movie2.png",
            },
            { 
                "img": "./images/Movie6.png",
            },
            { 
                "img": "./images/Movie4.png",
            },
            { 
                "img": "./images/Movie5.png",
            },
        ]
    }, 
    {
        "img": "./images/TechLounge1.jpg", 
        "title": "Tech Lounge", 
        "description": [
            {
                "intro": "A JavaScript landing page utilizing the GSAP animations library for creating a professional and interactive landing page.",
                "use" : "Using React Hooks and GSAP, the user is able to dynamically re-render the background image while maintaining the CSS Keyframes animation flow. In addition to its responsive design, The Tech Lounge React app is an incredibly modern landing page that displays industry standard UX/UI design principles.",
            }
        ],
        "technologies": "React.js, GSAP (GreenSock Animation Platform), React Bootstrap, React Hooks.",
        "code": "https://github.com/Barak-S/Tech-Lounge-v2",
        "live": "https://tech-lounge-v2.vercel.app/",
        "details": [ 
            {
                "img": "./images/TechLounge2.jpg", 
            }, 
            { 
                "img": "./images/TechLounge3.jpg",
            },
        ]
    }, 
    {
        "img": "./images/AllLoans2.png", 
        "title": "Mortage Loan Calculator", 
        "description": [
            {
                "intro": "Full Stack web application created for calculating commercial and residential property mortgages.",
                "use": "Using react-router-dom, the calculator tab in the the nav bar takes the user to the real estate mortgage calculators. From there you can select from the dropdown to use either the “Multi-Family Max Refi” calculator for calculating multi family properties, or the “1-4 Family” property calculator.",
                "show": "Loans are saved using a node.js server and a MongoDB database. All saved loans can be viewed in the “All Loans” tab in the nav bar. From here, users can click on a loan to be taken to the loan show page where a Google Maps API is integrated for a dynamic map and street view of the loan address. Users can also edit and update loan details."
            }
        ],
        "technologies": "Express.js backend server for creating API routes and handling user requests, React.js Single Page application designed with an interactive user experience for calculating and creating loans, Utilized Google Maps API for address auto-complete and map integration, MongoDB for persisting properties, users, and loan details",
        "code": "https://github.com/Barak-S/SNCO-Calculator",
        "live": "https://snco-calculator.vercel.app/",
        "details": [ 
            {
                "img": "./images/MaxRefi2.png", 
            }, 
            { 
                "img": "./images/Fix&Flip2.png",
            },
            {
                "img": "./images/AllLoans2.png"
            },
            {
                "img": "./images/LoanShow2.png"
            },
            {
                "img": "./images/LoanEdit2.png"
            }
        ]
    },
    {
        "img": "./images/SkateSpot1.jpg", 
        "title": "Skate Park Finder", 
        "description": [
            {
                "intro": "A web app created for the skateboarding community where users can upload new skate spots/ skate parks, and see all the nearby places to skate.",
                "use": "Using the Google Maps API for address auto-complete, users can upload a skate spot or skate park, and list which kind of feature the park has.",
                "show": "Based on the users current location, and the latitude and longitude for each skate park, the distance in miles from the user is calculated and can be filtered in distance using the dropdown to display all the skate parks nearby."
            }
        ],
        "technologies": "MERN Stack, MongoDB for persisting user accounts, skate parks, and skate park likes. Passport.js for Open Authorization using JSON Web Tokens, React Leaflet, Google Maps API, Redux for state management.",
        "code": "https://github.com/Barak-S/React-Leaflet-App",
        "details": [ 
            {
                "img": "./images/SkateSpot2.jpg", 
            }, 
            { 
                "img": "./images/SkateSpot3.jpg",
            },
            {
                "img": "./images/SkateSpot1.jpg"
            },
        ]
    },
    {
        "img": "./images/Covid1.png", 
        "title": "Covid-19 Data UI", 
        "description": [
            {
                "intro": "This project was created back in march of 2020, when the Coronavirus outbreak was extremely rapid worldwide. This app is intended for tracking daily updates for every country's covid-19 infection statistics.",
                "use" : " The Covid-19 data that is displayed in the app is from an open-source Covid-19 API which can be found at 'https://covid2019-api.herokuapp.com/docs'.",
                "show" : "By default, the data is displayed in descending order from most confirmed cases to least. Clicking or selecting on the table headers will dynamically re-render the results based on the title of the header. The search bar in the top left will also filter through countires based on the search query from the user."
            }
        ],
        "technologies": "React.js, React Bootstrap, open-source Covid-19 statistic API",
        "code": "https://github.com/Barak-S/Covid-19-UI",
        "live": "https://covid-19-ui.now.sh/",
        "details": [ 
            {
                "img": "./images/Covid1.png", 
            }, 
            { 
                "img": "./images/Covid3.png",
            },
        ]
    },
    {
        "img": "./images/CozyCabins1.png", 
        "title": "Cozy Cabins", 
        "description": [
            {
                "intro": "Real Estate Application where users can list their homes for sale, and favorite other users listing for potential purchase.",
                "use" : "Create an account and post a listing to the webiste. Search all Listings on the webiste by state and add a listing to your wish list.",
                "show" : "A listing's show page uses embeded ruby and JavaScript for a dynamic map and street view, using the Google Maps API."
            }
        ],
        "technologies": "Ruby on Rails application making use of MVC framework and setting up custom routes, Google Maps API for property listing’s show pages, SQLite3 database for persisting user accounts, property listings, and user wish lists",
        "code": "https://github.com/hasibulc/cozy-cabins",
        "details": [ 
            {
                "img": "./images/CozyCabins2.png", 
            }, 
            { 
                "img": "./images/CozyCabins3.png",
            }
        ]
    },
    {
        "img": "./images/PirateWars1.png", 
        "title": "Pirate Wars", 
        "description": [
            {
                "intro": "JavaScript application game that models after the classic Battleship board game with its own unique touch in styling and gameplay.",
                "use" : "Arcade styled gameplay. Create a username and get to playing. Place ships on game board by clicking and placing on grid. Ships by default are placed horizontally. Select ship and then rotate before placing to change orientation.",
                "show" : "Rules - Take turns firing shots by selecting coordinates on computer grid. If a player hits the opponent's boat, the coordinate turns red indicating a ship was hit. Player gets to go again. A ship is sunk when all the coordinates for each boat are hit. The coordinate turns black indicating a sunken ship."
            }
        ],
        "technologies": "Ruby on Rails backend API for creating and updating the game leaderboard based on users gameplay, Vanilla JavaScript front end for creating the game board, gameplay, and DOM manipulation, PostgreSQL database for persisting a leaderboard for usernames and player scores",
        "live": "http://pirate-wars.herokuapp.com/",
        "details": [ 
            {
                "img": "./images/PirateWars2.png", 
            }, 
            { 
                "img": "./images/PirateWars3.png",
            },
            { 
                "img": "./images/PirateWars4.png",
            }
            ]
        }
    ]
