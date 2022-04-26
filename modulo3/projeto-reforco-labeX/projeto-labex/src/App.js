import AdminHomePage from "./Pages/AdminHomePage";
import ApplicationFormPage from "./Pages/ApplicationFormPage";
import CreateTripPage from "./Pages/CreateTripPage";
import HomePage from "./Pages/HomePage";
import ListTripsPage from "./Pages/ListTripsPage";
import LoginPage from "./Pages/LoginPage";
import TripDetailsPage from "./Pages/TripDetailsPage";

function App() {
  return (
    <div>
                
     <HomePage/>
     <ListTripsPage/> 
     <ApplicationFormPage/>
     <LoginPage/>
     <AdminHomePage/>
     <CreateTripPage/> 
     <TripDetailsPage/> 
     
    </div>
  );
}

export default App;
