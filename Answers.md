1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

One method used is forEach(), this does not produce any side effects when used. A second is .find(), it does not produce any side effects as it only returns a boolean. A third is super(), this is used to extend properties to another object and does not produce any side effects.

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are the various events and potential outcomes to those events in your app. Actions will usually have 3 conditions, a starting phase, a success, and a failure. They will perform various actions based on what the outcome is. These actions are then passed to the reducers. Reducers are where changes to the store (state) happen. Their job is to modify the store as is necessary based on the action type sent to them. The store is where all the state for the app is stored. It is known as a 'single source of truth' because it is the one place that app data should be stored.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is state that the whole application needs and has access to, whereas Component state is state that only one specific component or component tree has access to. They both have their uses. For example Application state is used for data that the whole app needs, such as user information when a user logs onto a website. Component state is very useful for UI state, such as updating what is shown in an input field.

1.  What is middleware?

Middleware is a piece of code that injects itself into a piece of synchronous code and allows for asynchronous operations.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-thunk allows developers to pass in a function rather than an object to a reducer. It allows you to pass in a function rather than an object.

1.  Which `react-redux` method links up our `components` with our `redux store`?

Connect
