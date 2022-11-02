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

Contexts are used to share data across multiple part or components of a react app.
We use a context to share the cart content and methods across the app but also styles features like a dark/light theme preference. 

The Context is created in a list of all contexts that can be use later in components :

```js
// contexts/index.js
export const AppContext = createContext({});
```

Then we specify different values and methods for the context: 

```js
// AppContextProvider.js
export default ({ children }) => {

  const [cart, setCart] = useState([]);

  const getContextValue = () => ({
    cart,
    setCart,
  });

  return (
    <AppContext.Provider value={getContextValue()}>
      {children}
    </AppContext.Provider>
  )
};
```

After wrapping a part of our application in that ```<AppContextProvider>``` component, we cane now use it with the ```useContext()``` hook:

```js
const { setCart } = useContext(AppContext);
```

### Suspense

Suspense lets you specify the loading indicator (the ```<Loader />```component here) in case some components in the tree below it are not yet ready to render. In our case, we used it to display a loader while fetching for products.

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
