import Navbar from "./components/NavBar";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import ContactForm from "./components/ContactForm";
import Products from "./components/Products";

export default function App() {
   
    return (
        <div>
            <Navbar/>
            <ContactForm/>
            <div>
                <Products/>
            </div>
        </div>
    );
}