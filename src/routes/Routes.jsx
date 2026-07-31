import { createBrowserRouter } from "react-router-dom";

// ============================================================================
// 00. LAYOUTS & ERROR HANDLING
// ============================================================================
import Main from "../layouts/Main";
import ErrorPage from "../pages/errorPage/ErrorPage";

// ============================================================================
// 01. CORE CORPORATE PAGES
// ============================================================================
import Home from "../pages/Home/Home";
import AboutMePage from "../pages/about/AboutMePage";
import ContactPage from "../pages/contact/ContactPage";
import ServicePage from "../pages/service/ServicePage";
import PortfolioPage from "../pages/portfolio/PortfolioPage";
import Gallery from "../pages/Gallery";
import BlogPage from "../pages/blogs/BlogPage";
import FaqPage from "../pages/FAQ/FaqPage";
import Terms from "../pages/terms/Terms";

// ============================================================================
// 02. CONSTRUCTION & MAINTENANCE DIVISION
// ============================================================================
import Construction_Maintenance from "../pages/products/Construction_Maintenance/Construction_Maintenance";
import Construction_Work from "../pages/products/Construction_Maintenance/Construction_Work";
import Building_Maintenance from "../pages/products/Construction_Maintenance/Building_Maintenance";
import Villa_Renovation from "../pages/products/Construction_Maintenance/Villa_Renovation";
import Office_Renovation from "../pages/products/Construction_Maintenance/Office_Renovation";
import Painting_Services from "../pages/products/Construction_Maintenance/Painting_Services";
import Plumbing_Services from "../pages/products/Construction_Maintenance/Plumbing_Services";
import Electrical_Services from "../pages/products/Construction_Maintenance/Electrical_Services";
import Handyman_Services from "../pages/products/Construction_Maintenance/Handyman_Services";
import AC_Maintenance from "../pages/products/Construction_Maintenance/AC_Maintenance";
import HVAC_Services from "../pages/products/Construction_Maintenance/HVAC_Services";
import Water_Proofing from "../pages/products/Construction_Maintenance/Water_Proofing";
import Tile_Marble_Works from "../pages/products/Construction_Maintenance/Tile_Marble_Works";

// ============================================================================
// 03. ALUMINIUM, GLASS & METAL DIVISION
// ============================================================================
import Aluminium_Glass_Metal_Works from "../pages/products/Aluminium_Glass_Metal_Works/Aluminium_Glass_Metal_Works";
import Aluminium_Doors from "../pages/products/Aluminium_Glass_Metal_Works/Aluminium_Doors";
import Aluminium_Windows from "../pages/products/Aluminium_Glass_Metal_Works/Aluminium_Windows";
import Glass_Partitions from "../pages/products/Aluminium_Glass_Metal_Works/Glass_Partitions";
import Glass_Doors from "../pages/products/Aluminium_Glass_Metal_Works/Glass_Doors";
import Shower_Glass from "../pages/products/Aluminium_Glass_Metal_Works/Shower_Glass";
import Mirror_Works from "../pages/products/Aluminium_Glass_Metal_Works/Mirror_Works";
import Steel_Gates from "../pages/products/Aluminium_Glass_Metal_Works/Steel_Gates";
import Sliding_Gates from "../pages/products/Aluminium_Glass_Metal_Works/Sliding_Gates";
import Automatic_Gates from "../pages/products/Aluminium_Glass_Metal_Works/Automatic_Gates";
import Stair_Railings from "../pages/products/Aluminium_Glass_Metal_Works/Stair_Railings";
import Pergola_Works from "../pages/products/Aluminium_Glass_Metal_Works/Pergola_Works";
import Car_Parking_Shades from "../pages/products/Aluminium_Glass_Metal_Works/Car_Parking_Shades";
import Balustrades from "../pages/products/Aluminium_Glass_Metal_Works/Balustrades";

// ============================================================================
// 04. TENTS & OUTDOOR WORKS DIVISION
// ============================================================================

import Tent_Making_Installation from "../pages/products/Tents_Outdoor_Works/Tent_Making_Installation";
import Majlis_Tents from "../pages/products/Tents_Outdoor_Works/Majlis_Tents";
import Event_Tents from "../pages/products/Tents_Outdoor_Works/Event_Tents";
import Warehouse_Tents from "../pages/products/Tents_Outdoor_Works/Warehouse_Tents";
import Parking_Shades from "../pages/products/Tents_Outdoor_Works/Parking_Shades";
import Pergola_Installation from "../pages/products/Tents_Outdoor_Works/Pergola_Installation";
import Outdoor_Seating from "../pages/products/Tents_Outdoor_Works/Outdoor_Seating";

