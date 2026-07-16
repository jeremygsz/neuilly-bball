"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Counter from "yet-another-react-lightbox/plugins/counter";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/counter.css";
import s from "./GalleryLightbox.module.scss";

interface GalleryImage {
    src: string;
    alt: string;
    label?: string;
}

interface GalleryLightboxProps {
    images: GalleryImage[];
}

export function GalleryLightbox({ images }: GalleryLightboxProps) {
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    const openAt = useCallback((i: number) => {
        setIndex(i);
        setOpen(true);
    }, []);

    const slides = images.map((img) => ({ src: img.src, alt: img.alt }));

    // On affiche les 3 premières en grandes, puis le reste en grille
    const heroImages = images.slice(0, 3);
    const gridImages = images.slice(3);

    return (
        <div className={s.wrapper}>

            {/* ── Rangée héro (3 grandes) ── */}
            <div className={s.heroRow}>
                {heroImages.map((img, i) => (
                    <button
                        key={img.src}
                        className={s.heroItem}
                        onClick={() => openAt(i)}
                        aria-label={`Ouvrir la photo ${img.label ?? i + 1}`}
                        type="button"
                    >
                        <Image
                            src={img.src}
                            alt={img.alt}
                            fill
                            className={s.galleryImage}
                            sizes="(max-width: 768px) 100vw, 33vw"
                        />
                        <div className={s.overlay}>
                            {img.label && <span className={s.label}>{img.label}</span>}
                            <span className={s.zoomIcon}>⊕</span>
                        </div>
                    </button>
                ))}
            </div>

            {/* ── Grille principale ── */}
            {gridImages.length > 0 && (
                <div className={s.grid}>
                    {gridImages.map((img, i) => {
                        const globalIndex = i + 3;
                        const isLast = i === gridImages.length - 1 && gridImages.length > 0;
                        const remaining = images.length - 3 - gridImages.length;

                        return (
                            <button
                                key={img.src}
                                className={`${s.gridItem} ${isLast && remaining > 0 ? s.gridItemLast : ""}`}
                                onClick={() => openAt(globalIndex)}
                                aria-label={`Ouvrir la photo ${img.label ?? globalIndex + 1}`}
                                type="button"
                            >
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    fill
                                    className={s.galleryImage}
                                    sizes="(max-width: 768px) 50vw, 20vw"
                                />
                                <div className={s.overlay}>
                                    {img.label && <span className={s.label}>{img.label}</span>}
                                    <span className={s.zoomIcon}>⊕</span>
                                </div>
                            </button>
                        );
                    })}
                </div>
            )}

            <p className={s.hint}>
                Cliquez sur une photo pour l'agrandir — {images.length} photos disponibles
            </p>

            {/* ── Lightbox ── */}
            <Lightbox
                open={open}
                close={() => setOpen(false)}
                index={index}
                slides={slides}
                plugins={[Zoom, Slideshow, Thumbnails, Counter]}
                zoom={{
                    maxZoomPixelRatio: 3,
                    zoomInMultiplier: 2,
                }}
                slideshow={{
                    autoplay: false,
                    delay: 3500,
                }}
                thumbnails={{
                    position: "bottom",
                    width: 80,
                    height: 56,
                    border: 2,
                    borderRadius: 6,
                    gap: 8,
                }}
                counter={{ container: { style: { top: "unset", bottom: 0 } } }}
                styles={{
                    container: {
                        backgroundColor: "rgba(13, 27, 62, 0.97)",
                    },
                    button: {
                        filter: "none",
                        color: "#ffffff",
                    },
                    slide: {
                        padding: "2rem",
                    },
                }}
                carousel={{
                    finite: false,
                    preload: 2,
                }}
            />
        </div>
    );
}
