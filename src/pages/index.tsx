import ImageElement from '../components/ImageElement'

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
      {imageNames.map((imageName) => (
        <ImageElement
          key={imageName}
          src={`https://diegotorresmijarra.github.io/gallery/cdn-images/${imageName}`}
          alt={`Imagen ${imageName}`}
        />
      ))}
    </div>
  )
}

export default ImageGallery
