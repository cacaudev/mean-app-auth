# MEAN Authentication API 

API for registering users with mongodb and authentication using a JWT(Json Web Token).
    Uses:
  - MongoDB(mLab for testing), Express, Angular and NodeJS 
  - Passport, JWT and JWT Strategy
  - CORS

  Deployed To: http://mean-app-angular.herokuapp.com
  
# How JSON Web Token Work
  
  In authentication, when the user successfully logs in using his credentials, a JSON Web Token will be returned
  and must be saved locally (typically in local storage, but cookies can be also used), instead of the traditional 
  approach of creating a session in the server and returning a cookie.

  Whenever the user wants to access a protected route, it should send the JWT, typically in the Authorization header
  using the Bearer schema. 
  
  This is a stateless authentication mechanism as the user state is never saved in the server memory. The server’s 
  protected routes will check for a valid JWT in the Authorization header, and if it is there, the user will be allowed.
  As JWTs are self-contained, all the necessary information is there, reducing the need to go back and forth to the database.

  Source: https://ponyfoo.com/articles/json-web-tokens-vs-session-cookies

# How CORS Work

  Cross-origin resource sharing (CORS) allows AJAX requests to skip the Same-origin policy and access resources from remote hosts.
  CORS exists for security reasons and to limit which resources a browser can gain access to, from another website. Let’s say our site exists at http://someexampledomain.com and we want the JavaScript files on that site to access http://anotherdomain.com, we can’t do that unless the server at http://anotherdomain.com allows it.

  ### app.js
    var express = require('express');
    var cors = require('cors');
    var app = express();

    app.use(cors());