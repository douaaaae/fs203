import logo from './logo.svg';
import './App.css';
import NotificationPreferences from './Base';
import CheckboxForm from './Checkbox';
import CitySelect from './SelectDynamique';
function App() {
  return (
    <div className="App">
     <NotificationPreferences/>
     <CheckboxForm/>
     <CitySelect/>
    </div>
  );
}

export default App;
