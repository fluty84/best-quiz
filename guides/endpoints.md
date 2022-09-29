# Available endpoints

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

It returns an array containing a list containing 5 random questions to be displayed. The questions are picked and sorted randomly, and the possible answers too. The format should be the following:

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