// ============================================================================
// 05. FLOORING & INTERIOR FINISHING DIVISION
// ============================================================================
import Flooring_Interior_Finishing from "../pages/products/Flooring_Interior_Finishing/Flooring_Interior_Finishing";
import SPC_Flooring from "../pages/products/Flooring_Interior_Finishing/SPC_Flooring";
import Vinyl_Flooring from "../pages/products/Flooring_Interior_Finishing/Vinyl_Flooring";
import Parquet_Flooring from "../pages/products/Flooring_Interior_Finishing/Parquet_Flooring";
import Carpet_Installation from "../pages/products/Flooring_Interior_Finishing/Carpet_Installation";
import Wallpaper_Installation from "../pages/products/Flooring_Interior_Finishing/Wallpaper_Installation";
import Gypsum_Ceiling from "../pages/products/Flooring_Interior_Finishing/Gypsum_Ceiling";
import Gypsum_Partition from "../pages/products/Flooring_Interior_Finishing/Gypsum_Partition";
import False_Ceiling from "../pages/products/Flooring_Interior_Finishing/False_Ceiling";
import Wall_Panels from "../pages/products/Flooring_Interior_Finishing/Wall_Panels";

// ============================================================================
// 06. CURTAINS & BLINDS DIVISION
// ============================================================================
import Curtains_Blinds_Work from "../pages/products/Curtains_Blinds_Work/Curtains_Blinds_Work";
import Blackout_Curtains from "../pages/products/Curtains_Blinds_Work/Blackout_Curtains";
import Bedroom_Curtains from "../pages/products/Curtains_Blinds_Work/Bedroom _Curtains"; // Note: space in your original filename
import Living_Room_Curtains from "../pages/products/Curtains_Blinds_Work/Living_Room_Curtains";
import Office_Curtains from "../pages/products/Curtains_Blinds_Work/Office_Curtains";
import Hotel_Curtains from "../pages/products/Curtains_Blinds_Work/Hotel_Curtains";
import Wave_Curtains from "../pages/products/Curtains_Blinds_Work/Wave_Curtains";
import Roller_Blinds from "../pages/products/Curtains_Blinds_Work/Roller_Blinds";
import Vertical_Blinds from "../pages/products/Curtains_Blinds_Work/Vertical_Blinds";
import Venetian_Blinds from "../pages/products/Curtains_Blinds_Work/Venetian_Blinds";

// ============================================================================
// 07. FURNITURE DIVISION
// ============================================================================
import Furniture from "../pages/products/Furniture/Furniture";
import Home_Furniture from "../pages/products/Furniture/Home_Furniture/Home_Furniture";
import Sofa_Sets from "../pages/products/Furniture/Home_Furniture/Sofa_Sets";
import Custom_Beds from "../pages/products/Furniture/Home_Furniture/Custom_Beds";
import Wardrobes_Cabinets from "../pages/products/Furniture/Home_Furniture/Wardrobes_Cabinets";
import Office_Furniture from "../pages/products/Furniture/Office_Furniture/Office_Furniture";
import Office_Tables from "../pages/products/Furniture/Office_Furniture/Office_Tables";
import Office_Chairs from "../pages/products/Furniture/Office_Furniture/Office_Chairs";

// ============================================================================
// 08. HOSPITALITY & CLEANING DIVISION
// ============================================================================
import Hospitality_Cleaning from "../pages/products/Hospitality_Cleaning/Hospitality_Cleaning";
import Housekeeping_Services from "../pages/products/Hospitality_Cleaning/Housekeeping_Services";
import Office_Cleaning from "../pages/products/Hospitality_Cleaning/Office_Cleaning";
import Deep_Cleaning from "../pages/products/Hospitality_Cleaning/Deep_Cleaning";
import Villa_Cleaning from "../pages/products/Hospitality_Cleaning/Villa_Cleaning";

// ============================================================================
// 09. MANPOWER SUPPLY DIVISION
// ============================================================================
import Manpower_Supply from "../pages/products/Manpower_Supply/Manpower_Supply";
import General_Labor_Supply from "../pages/products/Manpower_Supply/General_Labor_Supply";
import Skilled_Workers from "../pages/products/Manpower_Supply/Skilled_Workers";
import Carpenters from "../pages/products/Manpower_Supply/Carpenters";
import Electricians from "../pages/products/Manpower_Supply/Electricians";
import Plumbers from "../pages/products/Manpower_Supply/Plumbers";
import Painters from "../pages/products/Manpower_Supply/Painters";

