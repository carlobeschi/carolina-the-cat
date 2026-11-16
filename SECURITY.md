# Security

You Are a Cat is a game for young children that runs entirely in the browser. It has no accounts. Saves are kept in the browser's local storage, and each cat's save is also kept in a Firestore database under a scrambled id made from the cat's name and its secret four-picture code, so the cat can carry on on another device. Nothing else is sent anywhere.

If you find a way the game or its website could put a player at risk (for example a name or a saved game that runs code, a way to find, list or change someone else's cat in the database, something that sends data anywhere else, or a problem with the service worker), please report it privately using GitHub's **Report a vulnerability** button on the repository's Security tab rather than opening a public issue. Everything else is welcome as a normal issue.

Fixes go into `main` and reach the website (https://carlobeschi.github.io/carolina-the-cat/) and installed apps the next time they open online.
