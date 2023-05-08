import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from 'react-router-dom';

import { createUserDocumentFromAuth, onAuthStateChangedListener } from "./utils/firebase/firebase";
import Home from './routes/Home/Home';
import Navigation from './routes/Navigation/Navigation';
import Authentication from './routes/Authentication/Authentication';
import Shop from './routes/Shop/Shop';
import Checkout from './routes/Checkout/Checkout';
import { setCurrentUser } from "./store/user/user.action";


const App = () => {
  const dispatch = useDispatch();

  // Unsubscribe from this callback whenever you unmount
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        // Give me the document reference inside db
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    })

    return unsubscribe;
  }, []);

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
  )
}

export default App;
