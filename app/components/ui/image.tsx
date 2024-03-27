import { useEffect, useState } from "react";
import { default as NextImage, ImageProps } from "next/image";

interface Props {
  fallbackImage?: string;
}

const Image = ({
  fallbackImage = "/images/stars.png",
  alt,
  src,
  ...props
}: Props & ImageProps) => {
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    setError(null);
  }, [src]);

  return (
    <NextImage
      alt={alt}
      onError={setError}
      src={error ? fallbackImage : src}
      {...props}
    />
  );
};

export default Image;
