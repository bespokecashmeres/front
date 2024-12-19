import Image from "next/image";

const ResponsiveImage = () => {
  return (
    <div className="image-container">
      {/* Landscape Image */}
      <img
        src="/landscape.webp"
        className="landscape"
        alt="Landscape Image"

      
        
      />
      {/* Portrait Image */}
      <img
        src="/portrait.webp"
        className="portrait"
        alt="Portrait Image"
    
     
        
      />
    </div>
  );
};

export default ResponsiveImage;
