
import { Routes, Route } from 'react-router-dom'
import FirebaseContext from './context/firebaseContex';
import { useContext } from 'react';

// Pages are imported here
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';

function App() {
  const { user } = useContext(FirebaseContext);


  if (user) {
    return (
      <Routes>
        <Route path='/*' element={<PrivateRoute />} />
      </Routes>
    )
  } else {
    return (
      <Routes>
        <Route path='/*' element={<PublicRoute />} />
      </Routes>
    )
  }

}


export default App;
