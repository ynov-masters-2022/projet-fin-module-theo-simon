# Welcome to React features showcase 🧙

This project has been created using **webpack-cli**, you can now run

```
yarn serve
```

to start the development server. 


## Quick description

This project aims to show different react core features and famous libraries with the simple scenario of an "e-commerce ✨" web app. 

The different features and their usage will be detailed in this documentation. 

## Features

### React Router

### Contexts

### Suspense

Suspense lets you specify the loading indicator (the ```<Loader />```component here) in case some components in the tree below it are not yet ready to render.

```js
<Suspense fallback={<Loader />}>
  <List />
</Suspense>
```

Suspense lets your components “wait” for an asynchronous API call to fetch some data and then display the UI.
Until react 18.3 it has to be done with sort of ```wrapPromise()``` function like so: 

```js
function wrapPromise(promise) {
  let status = "pending";
  let result;
  let suspender = promise.then(
    (r) => {
      status = "success";
      result = r;
    },
    (e) => {
      status = "error";
      result = e;
    }
  );
  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }
    }
  };
}
```

and then in the ```<List />```component: 

```js
const List = ({ dataProvider }) => {
   const data = dataProvider?.read();
}
```

But for the upcoming react 18.3 it can be achieve with only a new hook called ```use()```

```js
const List = () => {
   const data = use(promise);
}
```

It allows to **run asynchronous tasks in a component body** that cannot by asynchronous.

### CSS Modules
