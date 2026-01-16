import acInstallation from "../assets/services/ac-installation.jpg";
import acRepair from "../assets/services/ac-repair.jpg";
import gasFilling from "../assets/services/gas-filling.jpg";
import refrigerator from "../assets/services/refrigerator.jpg";
import deepFreezer from "../assets/services/deep-freezer.png";
import dispenser from "../assets/services/water-dispenser.png";
import commercial from "../assets/services/commercial-cooling.jpg";
import shifting from "../assets/services/ac-shifting.png";
import amc from "../assets/services/contract-service.png";
import vents from "../assets/services/ac-vent-service.png";
import washing from "../assets/services/washing-machine-repair.png";
import maintenance from "../assets/services/maintainance.webp";

export default [
  {
    id: 1,
    title: "AC Installation",
    image: acInstallation,
    shortDesc: "Professional AC installation with warranty and free maintenance",
    fullDesc: "Professional installation of all AC types including Split, Inverter, Window, Cassette & Central AC systems. Our certified technicians ensure proper installation with warranty and free first-month maintenance.",
    discount: "20%",
    price: "99",
    features: ["Expert Installation", "1-Year Warranty", "Free Checkup", "Same Day Service"],
    popular: true,
    rating: 4.9,
    tag: "Most Popular"
  },
  {
    id: 2,
    title: "AC Repair & Maintenance",
    image: acRepair,
    shortDesc: "24/7 emergency AC repair services for all brands",
    fullDesc: "Complete AC repair services including cooling issues, gas leakage, PCB repair, compressor issues, water leakage and general maintenance. We repair all major brands including Daikin, Gree, LG, Haier, Samsung.",
    discount: "15%",
    price: "49",
    features: ["Same Day Service", "All Brands", "Emergency 24/7", "90 Days Warranty"],
    popular: true,
    rating: 4.8,
    tag: "Emergency"
  },
  {
    id: 3,
    title: "AC Gas Filling",
    image: gasFilling,
    shortDesc: "R22, R410A, R32 gas top-up & charging with leak detection",
    fullDesc: "We provide all types of refrigerant gas filling services including R22, R410A, R32 with proper leak detection. Our gas filling services come with 6 months warranty on gas pressure.",
    discount: "10%",
    price: "39",
    features: ["All Gas Types", "Leak Detection", "Pressure Test", "6 Months Warranty"],
    popular: false,
    rating: 4.7
  },
  {
    id: 4,
    title: "Refrigerator Repair",
    image: refrigerator,
    shortDesc: "Not cooling, compressor issues, gas leak repair",
    fullDesc: "Professional refrigerator repair services at your doorstep. We fix all issues including not cooling, compressor problems, thermostat issues, gas leakage, and electrical faults.",
    discount: "25%",
    price: "59",
    features: ["Doorstep Service", "Spare Parts", "3 Months Warranty", "Quick Fix"],
    popular: true,
    rating: 4.6,
    tag: "Special Offer"
  },
  {
    id: 5,
    title: "Deep Freezer Repair",
    image: deepFreezer,
    shortDesc: "Home & commercial freezer cooling issues repair",
    fullDesc: "Complete freezer repair services for both home and commercial units. We handle defrosting issues, compressor problems, cooling failures, and provide regular maintenance.",
    discount: "20%",
    price: "69",
    features: ["Home & Commercial", "Emergency Service", "Defrosting", "Gas Charging"],
    popular: false,
    rating: 4.5
  },
  {
    id: 6,
    title: "Water Dispenser Repair",
    image: dispenser,
    shortDesc: "Cooling/heating failure, leakage, filter cleaning",
    fullDesc: "Professional water dispenser repair and maintenance services. We fix cooling/heating issues, leakage problems, filter cleaning, and electrical faults for all dispenser brands.",
    discount: "15%",
    price: "45",
    features: ["Filter Cleaning", "Heating/Cooling", "Leakage Fix", "Sanitization"],
    popular: false,
    rating: 4.4
  },
  {
    id: 7,
    title: "Commercial Cooling",
    image: commercial,
    shortDesc: "Cold rooms, chillers, walk-in coolers for businesses",
    fullDesc: "Complete commercial cooling solutions for hotels, restaurants, supermarkets, and industries. We install and maintain cold rooms, chillers, walk-in coolers, and display freezers.",
    discount: "30%",
    price: "299",
    features: ["Commercial Grade", "Custom Solutions", "Maintenance Plans", "Energy Efficient"],
    popular: true,
    rating: 4.9,
    tag: "Business"
  },
  {
    id: 8,
    title: "AC Shifting",
    image: shifting,
    shortDesc: "Safe removal & re-installation with gas recovery",
    fullDesc: "Professional AC shifting and relocation services. We safely remove, transport, and re-install your AC units with proper gas recovery and recharging to ensure optimal performance.",
    discount: "20%",
    price: "79",
    features: ["Gas Recovery", "Safe Transport", "Re-installation", "Testing"],
    popular: false,
    rating: 4.6
  },
  {
    id: 9,
    title: "Maintenance Contracts",
    image: amc,
    shortDesc: "Monthly & yearly AC/Fridge maintenance plans",
    fullDesc: "Cost-effective AMC plans for homes, offices, and shops. Choose from monthly, quarterly, or yearly maintenance contracts covering all your cooling appliances.",
    discount: "40%",
    price: "199",
    features: ["Regular Checkups", "Priority Service", "Discounts on Repairs", "Emergency Support"],
    popular: true,
    rating: 4.8,
    tag: "Best Value"
  },
  {
    id: 10,
    title: "AC Vent Services",
    image: vents,
    shortDesc: "Duct cleaning, vent repair, and airflow optimization",
    fullDesc: "Improve your indoor air quality with our professional specific duct and vent cleaning services. We remove dust, mold, and allergens from your AC vents.",
    discount: "25%",
    price: "89",
    features: ["Deep Cleaning", "Sanitization", "Airflow Check", "Odor Removal"],
    popular: false,
    rating: 4.7
  },
  {
    id: 11,
    title: "Washing Machine Repair",
    image: washing,
    shortDesc: "Expert repair for all washing machine brands",
    fullDesc: "We fix all washing machine types including top-load, front-load and automatic. Solutions for drainage issues, motor problems, board errors and more.",
    discount: "15%",
    price: "55",
    features: ["All Brands", "Motor Repair", "PCB Fixing", "Genuine Parts"],
    popular: true,
    rating: 4.5
  },
  {
    id: 12,
    title: "General Maintenance",
    image: maintenance,
    shortDesc: "Overall appliance checkup and tuning",
    fullDesc: "General checkup and tuning service for all your home appliances. We ensure everything is running efficiently and preventing breakdown before they happen.",
    discount: "10%",
    price: "29",
    features: ["Multi-Appliance", "Efficiency Check", "Preventive Care", "Expert Advice"],
    popular: false,
    rating: 4.4
  }
];