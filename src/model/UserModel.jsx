import {FactCheckIcon,AssessmentIcon,LaptopIcon,ShoppingBagIcon,CategoryIcon} from '../shared/my-cart-icons'

export const AllMenu = [
    {
        employee: [
            { label: "Dashboard", property: "dashboard", icon: <FactCheckIcon /> },
            { label: "Report", property: "report", icon: <AssessmentIcon /> },
            { label: "Attendance", property: "attendance", icon: <LaptopIcon /> }
        ],
        manager: [
            { label: "Dashboard", property: "dashboard", icon: <FactCheckIcon /> },
            { label: "Report", property: "report", icon: <AssessmentIcon /> }
            
        ],
        customer: [
            { label: "Dashboard", property: "dashboard", icon: <FactCheckIcon /> },
            { label: "Order", property: "order", icon: <ShoppingBagIcon /> },
            { label: "Product", property: "product", icon: <CategoryIcon /> }

        ]
    }
]