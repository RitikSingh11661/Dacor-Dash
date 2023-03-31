import Filter_Sort from './components/Filter_Sort';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import ProductCard from './components/ProductCard';
import { Products } from './pages/Products';
import { Allroutes } from './routes/Allroutes';

function App() {

    return (
        <div className="App">
            {/* <Navbar />
            <Allroutes />
            <Footer /> */}
            {/* <Filter_Sort/> */}
            <Products/>
        </div>
    );
}

export default App;
