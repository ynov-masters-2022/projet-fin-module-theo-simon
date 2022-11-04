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
  const reducer = (state, action) => ({ ...state, action })

  const [state, dispatch] = useReducer(reducer ,{
    products: [],
    // other context values
  });

  const getContextValue = () => ({
    state,
    dispatch,
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

But Suspense also permits to wait for an imported component to be loaded. To do so, we use React.lazy:

```js
const OtherComponent = React.lazy(() => import('./OtherComponent'));

function MyComponent() {
  return (
    <div>
      <Suspense fallback={<div>Chargement...</div>}>
        <OtherComponent />
      </Suspense>
    </div>
  );
}
```

### React Server Components (RSC)

React now allows to **render component directly on the server**. It sounds like SSR but it's not. 
It comes with a lot a restrictions, but it's a good solution to fetch data server side, and import large libraries on the server instead of sending them on the client and by the way increase the page loading speed.

But it comes with few rules:

* **Server Components:** As a general rule, Server Components run *once per request* on the *server*, so they don’t have state and can’t use features that only exist on the client. Specifically, Server Components:
    * ❌ *May not* use state, because they execute (conceptually) only once per request, on the server. So `useState()` and `useReducer()` are not supported. 
    * ❌ *May not* use rendering lifecycle (effects). So `useEffect()` and `useLayoutEffect()` are not supported.
    * ❌ *May not* use browser-only APIs such as the DOM (unless you polyfill them on the server).
    * ❌ *May not* use custom hooks that depend on state or effects, or utility functions that depend on browser-only APIs.
    * ✅ *May* use `async / await` with server-only data sources such as databases, internal (micro)services, filesystems, etc.
    * ✅ *May* render other Server Components, native elements (div, span, etc), or Client Components.
   
* **Client Components:** These are standard React components, so all the rules you’re used to apply. The main new rules to consider are what they can’t do with respect to Server Components. Client Components:
    * ❌ *May not* import Server Components or call server hooks/utilities, because those only work on the server.
    * ❌ *May not* use server-only data sources.
    * ✅ *May* use state.
    * ✅ *May* use effects.
    * ✅ *May* use browser-only APIs.
    * ✅ *May* use custom hooks and utilities that use state, effects or browser-only APIs.

So to let a client component "import" a server component, we can do it this way:

 ```js
 // ClientComponent.client.js
 
export default function ClientComponent({ children }) {
  return (
    <div>
      <h1>Hello from client land</h1>
      {children}
    </div>
  )
}

// ServerComponent.server.js

export default function ServerComponent() {
  return <span>Hello from server land</span>
}

// OuterServerComponent.server.js

import ClientComponent from './ClientComponent.client'
import ServerComponent from './ServerComponent.server'
export default function OuterServerComponent() {
  return (
    <ClientComponent>
      <ServerComponent />
    </ClientComponent>
  )
}

```

But if a client component cannot import a server one, what about the first component of the tree ? 

In fact, the first component of the tree (or at least the first server component) is fetched from the server:

```js
// server.js
// Missing babel and webpack configurations on top of this script

const express = require('express');
const {readFileSync} = require('fs');
const React = require('react');
const {renderToPipeableStream} = require('react-server-dom-webpack/writer');

const Product = require('../src/components/ProductPage/Product.server').default;

const app = express();

app.get('/', (req, res) => {
    const html = readFileSync(
      path.resolve(__dirname, '../build/index.html'),
      'utf8'
    );
    res.send(html);
});

app.get('/getProductPage', (req, res) => {
  const productId = JSON.parse(req.query.productId);
  const {pipe} = renderToPipeableStream(
    React.createElement(Product, { productId }),
  );
  pipe(res);
});

app.listen(3000, () => {
  console.log(`Api listening on port 3000`)
})

```

It then possible to import other server component from this one and fetch data easily like so: 

```js
// product.server.js

const Product = async ({ productId }) => {
   const product = await fetch('/product/${productId}');

   return (
    <>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
    </>
   );
} 

```

##Styled-components
Pour le them dark/light on utilise une fonction createGlobalStyle de styled-components. Cette fonction permet comme
son nom l'indique, elle permet de créer du CSS global qui sera appliqué dans tous les composants. 
```js
const StyledGlobalStyle = createGlobalStyle`
    body {
        background-color: ${({isDarkMode}) => isDarkMode ? '#1b1b1d' : 'white'};
        color: ${({isDarkMode}) => isDarkMode ? colors.white : colors.black};
        margin: 0;
    }
    li a {
     color: ${({isDarkMode}) => isDarkMode ? colors.white : colors.black} !important;
    }
`;
```

Dans ce cas, on utilise le thème dark, mais on pourrait imaginer un système plus poussé où il pourrait.
y avoir des thèmes en fonction de la période de l'année (halloween, Noël, etc)
```js 
function GlobalStyle() {
  const {theme} = useContext(ThemeContext)

  return <StyledGlobalStyle isDarkMode={theme === 'dark'}/>
}

export default GlobalStyle
```

Pour le bouton de changement il est dans le header, il change de forme en fonction du theme (light ou dark). On peut également créer un styled components
si l'on souhaite appliquer le même style sur plusieurs boutons. L'intérêt c'est plutôt de pouvoir passer des informations en paramètre, afin de faire une stylisation personnaliser en fonction d'un param

```js 
const {toggleTheme, theme} = useContext(ThemeContext)
const NightModeButton = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: black;
    font-size: 16px; 
`

return (
        <>
          <header>
            <h1>Buy products</h1>
            <div className={styles.menu}>
              <NightModeButton onClick={() => toggleTheme()}>
                {theme === 'light' ? '☀️' : '🌙'}
              </NightModeButton>
              <Nav />
              <Outlet />
              <div className={styles.cart}>
                <img
                        src="/cart.svg"
                        onClick={onCartClick}
                        width="25px"
                        height="25px"
                />
                <CartModal ref={cartModalRef} />
              </div>
            </div>
          </header>
        </>
);
```

Dans l'App.js on applique notre GlobalStyle, qui va donc appliquer le style sur le body
```js 
return (
        <ThemeContextProvider>
          <GlobalStyle />
          <BrowserRouter>
            <CartContextProvider>
              <Header />
              <AppRouter />
            </CartContextProvider>
          </BrowserRouter>
        </ThemeContextProvider>
);
```

Avec styled components on peut surcharger un élément déjà créer. 
Par exemple on créer un bouton avec un style puis on peut créer un autre bouton avec comme base.
"Button" et surchargé le CSS.
```js 
const Button = styled.button`
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: block;
`;

  const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;
  ...
<Button as="a" href="#">Bouton</Button>
<TomatoButton as="a" href="#">Bouton surchargé</TomatoButton>
```
On peut également passer en paramètre une propriété css
```js 
const Input = styled.input`
padding: 0.5em;
margin: 0.5em;
color: ${props => props.inputColor || "palevioletred"};
background: papayawhip;
border: none;
border-radius: 3px;
`;

...
<Input defaultValue="@probablyup" type="text" />
<Input defaultValue="@geelen" type="text" inputColor="rebeccapurple" />
```
