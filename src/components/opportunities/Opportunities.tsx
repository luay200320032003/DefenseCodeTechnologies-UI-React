import React from 'react'
import { Button} from "@/components/ui/button";
import DepartmentCard from "../departments/DepartmentCard";
import {departments} from "@/services/DepartmentsService";

 

export default function Opportunities() {
const [searchQuery, setSearchQuery] = React.useState("");
const [selectedCategory, setSelectedCategory] = React.useState("All");

const filteredDepartments = departments.filter((dept) => {
  const matchesSearch = dept.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        dept.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        dept.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || dept.category === selectedCategory;

  return matchesCategory && matchesSearch;
});

  return (
    <div>
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h2 className="text-3xl mb-2">Available Opportunities</h2>
          <p className="text-gray-600">
            {filteredDepartments.length} government department{filteredDepartments.length !== 1 ? 's' : ''} seeking web development services
          </p>
        </div>

        {filteredDepartments.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No departments found matching your criteria.</p>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
            >
              Clear Filters
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDepartments.map((department) => (
              <DepartmentCard key={department.id} {...department} />
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
 
