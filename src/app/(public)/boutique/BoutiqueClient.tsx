"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ShoppingBag } from "lucide-react";
import s from "./page.module.scss";

interface Product {
    id: number;
    name: string;
    category: string;
    images: string[];
    description: string;
}

const PRODUCTS: Product[] = [
    {
        id: 1,
        name: "Sweat - Jogging",
        category: "Lifestyle / Club",
        images: ["/images/merch/ensemble.jpeg"],
        description: "Ensemble Adidas comprenant sweat et jogging. Les articles peuvent être vendus séparément."
    },
    {
        id: 2,
        name: "Tenue d'Entraînement Reversible",
        category: "Entraînement",
        images: ["/images/merch/taining1.png","/images/merch/training2.png","/images/merch/training3.jpeg",
            "/images/merch/training4.jpeg","/images/merch/training5.jpeg"],
        description: "Pack comprenant le maillot d'entraînement réversible et le short assorti."
    },
    {
        id: 3,
        name: "Sac à Dos Club",
        category: "Accessoires",
        images: ["/images/merch/backpack.png"], // Placeholder if specific backpack image is missing
        description: "Sac à dos technique Adidas avec compartiment à ballon séparé."
    },
    {
        id: 4,
        name: "Veste de Sortie",
        category: "Lifestyle",
        images: ["/images/merch/veste.jpeg"], // Placeholder
        description: "Veste zippée légère pour les déplacements."
    },
    {
        id: 5,
        name: "T-shirt d'Entraînement",
        category: "Entraînement",
        images: ["/images/merch/training6.png"],
        description: "T-shirt respirant pour vos sessions de perfectionnement."
    }
];

function ProductCard({ product }: { product: Product }) {
    const [currentImage, setCurrentImage] = useState(0);
    const hasMultipleImages = product.images.length > 1;

    const nextImage = (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentImage((prev) => (prev + 1) % product.images.length);
    };

    const prevImage = (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentImage((prev) => (prev - 1 + product.images.length) % product.images.length);
    };

    return (
        <div className={s.card}>
            <div className={s.cardImage}>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentImage}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className={s.imageContainer}
                    >
                        <Image
                            src={product.images[currentImage]}
                            alt={product.name}
                            fill
                            className={s.image}
                        />
                    </motion.div>
                </AnimatePresence>
                
                {hasMultipleImages && (
                    <div className={s.carouselControls}>
                        <button onClick={prevImage} className={s.controlBtn} aria-label="Précédent">
                            <ChevronLeft size={20} />
                        </button>
                        <button onClick={nextImage} className={s.controlBtn} aria-label="Suivant">
                            <ChevronRight size={20} />
                        </button>
                        <div className={s.dots}>
                            {product.images.map((_, i) => (
                                <div 
                                    key={i} 
                                    className={`${s.dot} ${i === currentImage ? s.activeDot : ""}`} 
                                />
                            ))}
                        </div>
                    </div>
                )}
                
                <div className={s.categoryBadge}>{product.category}</div>
            </div>
            
            <div className={s.cardBody}>
                <h2 className={s.productName}>{product.name}</h2>
                <p className={s.description}>{product.description}</p>
            </div>
            
            <div className={s.cardFooter}>
                <div className={s.status}>
                    <ShoppingBag size={16} />
                    <span>Disponible au club</span>
                </div>
            </div>
        </div>
    );
}

export default function BoutiqueClient() {
    return (
        <div className={s.grid}>
            {PRODUCTS.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
}
