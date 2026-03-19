import { Badge } from "@/components/ui/badge"
import { useState } from "react";
import {  Filter} from "lucide-react";

export default function FilterCategory() {

      const categories = [
    "All",
    "Military/Defense",
    "Federal Healthcare",
    "Federal Law Enforcement",
    "Federal Parks & Recreation",
    "State Infrastructure",
    "Public Health",
    "Municipal Government",
    "Judicial",
    "Federal Research & Science",
    "Public Safety",
    "Environmental",
    "Federal Benefits"
  ];
  const [selectedCategory, setSelectedCategory] = useState("All");
  return (
    <div>
          <section className="bg-white border-b py-4 sticky top-30 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-2">
            <Filter className="h-4 w-4 text-gray-600" />
            <span className="text-sm font-medium">Filter by Category:</span>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className="cursor-pointer whitespace-nowrap text-xs"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

 