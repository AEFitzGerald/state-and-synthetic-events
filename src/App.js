import './App.css';
import Birthday from './components/Birthday'

function App() {
    return (
        <div className="App">
                <Birthday nameOfBirthdayPet = "Kitty Cat" flavorCake = "Frosted Buttercream CatNip" numBirthdaysExperienced = {1}></Birthday>
                <Birthday nameOfBirthdayPet = "Deedee Doggee" flavorCake = "Peanut Butter Cake" numBirthdaysExperienced = {2}></Birthday>
        </div>
    );
}

export default App;
