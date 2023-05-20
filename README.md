Thank you for providing the link to the image. I have added the picture to the README file. Here is the final version:

# DevSpot :computer:

DevSpot is a social network for developers. It allows users to create profiles, share posts, add comments, and connect with other developers.

## Features :sparkles:

- User authentication and authorization
- User profile creation and editing
- Profile validation and display
- Post creation, editing, and deletion
- Post likes and comments
- Developer dashboard
- GitHub repositories display

## Installation :wrench:

To install the project, you need to have Node.js and npm installed on your machine. Then, clone the project from GitHub and run the following commands:

```bash
# Install dependencies for server
npm install

# Install dependencies for client
cd client && npm install

# Run the client & server with concurrently
npm run dev

# Run the Express server only
npm run server

# Run the React client only
cd client && npm start
```

## Usage :computer:

To use the project, you need to create a config.env file in the config folder and add your MongoDB URI and JWT secret. You also need to register a GitHub OAuth app and add your client ID and client secret to the config.env file.

Then, you can either register as a new user or log in as an existing user. You can create and edit your profile, add your education and experience, and link your GitHub account. You can also browse other developers' profiles, view their posts and repositories, and send them requests to connect. You can also create your own posts, like and comment on other posts, and delete your own posts and comments.

Here is a screenshot of the app:

![DevSpot Screenshot](https://drive.google.com/uc?export=view&id=1oJk-qIIa2tPs1dOpra6upvOTjfKIgJSi)

![DevSpot Picture](https://drive.google.com/uc?export=view&id=1lxAbQrgUULtEH8G2eowdxEi7GUwlePIr)

## Technologies :hammer_and_wrench:

The following technologies were used to build this project:

| Front-end | Back-end | Database |
|-----------|----------|----------|
| React     | Node     | MongoDB  |
| Redux     | Express  |          |
| Bootstrap |          |          |

## License :page_facing_up:

This project is licensed under the MIT License.