// ============================================================================
// 10. EVENTS & EXHIBITIONS DIVISION
// ============================================================================
import Events_Exhibitions from "../pages/products/Events_Exhibitions/Events_Exhibitions";
import Exhibition_Booth_Design from "../pages/products/Events_Exhibitions/Exhibition_Booth_Design";
import Exhibition_Stall_Fabrication from "../pages/products/Events_Exhibitions/Exhibition_Stall_Fabrication";
import Kiosk_Fabrication from "../pages/products/Events_Exhibitions/Kiosk_Fabrication";
import Wedding_Decoration from "../pages/products/Events_Exhibitions/Wedding_Decoration";
import Stage_Setup from "../pages/products/Events_Exhibitions/Stage_Setup";

// ============================================================================
// 11. DIGITAL SERVICES DIVISION
// ============================================================================
import Digital_Services from "../pages/products/Digital_Services/Digital_Services";
import Website_Development from "../pages/products/Digital_Services/Website_Development";
import Digital_Marketing from "../pages/products/Digital_Services/Digital_Marketing";
import SEO_Services from "../pages/products/Digital_Services/SEO_Services";
import Online_Ads_Services from "../pages/products/Digital_Services/Online_Ads_Services";
import Tents_Outdoor_Works from "../pages/Home/Tents_Outdoor_Works";


