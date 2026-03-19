import FilterCategory from "./components/filter/FilterCategory";
import Header from "./components/header/Header";
import Home from "./components/home/Home";

 
export default function Layout() {
  return (
    <div className = "min-h-screen bg-gray-50">
        <Header />
        <Home />
        <FilterCategory />
    </div>
  )
}

 
 