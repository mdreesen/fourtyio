- Please create a user with the fields of username(unique), email(unique), first_name, last_name, and a password.
- The routes for creating a user "in-app" are not yet present.
- Please use dbeaver or another sql db manager to create a user.

- Once a user is created, hit "/login" with a post request with a valid username and password to login.
- You can use "/login" with a get request to check your session status.
- Use "/logout" with a delete request to log the user out and destroy the session in redis.
