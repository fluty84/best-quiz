# BEST Quiz

This is a challenge for you to practice what you learned about Vue 3.
This project is already set up using Vite, Vue 3 and ExpressJS for the backend.
You should only modify the files within the `src` folder to render the quiz and interact with the backend.

## Requirements

Have `npm`, `node` and `git` installed.
It's recommended to use at least the following versions:
* npm 8.5.5
* node 16.15.0
* git 2.24.3

The code can run in Linux, MacOS or any virtual machine containing the former.

## How to get the project started

You need to run the following commands to start both backend and frontend of this application:
```bash
git clone git@github.com:fgordillo/best-quiz.git
npm ci
npm run backend
npm run dev
```

## The available endpoints are the next ones:

```GET http://localhost:3000/random-question/```

It returns an object containing one of the questions available

```javascript
{
  id: Number,
  statement: String,
  options: String[],
}
```

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

It expects to receive in the body of the request an array containing the answers to the questions using the following format:
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

```POST http://localhost:3000/questions/{id}```

It expects to receive in the body of the request a string containing the answer to a certain question defined in the URL by its `id`:
```javascript
answer: String
```
And then it returns if the answer was right or not:
```javascript
result: Boolean
```
In case it doesn't find the question, it will return a 400 error

## The exercise
1. Adjust `App.vue` or create a new view so it loads the questions from the backend ([axios](https://axios-http.com/docs/intro) is already installed, feel free to use it). You can also remove the HelloWorld and anything that is not relevant to this challenge.
2. Render the list of questions using [v-for](https://vuejs.org/guide/essentials/list.html).
3. Create a [component](https://vuejs.org/guide/essentials/component-basics.html) to render each question and its options.
4. Communicate the components created with the main view using [props](https://vuejs.org/guide/components/props.html) and [events](https://vuejs.org/guide/components/events.html).
5. Store the answers to the questions in the main view and send them to the backend via `POST` request to check how many you got right.
6. Show the result of the quiz.
7. Let the user restart the quiz.
8. Extra 1: Shuffle the order of the questions.
9. Extra 2: Show one question at a time.
10. Extra 3: Shuffle the order of the options to choose from in each question.
11. Extra 4: Let the user restart the quiz.
12. Extra 5: Store the maximum score and show it to the user.

## How to add new questions

You can add new questions by editing the file `api/questions.cjs` and then restarting the backend.