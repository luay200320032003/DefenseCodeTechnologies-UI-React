import Header from "./components/header/Header";
import Home from "./components/header/home/Home";

 
export default function Layout() {
  return (
    <div className = "min-h-screen bg-white">
      <h1 className = "text-4xl font-bold text-center py-8">Welcome to the Layout Page</h1>
        <Header />
        <Home />
      <Home />
    </div>
  )
}

 
