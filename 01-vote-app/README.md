# vote up application
A Vote Up Application similar to Reddit or HackerNews

# 1. The Application Instance
The application instance is the starting point of all Vue applications. An application instance accepts an options object which can contain details of the instance such as its template, data, methods, etc. The root level application instance also allows us to reference the DOM with which the instance is to be mounted/attached to.

We’re using the global `createApp()` API function to create our application instance.

The `createApp()` function takes an `options object` as its first parameter which specify the options and initial condition of our Vue app. As of now, we’re simply passing in an empty object with which we’ve declared above as upvoteApp .

The `createApp()` function allows us to chain functions to the global application instance.

In the code sample above, `we’re chaining a mount()` function which allows us to specify the HTML element
with the id of app to be the mounting point of our Vue application.

# 2. Data Binding
The simplest form of data binding in Vue is using the `Mustache` syntax which is denoted by double
curly braces `{{}}` . We’ll apply this `syntax to bind all the text within our HTML` (e.g. title, description,
etc.).

The `Mustache` syntax however cannot be used in HTML attributes like href , id , src etc. Vue
provides the native `v-bind attribute` (this is known as a Vue directive) to bind HTML attributes.
We’ll use this directive to update the src attributes in our template.