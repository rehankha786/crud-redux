import './App.css';
import Form from './Form/Form';
import { Provider } from 'react-redux';
import { store } from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import Editform from './EditForm/Editform';
import {BrowserRouter,Route, Routes} from "react-router-dom";
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/form' element={<Form />} />
        <Route exact path='/editform' element={<Editform />} />
      </Routes>
     <Footer />
      </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
