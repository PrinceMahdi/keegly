# Keegly
It allows for creating and sharing your very own online portfolio through a physical card that can be tapped to the back of your phone.


## Authors

- [@princemahdi](https://www.github.com/princemahdi)



## Lessons Learned

This project was tons of fun to make and I'm proud of how far I managed to take it in less than 14 days. I'll be continuously improving it and adding more and more features to it. Here are some of the lessons I learned:

- At first I was a little bit ambitious and didn't account for things that are out of my control (life) going wrong as well.
- Although back-end may not seem like the priority at first, I think it's better to get that out of the way and make sure everything works perfectly before moving on to the front-end. You end up saving tons of time later down the road.
- Focus on functionality first before styling

## Tech Stack

**Client:** React, Sass, JavaScript

**Server:** Node, Express


## Dependencies

**Client:**

    "@emailjs/browser": "^3.10.0",
    "@stripe/react-stripe-js": "^1.16.1",
    "@stripe/stripe-js": "^1.46.0",
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "axios": "^1.2.0",
    "cors": "^2.8.5",
    "multiselect-react-dropdown": "^2.0.25",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-icons": "^4.6.0",
    "react-router-dom": "^6.4.3",
    "react-scripts": "5.0.1",
    "react-stripe-checkout": "^2.6.3",
    "sass": "^1.56.1",
    "uuid": "^9.0.0",
    "web-vitals": "^2.1.4"

**Server:**

    "axios": "^1.2.0",
    "body-parser": "^1.20.1",
    "cookie-session": "^2.0.0",
    "cors": "^2.8.5",
    "dotenv": "^16.0.3",
    "express": "^4.18.2",
    "passport": "^0.5.3",
    "passport-google-oauth20": "^2.0.0",
    "stripe": "^11.3.0",
    "uuid": "^9.0.0"

#### Dev Dependencies

    "nodemon": "^2.0.20"


## Color Reference

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Primary | ![#181818](https://via.placeholder.com/10/181818?text=+) #181818 |
| Secondary | ![#2e66e5](https://via.placeholder.com/10/2e66e5?text=+) #2e66e5 |
| Validation | ![#23dc3d](https://via.placeholder.com/10/23dc3d?text=+) #23dc3d |
| Error | ![#ff0000](https://via.placeholder.com/10/ff0000?text=+) #ff0000 |


## Installation

Download the ZIP folder

Install with npm

```bash
  cd keegly
  npm install
  npm run dev
```
   
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

#### Front-end .env file:
`REACT_APP_STRIPE_PUBLISHABLE_KEY`
#### Back-end .env file:
`GOOGLE_CLIENT_ID`

`GOOGLE_CLIENT_SECRET`

`STRIPE_SECRET_KEY`

`SUCCESS_URL = http://localhost:3000/`

`CANCEL_URL = http://localhost:3000/`

`PORT = 8080`


## Feedback

If you have any feedback, please reach out to us at keegly.business@gmail.com
