Sample Express web server

Tech Stack: Node.js, Express, TypeScript, Jest, SuperTest

# Getting Started

>**Note**: Make sure you have node installed

## Step 1: Clone the source code
```bash
git clone https://github.com/mrhadi/loan-offer-node.git
```

## Step 2: Install Dependencies

```bash
npm install
```

## Step 3: Run server

```bash
npm run start-dev
```

## Step 3: Run tests

```bash
npm test
```

# How does it work?
>- The app starting point is app.ts file.
>- We have a module as expressApp that creates an instance of Express and apply the required setup.
>- Server module use this express instance and start it.
>- Some basic express configs and some mocking data have included in the config.ts file.
>- High level routes have defined in routes directory.
>- Routes for each api has defined in api directory, one route for each api.
>- Server side data validation handles by express-validation.
>- For testing, we have Jest + SuperTest that helps to test the apis without running the express server.

