// src/data/products.ts

// Importando imagens
import AcerNitroImg from "@/assets/img/AcerNitro.jpg";
import glucotrustImg from "@/assets/img/glucotrust.jpg";
import SAMSUNGImg from "@/assets/img/SAMSUNG.jpg";

// Interface para tipagem (opcional, mas recomendado)
export interface Product {
  id: string;
  title: string;
  description: string;
  price: string;
  originalPrice: string;
  rating: number;
  reviewCount: number;
  image: string;
  affiliateLink: string;
  badge?: string;
}

// Array com todos os produtos
const products: Product[] = [
 
   {
    id: "1",
    title: "Acer Nitro V Gaming Laptop",
    description: "Acer Nitro V Gaming Laptop | Intel Core Ultra 9 Processor 270H | NVIDIA GeForce RTX 5070 Laptop GPU | 16 WUXGA IPS 180Hz Display | 32GB DDR5 | 1TB Gen 4 SSD | Wi-Fi 6 | Backlit KB | ANV16-72-933F",
    price: "$999.99",
    originalPrice: "$1199.99",
    rating: 4.9,  
    reviewCount: 320,
    image: AcerNitroImg,
    affiliateLink: "https://amzn.to/3Wx70ai",
    badge: "Bestseller",
  },
  {
    id: "3",
    title: "GlucoTrust",
    description: "Natural blood sugar control. Supports healthy glucose metabolism, weight management, and overall well-being.",
    price: "$39.99",
    originalPrice: "$59.99",
    rating: 4.6,
    reviewCount: 180,
    image: glucotrustImg,
    affiliateLink: "https://www.clickrtrckr.com/646BD27/4ZTW1BP/",
    badge: "New",
  },
  {
    id: "5",
    title: "Sansung Galaxy S25 Ultra",
    description: "SAMSUNG Galaxy S25 Ultra, 512GB Smartphone, Unlocked Android, AI Night Mode Camera, Snapdragon 8 Elite Fast Processor, 5000mAh Battery, Built-in S Pen, 2025, US 1 Yr Warranty, Titanium Black",
    price: "$799.99",
    originalPrice: "$899.99",
    rating: 4.9,
    reviewCount: 250,
    image: SAMSUNGImg,
    affiliateLink: "https://amzn.to/47llVdM",
    badge: "Bestseller", 
  }
  
];

// Exportando o array
export default products;
