import Image from 'next/image'

export interface ImageElementProps {
  src: string
  alt?: string
  width?: number
  height?: number
}

function ImageElement({
  src,
  alt = 'Descripción de la imagen',
  width = 800,
  height = 600,
}: Readonly<ImageElementProps>) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      quality={75}
      placeholder="blur"
    />
  )
}

export default ImageElement
