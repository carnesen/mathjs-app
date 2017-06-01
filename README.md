# @carnesen/mathjs-app
[![Build Status](https://travis-ci.org/carnesen/mathjs-app.svg?branch=master)](https://travis-ci.org/carnesen/mathjs-app)

## Install
Prerequisites:
  - [Node.js v6 or later](https://nodejs.org/en/download/)
  
To run the application from the source code (requires [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)):

```
git clone https://github.com/carnesen/mathjs-app.git
cd mathjs-app
npm install
npm build
npm start
```

At that point the application should be running and serving its browser application at [http://localhost:8000](http://localhost:8000)

## How it works
This full-stack application is written in JavaScript, html, and css. The source code lives in the [src](src) directory, divided into code that only runs server side, code that only runs in the browser app, and shared "isomorphic" code. The entry point for the server-side and browser applications are [src/server/index.js](src/server/index.js) and [src/browser/index.js](src/browser/index.js), respectively.

The browser application is built on [React](https://facebook.github.io/react/). It allows the user to calculate mathematical expressions (e.g. "4+4") using the [Math.js](http://mathjs.org/) library. When the user submits an expression for calculation, it gets added to the right-hand column of results below the expression input box. Each expression and its result also gets sent to the back end by an http request. The back end retains a list of the ten most recent calculations submitted by all users. This list gets synchronized in real time to all connected browsers via [WebSockets](https://en.wikipedia.org/wiki/WebSocket) implemented with [Socket.io](http://socket.io/). The list of the ten most recent calculations across all users shows up as the left-hand column of results below the expression input box. The state of the applications both server- and browser-side is maintained as a [Redux](http://redux.js.org/) store. Because this is a toy application unlikely to actually have multiple concurrent users, the back end simulates user activity by submitting new calculations every few seconds.
