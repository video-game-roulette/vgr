# Video Game Roulette

Good work guys - I can tell you all put a lot of effort into this. There are some bugs especially with brand new users but all are very fixable. Let me know if you have any questions about this feedback!

- You a small bug with sign up -- you're not setting the user in context so signing up redirects back to sign in so new users need to basically auth twice -- see below for fix
- The UserContext isn't work because you're not setting the initial state of user from the supabase localStorage session -- this means you have to login every time the page reloads
- Use `/library/new` or `/library/games/new` to make your route RESTful
- Your app doesn't work currently for new users with no games -- it errors out because the data object is empty on the UserProfile component -- you need to guard against empty data
- Nice job on the useForm custom hook
- Your RLS doens't look properly setup -- its allowing read access to the entire table to all users (so I can see everyone's data) - you should update this so that users can only see their own games (similar to the To Do app)
- Dont' forget you can use the `checkError` function on your supabase calls so that your data isn't nested in an object
