import { MapPin, DollarSign, Clock, Shield } from "lucide-react"
import { Card } from  "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button} from "@/components/ui/button";
import { IDepartmentCard } from "@/shared/interfaces/DepartmentCard";

 

export default function DepartmentCard(props: IDepartmentCard) {
    return (
        <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48 overflow-hidden">
        <img
          src={props.image}
          alt={props.name}
          className="w-full h-full object-cover"
        />
        <Badge className="absolute top-3 right-3 bg-blue-600 text-white hover:bg-blue-700">
          {props.category}
        </Badge>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl mb-2">{props.name}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{props.description}</p>
        
        <div className="space-y-3 mb-4">
          <div className="flex items-center gap-2 text-sm">
            <MapPin className="h-4 w-4 text-gray-500" />
            <span className="text-gray-700">{props.location}</span>
          </div>
          
          <div className="flex items-center gap-2 text-sm">
            <DollarSign className="h-4 w-4 text-green-600" />
            <span className="font-medium">{props.budget}</span>
          </div>
          
          <div className="flex items-center gap-2 text-sm">
            <Clock className="h-4 w-4 text-blue-600" />
            <span className="text-gray-700">{props.timeline}</span>
          </div>
        </div>
        
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <Shield className="h-4 w-4 text-purple-600" />
            <span className="text-sm font-medium">Compliance</span>
          </div>
          <div className="flex flex-wrap gap-1">
            {props.compliance.slice(0, 3).map((item, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {item}
              </Badge>
            ))}
            {props.compliance.length > 3 && (
              <Badge variant="secondary" className="text-xs">
                +{props.compliance.length - 3}
              </Badge>
            )}
          </div>
        </div>
        
        <div className="mb-4">
          <p className="text-sm font-medium mb-2">Services Needed</p>
          <div className="flex flex-wrap gap-1">
            {props.services.slice(0, 3).map((service, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {service}
              </Badge>
            ))}
            {props.services.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{props.services.length - 3}
              </Badge>
            )}
          </div>
        </div>
        
        <Button className="w-full">Submit Proposal</Button>
      </div>
    </Card>
    );
}