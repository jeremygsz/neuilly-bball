"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import s from "./ArticleImageLightbox.module.scss";

interface Props {
    src: string;
    alt: string;
}

export function ArticleImageLightbox({ src, alt }: Props) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <button
                type="button"
                className={s.imageWrap}
                onClick={() => setOpen(true)}
                aria-label={`Agrandir la photo — ${alt}`}
            >
                <Image
                    src={src}
                    alt={alt}
                    fill
                    priority
                    className={s.image}
                    sizes="(max-width: 768px) 100vw, 800px"
                />
                <div className={s.overlay}>
                    <span className={s.zoomIcon}>⊕</span>
                </div>
            </button>

            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={[{ src, alt }]}
                plugins={[Zoom]}
                zoom={{
                    maxZoomPixelRatio: 3,
                    zoomInMultiplier: 2,
                }}
                styles={{
                    container: { backgroundColor: "rgba(13, 27, 62, 0.97)" },
                    button: { filter: "none", color: "#ffffff" },
                }}
            />
        </>
    );
}
