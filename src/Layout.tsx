import FilterCategory from "./components/filter/FilterCategory";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import Opportunities from "./components/opportunities/Opportunities";
import { useState } from "react";

 
export default function Layout() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className = "min-h-screen bg-gray-50">
        <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />
        <Home />
        <FilterCategory selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />
       <Opportunities
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
       />   
        <Footer />
    </div>
  )
}

 
 