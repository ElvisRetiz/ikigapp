import React from 'react';
import { useUser } from 'reactfire';
import {
  BrowserRouter,
  Switch,
  Route,
  // eslint-disable-next-line no-unused-vars
  Link,
  Redirect,
  // eslint-disable-next-line no-unused-vars
  useHistory,
  // eslint-disable-next-line no-unused-vars
  useLocation
} from "react-router-dom";

import Layout from '../components/layout/index.js';

import Home from '../views/home/index.js';
import Log from '../views/log/index.js';
import Register from '../views/register/index.js';
import Reset from '../views/reset/index.js'
import ChallengeList from '../views/challenge/index.js';
import PhotoView from '../views/photo/index.js';
// import Collage from '../views/collage/index.js';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <PrivateRoute exact path="/" component={Home}/>
        <PrivateRoute exact path="/event/:id" component={ChallengeList}/>
        <PrivateRoute exact path="/photo" component={PhotoView}/>
        {/* <PrivateRoute exact path="/collage" component={Collage}/> */}
        <SignedRoute exact path="/login" component={Log} />
        <SignedRoute exact path="/register" component={Register} />
        <SignedRoute exact path="/reset" component={Reset} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;


// This example has 3 pages: a public page, a protected
// page, and a login screen. In order to see the protected
// page, you must first login. Pretty standard stuff.
//
// First, visit the public page. Then, visit the protected
// page. You're not yet logged in, so you are redirected
// to the login page. After you login, you are redirected
// back to the protected page.
//
// Notice the URL change each time. If you click the back
// button at this point, would you expect to go back to the
// login page? No! You're already logged in. Try it out,
// and you'll see you go back to the page you visited
// just *before* logging in, the public page.

// function AuthExample() {
//   return (
//     <BrowserRouter>
//       <div>
//         <AuthButton />

//         <ul>
//           <li>
//             <Link to="/public">Public Page</Link>
//           </li>
//           <li>
//             <Link to="/protected">Protected Page</Link>
//           </li>
//         </ul>

//         <Switch>
//           <Route path="/public">
//             <PublicPage />
//           </Route>
//           <Route path="/login">
//             <LoginPage />
//           </Route>
//           <PrivateRoute path="/protected">
//             <ProtectedPage />
//           </PrivateRoute>
//         </Switch>
//       </div>
//     </BrowserRouter>
//   );
// }

// const fakeAuth = {
//   isAuthenticated: false,
//   authenticate(cb) {
//     fakeAuth.isAuthenticated = true;
//     setTimeout(cb, 100); // fake async
//   },
//   signout(cb) {
//     fakeAuth.isAuthenticated = false;
//     setTimeout(cb, 100);
//   }
// };

// function AuthButton() {
//   let history = useHistory();

//   return fakeAuth.isAuthenticated ? (
//     <p>
//       Welcome!{" "}
//       <button
//         onClick={() => {
//           fakeAuth.signout(() => history.push("/"));
//         }}
//       >
//         Sign out
//       </button>
//     </p>
//   ) : (
//     <p>You are not logged in.</p>
//   );
// }

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function PrivateRoute({ component, ...rest }) {

  const Component = component;
  const user = useUser();

  return (
    <Route {...rest} render={({ location }) => user ? ( <Component /> ) : ( <Redirect to={{ pathname: "/login", state: { from: location } }} /> ) }/>
  );

}

function SignedRoute({ component, ...rest }) {

  const Component = component;
  const user = useUser();

  return (
    <Route {...rest} render={({ location }) => user ? ( <Redirect to={{ pathname: "/", state: { from: location } }} /> ) : ( <Component /> ) }/>
  );

}

// function PublicPage() {
//   return <h3>Public</h3>;
// }

// function ProtectedPage() {
//   return <h3>Protected</h3>;
// }

// function LoginPage() {
//   let history = useHistory();
//   let location = useLocation();

//   let { from } = location.state || { from: { pathname: "/" } };
//   let login = () => {
//     fakeAuth.authenticate(() => {
//       history.replace(from);
//     });
//   };

//   return (
//     <div>
//       <p>You must log in to view the page at {from.pathname}</p>
//       <button onClick={login}>Log in</button>
//     </div>
//   );
// }
