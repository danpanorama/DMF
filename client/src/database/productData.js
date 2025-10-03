// src/components/products/productsData.js
import Image1 from '../assets/houseDemo.jpg';
import Sachini1 from '../assets/sachini/sachinibaniyo.png'
import Sachini2 from '../assets/sachini/sachinicoozina.png'
import Sachini3 from '../assets/sachini/sachinicoozina.png'
import Sachini4 from '../assets/sachini/sachiniroom1port.png'
import Sachini5 from '../assets/sachini/sachiniroom2front.png'
import Sachini6 from '../assets/sachini/sachiniroom2port.png'
import Sachini7 from '../assets/sachini/sachiniroom2rik.png'

export const products = [
  {
    id: 1,
    name: "Apartment in Central Thessaloniki",
    description:
      "Spacious 4-bedroom apartment with 2 bathrooms, located on the 3rd floor. Recently renovated, 120 sqm, ideal for families. Walking distance to the sea and main shopping streets.",
    location: "City Center",
    rooms: 4,
    bathrooms: 2,
    floor: 3,
    size: 120,
    address: "Egnatia 50, Thessaloniki, Greece",
    images: [Sachini2, Sachini5, Sachini1, Sachini3, Sachini4, Sachini6],
    businessPotential:
      "Long-term rental potential: €1,200 - €1,400 per month. Airbnb daily rate: €90 - €120, occupancy around 75%. Estimated ROI: 6-7% annually. Strong appreciation potential due to central location.",
  },
  {
    id: 2,
    name: "Modern Apartment",
    description:
      "Bright and modern 3-bedroom apartment with 2 bathrooms, 95 sqm, situated on the 2nd floor. Includes a large balcony with city view, located in a prestigious neighborhood.",
    location: "Luxury Area",
    rooms: 3,
    bathrooms: 2,
    floor: 2,
    size: 95,
    address: "Egnatia 50, Thessaloniki, Greece",
    images: [Image1, Image1],
    businessPotential:
      "Long-term rental: €900 - €1,100 per month. Airbnb daily rate: €80 - €100, occupancy 70%. ROI around 5.5-6%. Price appreciation expected due to demand in luxury areas.",
  },
  {
    id: 3,
    name: "Studio Apartment",
    description:
      "Compact studio apartment of 45 sqm with 1 bathroom, on the 1st floor. Perfect for students or investment, located next to the university and public transport.",
    location: "Near University",
    rooms: 1,
    bathrooms: 1,
    floor: 1,
    size: 45,
    address: "Egnatia 50, Thessaloniki, Greece",
    images: [Image1, Image1, Image1],
    businessPotential:
      "Long-term rental: €400 - €500 per month, popular with students. Airbnb daily rate: €40 - €60, occupancy 80%+. ROI: 7-8% annually. Strong cash-flow investment.",
  },
  {
    id: 4,
    name: "Luxury Penthouse",
    description:
      "Exclusive 3-bedroom penthouse with 3 bathrooms, 150 sqm, located on the 7th floor. Features panoramic sea view, private parking, and a spacious terrace.",
    location: "High-end Neighborhood",
    rooms: 3,
    bathrooms: 3,
    floor: 7,
    size: 150,
    address: "Egnatia 50, Thessaloniki, Greece",
    images: [Image1, Image1],
    businessPotential:
      "Long-term rental: €2,000 - €2,500 per month. Airbnb daily rate: €180 - €250, occupancy 65%. ROI: 6%+. Strong value appreciation expected due to premium sea-view property.",
  },
  {
    id: 5,
    name: "Investment Apartment",
    description:
      "Cozy 2-bedroom apartment with 1 bathroom, 70 sqm, on the 4th floor. Fully rented with 7% annual yield. Close to public transport and shopping facilities.",
    location: "Close to Public Transport",
    rooms: 2,
    bathrooms: 1,
    floor: 4,
    size: 70,
    address: "Egnatia 50, Thessaloniki, Greece",
    images: [Image1, Image1, Image1],
    businessPotential:
      "Already rented with 7% yield. Long-term rental value €600 - €750 per month. Airbnb daily rate: €65 - €80, occupancy 70%. Stable investment with secure returns.",
  },
];
