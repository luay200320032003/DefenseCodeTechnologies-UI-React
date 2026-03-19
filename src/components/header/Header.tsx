import { Button} from "@/components/ui/button";
import { Search } from "lucide-react";
import { useState } from "react";
import { Input } from "../ui/input";

export default function Header() {
  const [searchQuery, setSearchQuery] = useState("")
  return (
          <div >
        <header className="bg-white border-b sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-linear-to-br from-blue-700 to-indigo-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">GOV</span>
              </div>
              <div>
                <h2 className="text-1xl">Government Web Solutions</h2>
                <p className="text-sm text-gray-600">Professional website development for government agencies</p>
              </div>
            </div>
            <Button size="lg">Get Started</Button>
          </div>
          
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Search departments, locations, or services..."
              className="pl-10 h-12"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </header>

         </div>
  )
}
