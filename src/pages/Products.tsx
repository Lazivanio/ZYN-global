// src/pages/Products.tsx

import { useState } from "react";
import { Search } from "lucide-react";
import Layout from "@/components/layout/Layout";
import ProductCard, { Product } from "@/components/product/ProductCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Imports das imagens dos produtos
import AcerNitroImg from "@/assets/img/AcerNitro.jpg";
import glucotrustImg from "@/assets/img/glucotrust.jpg";
import AppleiPhone16ProImg from "@/assets/img/AppleiPhone16Pro.jpg";
import goldalignImg from "@/assets/img/goldalign.jpg";
import lavaslimImg from "@/assets/img/lavaslim.jpg";
import ketonicImg from "@/assets/img/ketonic.jpg";
import quietumImg from "@/assets/img/quietum.jpg";
import glucavitImg from "@/assets/img/glucavit.jpg";
import risefuelImg from "@/assets/img/risefuel.jpg";
import RyokoImg from "@/assets/img/ryoko.jpg";
import humeImg from "@/assets/img/hume.jpg";
import synoshiImg from "@/assets/img/synoshi.jpg";
//import coldeezImg from "@/assets/img/coldeez.jpg";//
import ZappifyImg from "@/assets/img/zappify.jpg";
import InsecTrapImg from "@/assets/img/insectrap.jpg";
import ScrollGenieImg from "@/assets/img/scrollgenie.jpg";
import klaudenaImg from "@/assets/img/klaudena.jpg";
import CuraBallImg from "@/assets/img/CuraBall.jpg";
import EchoLabsImg from "@/assets/img/EchoLabs.jpg";
import BiomaProbioticsImg from "@/assets/img/BiomaProbiotics.jpg";
import MenovelleImg from "@/assets/img/Menovelle.jpg";
import Gpt5Img from "@/assets/img/Gpt5.png";
import KlickTippImg from "@/assets/img/KlickTipp.png";
import AfiliadoImg from "@/assets/img/Afiliado.png";
import STGAubronGamingImg from "@/assets/img/STGAubronGaming.jpg";
import EGVWirelessChargerImg from "@/assets/img/EGVWirelessCharger.jpg";
import NanoBananaAIImg from "@/assets/img/NanoBananaAI.jpg";
import modelosdelogotiposImg from "@/assets/img/modelosdelogotipos.jpg";
import WellneeImg from "@/assets/img/Wellnee.jpg";
import WirelessImg from "@/assets/img/Wireless.jpg";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const products: Product[] = [
    {
      id: "0",
      title: "Acer Nitro V Gaming Laptop",
      description: "Acer Nitro V Gaming Laptop | Intel Core Ultra 9 Processor 270H | NVIDIA GeForce RTX 5070 Laptop GPU | 16 WUXGA IPS 180Hz Display | 32GB DDR5 | 1TB Gen 4 SSD | Wi-Fi 6 | Backlit KB | ANV16-72-933F",
      rating: 4.9,
      reviewCount: 320,
      image: AcerNitroImg,
      affiliateLink: "https://amzn.to/3Wx70ai",
      badge: "Bestseller",
      category: "electronics",
    },
     {
      id: "1",
      title: "NEW GlucoTrust - German",
      description:"Natural support for healthy blood sugar levels. Offer valid in several European countries.",
      rating: 4.7,
      reviewCount: 3210,
      image: glucotrustImg,
      affiliateLink: "https://www.clickrtrckr.com/646BD27/4ZTW1BP/",
      badge: "Novo",
      category: "health",
    },
    {
      id: "2",
      title: " Apple iPhone 16 Pro", 
      description: "Apple iPhone 16 Pro, US Version, 128GB, Desert Titanium for Cricket (Renewed)",
      rating: 4.8,
      reviewCount: 1500,
      image: AppleiPhone16ProImg,
      affiliateLink: "https://amzn.to/3Jk1vXG",
      badge: "Bestseller",
      category: "electronics"
    },
    {
      id: "3",
      title: "NEW Goldalign",
      description:
        "Premium supplement for general well-being. Available in US, CA, AU, UK, NZ, IE.",
      rating: 4.5,
      reviewCount: 1987,
      image: goldalignImg,
      affiliateLink: "https://www.clickrtrckr.com/646BD27/4XPXNDQ/",
      badge: "Novo",
      category: "health",
    },
    {
      id: "4",
      title: "NEW LavaSlim Diet - French",
      description:
        "Exclusive weight loss formula. Available in FR, CA, BE, CH, LU, US, UK.Exclusive weight loss formula. Available in FR, CA, BE, CH, LU, US, UK.",
      rating: 4.6,
      reviewCount: 2541,
      image: lavaslimImg,
      affiliateLink: "https://www.clickrtrckr.com/646BD27/4ZSH4L4/",
      badge: "Novo",
      category: "health",
    },
    {
      id: "5",
      title: "HOT KETONIC Keto Capsules",
      description:
        "Advanced ketogenic capsules for weight loss. Available in FR, CH, BE, LU.",
      rating: 4.9,
      reviewCount: 4120,
      image: ketonicImg,
      affiliateLink: "https://www.clickrtrckr.com/646BD27/4N88993/",
      badge: "Mais vendido",
      category: "health",
    },
    {
      id: "6",
      title: "NEW Quietum Plus",
      description:
        "Natural supplement for hearing support. Available in US, CA, AU, UK, NZ, IE.",
      rating: 4.4,
      reviewCount: 1850,
      image: quietumImg,
      affiliateLink: "https://www.clickrtrckr.com/646BD27/4ZGQXFT/",
      badge: "Novo",
      category: "health",
    },
    {
      id: "7",
      title: "NEW Glucavit Diet",
      description: "Innovative dietary formula available in Sweden.",
      rating: 4.3,
      reviewCount: 960,
      image: glucavitImg,
      affiliateLink: "https://www.clickrtrckr.com/646BD27/4XBSLHW/",
      badge: "Novo",
      category: "health",
    },
    {
      id: "8",
      title: "RiseFuel Male Enhancement Capsules",
      description:
        "Boost vitality, stamina, and performance naturally with advanced male enhancement capsules.",
      rating: 4.6,
      reviewCount: 1342,
      image: risefuelImg,
      affiliateLink: "https://www.clickrtrckr.com/646BD27/4RS7W8R/",
      badge: "Hot",
      category: "health",
    },
    {
      id: "9",
      title: "Ryoko PRO WiFi Router",
      description:
        "Experience blazing-fast internet speeds and seamless connectivity with the Ryoko PRO WiFi Router.",
      rating: 4.8,
      reviewCount: 876,
      image: RyokoImg,
      affiliateLink: "https://www.clickrtrckr.com/646BD27/4GRH4B9/",
      badge: "Bestseller",
      category: "electronics",
    },
    {
      id: "10",
      title: "Hume Body Pod",
      description:
        "Revolutionize your fitness routine with the Hume Body Pod, a cutting-edge device for full-body workouts.",
      rating: 4.7,
      reviewCount: 654,
      image: humeImg,
      affiliateLink: "https://www.clickrtrckr.com/646BD27/4TJSS22/",
      badge: "New",
      category: "electronics",
    },
    {
      id: "11",
      title: "Synoshi - Spin Power Scrubber",
      description:
        "Make cleaning effortless with the Synoshi Spin Power Scrubber, designed for tough stains and hard-to-reach areas.",
      rating: 4.5,
      reviewCount: 432,
      image: synoshiImg,
      affiliateLink: "https://www.clickrtrckr.com/646BD27/6ST7SM/",
      badge: "New",
      category: "electronics",
    },
   
    {
      id: "13",
      title: "Zappify 2.0",
      description:
        "Upgrade your audio experience with Zappify 2.0, featuring crystal-clear sound and deep bass.",
      rating: 4.6,
      reviewCount: 1123,
      image: ZappifyImg,
      affiliateLink: "https://www.clickrtrckr.com/646BD27/4B269N1/",
      badge: "New",
      category: "electronics",
    },
    {
      id: "14",
      title: "InsecTrap",
      description:
        "Protect your home with InsecTrap, an innovative insect trap that captures pests without harmful chemicals.",
      rating: 4.3,
      reviewCount: 678,
      image: InsecTrapImg,
      affiliateLink: "https://www.clickrtrckr.com/646BD27/3335GRZ/",
      badge: "New",
      category: "electronics",
    },
    {
      id: "15",
      title: "ScrollGenie",
      description:
        "Enhance your browsing experience with ScrollGenie, a smart scrolling tool for effortless navigation.",
      rating: 4.2,
      reviewCount: 345,
      image: ScrollGenieImg,
      affiliateLink: "https://www.clickrtrckr.com/646BD27/335X896/",
      badge: "New",
      category: "electronics",
    },
    {
      id: "16",
      title: "Klaudena - Seat Cushion",
      description:
        "Experience ultimate comfort with the Klaudena Seat Cushion, designed to support your posture and relieve pressure.",
      rating: 4.5,
      reviewCount: 512,
      image: klaudenaImg,
      affiliateLink: "https://www.clickrtrckr.com/646BD27/6RGC42/",
      badge: "New",
      category: "health",
    },
    {
      id: "17",
      title: "CuraBall",
      description: "CuraBall - CTC $69.95 (Event Tracking) [US]",
      rating: 4.5,
      reviewCount: 432,
      image: CuraBallImg,
      affiliateLink: "https://www.clickrtrckr.com/646BD27/464GHJ2/",
      badge: "Hot",
      category: "electronics",
    },
    {
      id: "18",
      title: "Echo Labs",
      description: "EchoLabs - CTC $49.95 (Event Tracking) [US]",
      rating: 4.4,
      reviewCount: 289,
      image: EchoLabsImg,
      affiliateLink: "https://www.clickrtrckr.com/646BD27/4B3K6DL/",
      badge: "New",
      category: "electronics",
    },
    {
      id: "19",
      title: "Bioma Probiotics",
      description:
        "Bioma Probiotics Feminine Health {+Advertorial, DTC, Alt-Landers, Quiz}",
      rating: 4.6,
      reviewCount: 678,
      image: BiomaProbioticsImg,
      affiliateLink: "https://www.clickrtrckr.com/646BD27/4G87D7L/",
      badge: "New",
      category: "health",
    },
    {
      id: "20",
      title: "Menovelle",
      description: "Menovelle {+VSL, TSL, DTC} [US, CA, AU, UK, NZ, IE]",
      rating: 4.5,
      reviewCount: 512,
      image: MenovelleImg,
      affiliateLink: "https://www.clickrtrckr.com/646BD27/4XZW43R/",
      badge: "New",
      category: "health",
    },
    {
      id: "21",
      title: "Chat GPT5 Mastery",
      description:"20 HD Training Video Course",
      rating: 4.8,
      reviewCount: 1500,
      image: Gpt5Img,
      affiliateLink: "https://warriorplus.com/o2/a/g2vxmg2/0",
      badge: "New",
      category: "digital",
    },
    {
      id: "22",
      title: "KlickTipp",
      description:"Email Marketing Made Easy",
      rating: 4.7,
      reviewCount: 1100,
      image: KlickTippImg,
      affiliateLink: "https://www.digistore24.com/redir/38219/Lazivanio/",
      badge: "New",
      category: "digital",
    },
    {
      id: "23",
      title: "Affiliate Marketing",
      description: "Click Ebook Affiliate Marketing Portuguese",
      rating: 4.6,
      reviewCount: 800,
      image: AfiliadoImg,
      affiliateLink: "https://www.checkout-ds24.com/redir/568903/Lazivanio/",
      badge: "New",
      category: "digital",
    },
    {
      id: "24",
      title: "STGAubron Gaming",
      description: "SSTGAubron Gaming PC Computer Desktop, Intel Core i5-9400F up to 4.1G, GeForce RTX 2060 6G, 16GB DDR4, 1TB SSD, WiFi 6, BT 5.2, RGB Fan x4, Windows 11 Home",
      rating: 4.0,
      reviewCount: 111,
      image: STGAubronGamingImg,
      affiliateLink: "https://amzn.to/3WDQjdi",
      badge: "Hot",
      category: "electronics",
    },
    {
      id: "25",
      title: "EGV Wireless Charger",
      description:"EGV Wireless Charger for Samsung – 3 in 1 Wireless Charging Station for Galaxy S25 Ultra S24 S23, Z Fold Flip 7/6, Detachable Watch Charger for Galaxy Ultra 8/7/6, Foldable, Fast Charging, No Adapter",
      rating: 4.3,
      reviewCount: 250,
      image: EGVWirelessChargerImg,
      affiliateLink: "https://amzn.to/48KX4YH",
      badge: "New",
      category: "electronics",
    },
    {
      id: "26",
      title: "NanoBanana AI",
      description: "NanoBanana AI - Your All-in-One AI Design & Creativity Suite information",
      rating: 4.7,
      reviewCount: 1340,
      image: NanoBananaAIImg,
      affiliateLink: "https://jvz2.com/c/3412185/424635/",
      badge: "New",
      category: "digital",
    },
    {
      id: "27",
      title: "300 modelos de logótipos",
      description: "Eleve sua marca com 300 modelos de logotipo - PSD / JPG!",
      rating: 4.5,
      reviewCount: 432,
      image: modelosdelogotiposImg,
      affiliateLink: "https://www.digistore24.com/redir/569095/Lazivanio/",
      badge: "New",
      category: "digital",
    },
    {
      id: "28",
      title: "Wellnee - Pain Relief Patches ",
      description: " Wellnee - Pain Relief Patches - 10 for 3 {+Advertorial, DTC, Multi-Lang, Alt-Landers} (Event Tracking) [US, DE, CA, AU, UK, FR, IL, +233 More] ",
      rating: 4.5,
      reviewCount: 432,
      image: WellneeImg,
      affiliateLink: "https://www.clickrtrckr.com/646BD27/3K2QLC6/",
      badge: "Hot",
      category: "health",
    },
    {
      id: "29",
      title: "Wireless Earbuds",
      description: "Wireless Earbuds, Bluetooth 5.4 Headphones Bass Stereo, Ear Buds with Noise Cancelling Mic, LED Display in Ear Earphones Clear Calls, IP7 Waterproof Bluetooth Earbuds for Laptop/Phones, Rose Gold",
      rating: 5.0,
      reviewCount: 5312,
      image: WirelessImg,
      affiliateLink: "https://amzn.to/4hao1AB",
      badge: "Bestseller",
      category: "electronics",
    },
  ];

  // Gera lista de categorias dinamicamente
  const categories = ["all", ...new Set(products.map((p) => p.category))];

  // Aplica filtros
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Produtos</h1>

        {/* Barra de busca */}
        <div className="flex gap-2 mb-6">
          <Input
            type="text"
            placeholder="Pesquisar produto..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button variant="outline">
            <Search className="h-4 w-4 mr-2" /> Buscar
          </Button>
        </div>

        {/* Botões de categorias */}
         <div className="flex gap-2 mb-6 flex-wrap">
           {categories.map((cat) => {
             const label = cat.charAt(0).toUpperCase() + cat.slice(1);
               return (
         <Button
          key={cat}
           variant={selectedCategory === cat ? "default" : "outline"}
          onClick={() => setSelectedCategory(cat)} >
        {label}
      </Button>
    );
  })}
</div>

        {/* Listagem de produtos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Products;
