# BEST Quiz

This is a challenge for you to practice what you learned about Vue 3.
This project is already set up using Vite, Vue 3 and ExpressJS for the backend.
You should only modify the files within the `src` folder to render the quiz and interact with the backend.

## How to get the project started

You need to run the following commands to start both backend and frontend of this application:
```bash
npm ci
npm run backend
npm run dev
```

## The available endpoints are the next ones:

```GET http://localhost:3000/questions/```

It returns an array containing the list of questions to be displayed:

```javascript
[
  {
    id: Number,
    statement: String,
    options: String[],
  },
  ...
]
```

```POST http://localhost:3000/questions/```

It expects to send in the body of the request an array containing the answers to the questions using the following format:
```javascript
[
    {
        id: Number,
        text: String,
    },
    ...
]
```
And then it returns the number of questions that were guessed right:
```javascript
result: Number
```

## How to add new questions

You can add new questions by editing the file `api/questions.cjs` and then restarting the backend.