<h1 align="center">Welcome to One Dionys - JWT Authentication Middleware! 👋 </h1>

<p align="center">Middleware to handle JSON Web Token (JWT) token-based authentication within the application server. 💖 </p>

<p align="center">
<img src="https://img.shields.io/github/contributors/onedionys/onedionys-jwt-authentication-middleware?style=flat-square">
<img src="https://img.shields.io/github/issues/onedionys/onedionys-jwt-authentication-middleware?style=flat-square">
<img src="https://img.shields.io/github/stars/onedionys/onedionys-jwt-authentication-middleware?style=flat-square"> 
<img src="https://img.shields.io/github/forks/onedionys/onedionys-jwt-authentication-middleware?style=flat-square">
<img src="https://img.shields.io/github/last-commit/onedionys/onedionys-jwt-authentication-middleware.svg?style=flat-square">
<img src="https://img.shields.io/github/languages/code-size/onedionys/onedionys-jwt-authentication-middleware?style=flat-square">
<img src="https://img.shields.io/github/license/onedionys/onedionys-jwt-authentication-middleware?style=flat-square">
</p>

## 💾 Requirements

* `Web Browser` - Can be used as an emulator to build applications. Example [Chrome, Firefox, Safari & Opera].
* `Internet` - Because many use CDN and to make it easier to find solutions to all problems.

## 🎯 How To Use

#### Example Syntax

```javascript
const express = require('express');
const jwtAuthenticationMiddleware = require('./src/jwtAuthenticationMiddleware');

const app = express();

// Apply JWT authentication middleware to all routes
app.use(jwtAuthenticationMiddleware);

// Protected routes...
```

#### Explanation

* This middleware verifies the presence and validity of JWT tokens passed in the HTTP headers. If the token is missing or invalid, it responds with a 401 Unauthorized error. If the token is valid, it attaches the decoded token payload to the request object for further processing.

#### Return Value

* The middleware returns a 401 Unauthorized error if the token is missing or invalid. Otherwise, it calls the next middleware function in the chain.

## 📆 Release Date

* v1.0.0 : 17 March 2024

## 🧑 Author

* Facebook : <a href="https://www.facebook.com/theonedionys"> Oned Ionys</a>
* Instagram : <a href="https://www.instagram.com/onedionys/"> @onedionys</a>
* Twitter : <a href="https://twitter.com/onedionys"> @onedionys</a>
* LinkedIn :  <a href="https://www.linkedin.com/in/onedionys/"> @onedionys</a>

## 📝 License

* Copyright © 2024 One Dionys
* **One Dionys - JWT Authentication Middleware is an open source project licensed under the MIT license**

## ☕️ Suppport & Donation

Love One Dionys - JWT Authentication Middleware? Support this project by donating or sharing with others in need.

<a href="https://www.buymeacoffee.com/onedionys"><img src="https://img.shields.io/badge/Buy_Me_A_Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black"/> </a>

**Made with ❤️ One Dionys**
