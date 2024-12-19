import Image from "next/image";

const ResponsiveImage = () => {
  return (
    <div className="image-container">
      {/* Landscape Image */}
      <Image
        src="/landscape.webp"
        className="landscape"
        alt="Landscape Image"
        layout="fill"
        objectFit="cover"
        priority
      />
      {/* Portrait Image */}
      <Image
        src="/portrait.webp"
        className="portrait"
        alt="Portrait Image"
        layout="fill"
        objectFit="cover"
        priority
      />
    </div>
  );
};

export default ResponsiveImage;
