import FilterCategory from "./components/filter/FilterCategory";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import Opportunities from "./components/opportunities/Opportunities";
import { useState } from "react";

 
export default function Layout() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <div className = "min-h-screen bg-gray-50">
        <Header />
        <Home />
        <FilterCategory selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />
       <Opportunities selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />   
        <Footer />
    </div>
  )
}

 
 