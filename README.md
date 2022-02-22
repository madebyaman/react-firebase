# Course Notes

## App requirements

- create, authorize and redirect users.
- store data for users, restaurants, reservations, and more.
- allow profile editing
- allow users to make reservations
- send emails to users for email verification
- allow users to write reviews
- allow restuarant searches
- store pictures of users and restaurants

## App Organization

- Using feature based organization like auth, reservations, reviews etc.
- Top-level features has `index.js` file that exports all the necessary functions and components. It makes up for much nicer imports.
- Other directories
  - auth: for authentication
  - test: for seeding db
  - ui: basic user interface components
  - util: utility methods
  - app: boilerplate for app

## Tips

- Segregate logic of firebase so as to avoid vendor lock-in. For example, don't call signIn method directly, but store it in some wrapper function.
