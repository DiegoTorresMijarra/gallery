import ImageElement from '../components/ImageElement'
import { getAsset } from 'node:sea'

const imageNames = [
  '2x1.jpg',
  '8e37c6fa-1667-498e-ac63-d06de4d52f83.webp',
  '400.png',
  '1620402630-laravel.png',
  'bebidas.jpeg',
  'bruja.png',
  'CapturaPortfolio.PNG',
  'CapturaPortfolio2.PNG',
  'CapturaPortfolio3.PNG',
  'contacto.png',
  'croqueta.jpg',
  'entrantes.jpg',
]

function ImageGallery() {
  return (
    <div>
      <img src="/cdn-images/contacto.png" alt="Descripción de la imagen" />

      {imageNames.map((imageName) => (
        <ImageElement
          key={imageName}
          src={`/cdn-images/${imageName}`} // Asume que la carpeta 'cdn-images' está en 'public'
          alt={`Imagen ${imageName}`}
        />
      ))}
    </div>
  )
}

export default ImageGallery
