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
    <p v-else-if="message.length % 2 === 1"> Old: {{ message }} </p>
    <p v-else> Even: {{ message }} </p>
</div>
```

```html
<div id="app">
    <p v-for="number in numbers"> {{ number }} </p>
</div>
```

```html
<!-- V-Model -->
<!-- v-model can be used on a component to implement a two-way binding -->
<!-- creates a relationship btw the data & instance/component and a form input
so you can dynamically update values -->

<div id="app">
    <textarea v-model="messageText" class="message" rows="5" maxlength="72" />
    <br>
    <p class="booktext">{{ messageText }}</p>
</div>

<script type="text/javascript">
    Vue.createApp({
        return {
            messageText : "render me"
        }
    })
</script>
```

```html
<!-- V-BIND -->
<!-- or -->
<!-- : -->

<!-- V-bind one of the most usefull directives ```v-bind:class or :class``` -->
<div id="app">
    <textarea v-model="tacos" />
    <br>
    <button :class="[tacos ? activeClass : '']">Let us know!</button>
</div>

<script type="text/javascript">
    Vue.createApp({
        return {
            tacos : "",
            activeClass : "active",
        }
    })
</script>

```

```html
<!-- v-for -->
<!-- key is to track changes in the dom, which ele has updated -->
<ul>
    <li v-for="num in 5" :key="num">{{ num }}</li>
</ul>

<!-- for objects -->

<div id="app">
    <p v-for="(value, key, index) in jokes" :key="value">{{index}} : {{key}} : {{value}}</p>
</div>

<script type="text/javascript">
    Vue.createApp({
        return {
            jokes : {
                question : "blah, blah",
                answer : "not blah, It's question",
                response : "groan",
            }            
        }
    })
</script>
```

```html
<!-- v-on -->
<!-- or -->
<!-- @ -->

v-on is great binding to events like click & mouseenter.

<!-- multiple bindings -->
<div v-on="mousedown: doThis, mouseup:doThat">

</div>
<!-- or -->
<div @="mousedown: doThis, mouseup:doThat">

</div>

```

```html
<!-- v-html -->
great for strings that have html elements that need to be rendered!

<p v-html="tacos"></p>

<script>
const app = {
    data (){
        return{
            tacos : `I like <a href="http://www.google.com">tacos</a>`
        }
    }
}

</script>
```

```html
    <!-- v-text -->
    same as {{ }}

    <p>{{ tacos }}</p>
    <!-- or -->
    <p v-text="tacos"></p>

```

v-once will not update once its been rendered
v-pre will print out the inner text exactly how it is, including code

## v-model modifiers

v-model.trim === remove trailing white spaces from the bound string
v-model.number === changes string to number inputs
v-model.lazy won't populate the content automatically, it will wait to bind until the event
 happens, (It listens to change events instead of input) eg. form validation

## event modifiers

@mousemove.stop is comparable to e.stopPropagation()
@mousemove.prevent this is like a e.preventDefault()
@submit.prevent this will no longer reload the page on submission
@click.once this click event will be triggered once.
@click.native so that you can listen to native events in the DOM.

## methods

Are bound to the Vue instance, they are incredibly useful for functions you would like to access in directives
