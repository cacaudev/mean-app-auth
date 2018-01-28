# mean-app-auth

API for registering users with mongodb and authentication using a JWT(Json Web Token).

  Uses:
  - Passport, JWT and JWT Strategy
  
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
