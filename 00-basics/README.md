<!-- Vue Basics -->
# What is Vue.js?

A JS F/W for building web user interfaces

# Why Vue.js?

1. Approachable
Builds on top of standard HTML, CSS, JS with intuitive API & world class documentation.
2. Performant
A reactive, complier-optimized rendering system that rarely requires manual optimization.
3. Versatil
A rich, incrementally adoptable ecosystem that scales btw a library & a full-featured framework.
4. Community First
5. Enterprise Proven

## 1. Creating a Vue App

add the below script tag into the HTML file, it will allow you to use Vue

``` html
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script>
    const { createApp } = Vue
    const app = createApp({
        data(){
            return {
                message : "Hi There from Vue Data",
                numbers : [1,2,3,4,5]
            }
        }
    });
    app.mount("#app")
</script>
```

1. createApp is global API function to create out Application instance. The createApp function takes an options object as its first parameter which specify the options & initial condition of our Vue App.
2. The Application instance can also return data that needs to be handled within the view. This data must be specified within a data function in the instance. This is how we’ll arrange the connection
between the data in our return data or Object and the template view.
3. We’re chaining a mount() function which allows us to specify the HTML element with the id of app to be the mounting point of our Vue application. Anywhere within this element can Vue JavaScript code now be used.

## 1. Data Binding or Rendering data in View or HTML

the Mustache syntax is not ment to print of the data, but does evaluates the javascript syntax

```html
<div id="app">
    <p> {{ message }} </p>
</div>
```

```html
<div id="app">
    <p> {{ message.toUpperCase() }} </p>
</div>
```

## 3. Condition render

the string intepolation syntax or ‘Mustache’ however cannot be used in HTML attributes like href , id , src etc. Vue
provides the native v-bind:src, v-bind:href , v-if, v-else, v-for attribute (this is known as a Vue directive) to bind HTML attributes.
We’ll use this directive to update the src attributes in our template.

```html
<div id="app">
    <p v-if="message.length % 2 === 0"> Even: {{ message }} </p>
    <p v-else> Even: {{ message }} </p>
</div>
```

```html
<div id="app">
    <p v-for="number in numbers"> {{ number }} </p>
</div>
```


