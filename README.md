# ts-example
Example backend application in TypeScript

### Setup
1. `npm install`
2. `npm start`

This will start the server on port 3000. Go to `localhost:3000` to verify it's working. The server will automatically restart on any file changes.

### Re-building
- If you're using Atom (or another editor) with the correct TypeScript plugin, new JS files should be compiled and added to the `dist` folder automatically.
- You can manually rebuild by running `npm install` again.

### Sample URLs
`http://localhost:3000`
- Will show the default page, mostly used for smoke testing
`http://localhost:3000/users/1`
- Search for the user with ID 1. Other IDs can be substituted
`http://localhost:3000/error`
- Sample error page. Note that the generated source maps are used so the stack trace is correct