// ============================================================================
// ROUTER CONFIGURATION
// ============================================================================
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="bg-secondary-light dark:bg-primary-dark transition duration-300">
        <Main />
      </div>
    ),
    errorElement: <ErrorPage />,
    children: [

      // --- CORE PAGES ---
      { path: "/", element: <Home /> },
      { path: "/about-us", element: <AboutMePage /> },
      { path: "/contact", element: <ContactPage /> },
      { path: "/service", element: <ServicePage /> },
      { path: "/portfolio", element: <PortfolioPage /> },
      { path: "/gallery", element: <Gallery /> },
      { path: "/blog", element: <BlogPage /> },
      { path: "/faq", element: <FaqPage /> },
      { path: "/terms", element: <Terms /> },

      // --- CONSTRUCTION & MAINTENANCE ---
      { path: "/construction-maintenance-qatar", element: <Construction_Maintenance /> },

      { path: "/construction-work-qatar", element: <Construction_Work /> },
      { path: "/building-maintenance-qatar", element: <Building_Maintenance /> },
      { path: "/villa-renovation-qatar", element: <Villa_Renovation /> },
      { path: "/office-renovation-qatar", element: <Office_Renovation /> },
      { path: "/painting-services-qatar", element: <Painting_Services /> },
      { path: "/plumbing-services-qatar", element: <Plumbing_Services /> },
      { path: "/electrical-services-qatar", element: <Electrical_Services /> },
      { path: "/handyman-services-qatar", element: <Handyman_Services /> },
      { path: "/ac-maintenance-qatar", element: <AC_Maintenance /> },
      { path: "/hvac-services-qatar", element: <HVAC_Services /> },
      { path: "/waterproofing-qatar", element: <Water_Proofing /> },
      { path: "/tile-marble-works-qatar", element: <Tile_Marble_Works /> },

      // --- ALUMINIUM, GLASS & METAL ---
      { path: "/aluminium-glass-metal-works-qatar", element: <Aluminium_Glass_Metal_Works /> },
      { path: "/aluminium-doors-qatar", element: <Aluminium_Doors /> },
      { path: "/aluminium-windows-qatar", element: <Aluminium_Windows /> },
      { path: "/glass-partitions-qatar", element: <Glass_Partitions /> },
      { path: "/glass-doors-qatar", element: <Glass_Doors /> },
      { path: "/shower-glass-qatar", element: <Shower_Glass /> },
      { path: "/mirror-installation-qatar", element: <Mirror_Works /> },
      { path: "/steel-gates-qatar", element: <Steel_Gates /> },
      { path: "/sliding-gates-qatar", element: <Sliding_Gates /> },
      { path: "/automatic-gates-qatar", element: <Automatic_Gates /> },
      { path: "/stair-railings-qatar", element: <Stair_Railings /> },
      { path: "/pergola-works-qatar", element: <Pergola_Works /> },
      { path: "/car-parking-shades-qatar", element: <Car_Parking_Shades /> },
      { path: "/balustrades-qatar", element: <Balustrades /> },

      // --- TENTS & OUTDOOR WORKS ---
      { path: "/tents-outdoor-works-qatar", element: <Tents_Outdoor_Works /> },
      { path: "/tent-making-installation-qatar", element: <Tent_Making_Installation /> },
      { path: "/majlis-tents-qatar", element: <Majlis_Tents /> },
      { path: "/event-tents-qatar", element: <Event_Tents /> },
      { path: "/warehouse-tents-qatar", element: <Warehouse_Tents /> },
      { path: "/parking-shades-qatar", element: <Parking_Shades /> },
      { path: "/pergola-installation-qatar", element: <Pergola_Installation /> },
      { path: "/outdoor-seating-qatar", element: <Outdoor_Seating /> },

      // --- FLOORING & INTERIOR FINISHING ---
      { path: "/flooring-interior-qatar", element: <Flooring_Interior_Finishing /> },
      { path: "/spc-flooring-qatar", element: <SPC_Flooring /> },
      { path: "/vinyl-flooring-qatar", element: <Vinyl_Flooring /> },
      { path: "/parquet-flooring-qatar", element: <Parquet_Flooring /> },
      { path: "/carpet-installation-qatar", element: <Carpet_Installation /> },
      { path: "/wallpaper-installation-qatar", element: <Wallpaper_Installation /> },
      { path: "/gypsum-ceiling-qatar", element: <Gypsum_Ceiling /> },
      { path: "/gypsum-partition-qatar", element: <Gypsum_Partition /> },
      { path: "/false-ceiling-qatar", element: <False_Ceiling /> },
      { path: "/wall-panels-qatar", element: <Wall_Panels /> },

      // --- CURTAINS & BLINDS ---
      { path: "/curtains-blinds-qatar", element: <Curtains_Blinds_Work /> },
      { path: "/blackout-curtains-qatar", element: <Blackout_Curtains /> },
      { path: "/bedroom-curtains-qatar", element: <Bedroom_Curtains /> },
      { path: "/living-room-curtains-qatar", element: <Living_Room_Curtains /> },
      { path: "/hotel-curtains-qatar", element: <Hotel_Curtains /> },
      { path: "/wave-curtains-qatar", element: <Wave_Curtains /> },
      { path: "/roller-blinds-qatar", element: <Roller_Blinds /> },
      { path: "/vertical-blinds-qatar", element: <Vertical_Blinds /> },
      { path: "/venetian-blinds-qatar", element: <Venetian_Blinds /> },
      { path: "/office-curtains-qatar", element: <Office_Curtains /> },

      // --- FURNITURE ---
      { path: "/furniture-qatar", element: <Furniture /> },
      { path: "/home-furniture-qatar", element: <Home_Furniture /> },
      { path: "/office-furniture-qatar", element: <Office_Furniture /> },
      { path: "/sofa-sets-qatar", element: <Sofa_Sets /> },
      { path: "/custom-beds-qatar", element: <Custom_Beds /> },
      { path: "/wardrobes-cabinets-qatar", element: <Wardrobes_Cabinets /> },
      { path: "/office-tables-qatar", element: <Office_Tables /> },
      { path: "/office-chairs-qatar", element: <Office_Chairs /> },

      // --- HOSPITALITY & CLEANING ---
      { path: "/hospitality-cleaning-qatar", element: <Hospitality_Cleaning /> },
      { path: "/housekeeping-services-qatar", element: <Housekeeping_Services /> },
      { path: "/office-cleaning-qatar", element: <Office_Cleaning /> },
      { path: "/deep-cleaning-qatar", element: <Deep_Cleaning /> },
      { path: "/villa-cleaning-qatar", element: <Villa_Cleaning /> },

      // --- MANPOWER SUPPLY ---
      { path: "/manpower-supply-qatar", element: <Manpower_Supply /> },
      { path: "/general-labor-supply-qatar", element: <General_Labor_Supply /> },
      { path: "/skilled-workers-qatar", element: <Skilled_Workers /> },
      { path: "/carpenters-qatar", element: <Carpenters /> },
      { path: "/electricians-qatar", element: <Electricians /> }, // Removed the duplicate that existed in your previous code
      { path: "/painters-qatar", element: <Painters /> },
      { path: "/plumbers-qatar", element: <Plumbers /> },

      // --- EVENTS & EXHIBITIONS ---
      { path: "/events-exhibitions-qatar", element: <Events_Exhibitions /> },
      { path: "/exhibition-booth-design-qatar", element: <Exhibition_Booth_Design /> },
      { path: "/exhibition-stall-fabrication-qatar", element: <Exhibition_Stall_Fabrication /> },
      { path: "/kiosk-fabrication-qatar", element: <Kiosk_Fabrication /> },
      { path: "/wedding-decoration-qatar", element: <Wedding_Decoration /> },
      { path: "/stage-setup-qatar", element: <Stage_Setup /> },

      // --- DIGITAL SERVICES ---
      { path: "/digital-services-qatar", element: <Digital_Services /> },
      { path: "/website-development-qatar", element: <Website_Development /> },
      { path: "/digital-marketing-qatar", element: <Digital_Marketing /> },
      { path: "/online-ads-services-qatar", element: <Online_Ads_Services /> },
      { path: "/seo-services-qatar", element: <SEO_Services /> },
    ],
  },

  // GLOBAL CATCH-ALL ROUTE (404)
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;
