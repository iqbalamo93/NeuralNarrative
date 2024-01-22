import { useState } from 'react';
import { Image } from 'astro:assets';

const FloatingImageWidget = ({ src, alt }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  const toggleZoom = () => setIsZoomed(!isZoomed);

  return (
    <div className={`fixed-image ${isZoomed ? 'zoomed' : ''}`} onClick={toggleZoom}>
      <Image src={src} alt={alt} style={{ width: isZoomed ? '100%' : '300px' }} />
    </div>
  );
};

export default FloatingImageWidget;
