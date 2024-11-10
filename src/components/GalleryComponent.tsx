import React, { useEffect, useCallback } from 'react'
import styled, { keyframes } from 'styled-components'
import ImageElement from '@/components/ImageElement'

const swing = keyframes`
    0% {
        transform: rotate3d(0, 0, 1, calc(-1 * var(--angle)));
    }
    100% {
        transform: rotate3d(0, 0, 1, var(--angle));
    }
`

const swingEnd = keyframes`
    to {
        transform: rotate3d(0, 0, 1, 0deg);
    }
`

const GalleryWrapper = styled.main`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100vw;
  min-height: 100vh;
  overflow: hidden;
`

const Gallery = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 30vh));
  gap: 20px;
  max-width: 100vw;
  padding: 20px;
  perspective: 0;

  &.active figure {
    animation:
      ${swing} var(--duration) ease-in-out var(--direction),
      ${swingEnd} 2.5s normal both;
  }
`

const Figure = styled.figure<{
  angle: string
  duration: string
  pinColor: string
}>`
  --angle: ${(props) => props.angle || '3deg'};
  --duration: ${(props) => props.duration || '1s'};
  --pin-color: ${(props) => props.pinColor || 'crimson'};

  position: relative;
  margin: 0;
  padding: 0.5rem;
  border-radius: 5px;
  background-color: ghostwhite;
  box-shadow: 0 7px 8px rgba(0, 0, 0, 0.4);
  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:after {
    content: '';
    position: absolute;
    top: 0.22rem;
    left: 50%;
    width: 0.7rem;
    height: 0.7rem;
    background: var(--pin-color);
    border-radius: 50%;
    box-shadow: -0.1rem -0.1rem 0.3rem 0.02rem rgba(0, 0, 0, 0.5) inset;
    transform: translateZ(0);
    z-index: 2;
  }
`

const Img = styled(ImageElement)`
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: 5px;
`

const Figcaption = styled.figcaption`
  color: #0a0a0a;
  font-size: 14px;
  font-weight: 400;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 10px;
`

const images = [
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

const SwayingGallery = () => {
  const handleScroll = useCallback(() => {
    const gallery = document.getElementById('gallery')
    if (!gallery?.classList.contains('active')) {
      gallery?.classList.add('active')
      setTimeout(() => gallery?.classList.remove('active'), 3000)
    }
  }, [])

  useEffect(() => {
    document.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleScroll)

    return () => {
      document.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [handleScroll])

  return (
    <GalleryWrapper>
      <Gallery id="gallery" aria-label="Image Gallery">
        {images.map((src, index) => (
          <Figure
            key={index}
            angle={`${index % 3 === 0 ? 6 : index % 3 === 1 ? -6 : 3}deg`}
            duration={`${(index % 3) + 1.5}s`}
            pinColor={
              [
                'crimson',
                'hotpink',
                'magenta',
                'orangered',
                'darkorchid',
                'deeppink',
                'mediumvioletred',
              ][index % 7]
            }
          >
            <Img src={src} alt={`Image ${index + 1}`} />
            <Figcaption>{`${src} PM, Season`}</Figcaption>
          </Figure>
        ))}
      </Gallery>
    </GalleryWrapper>
  )
}

export default SwayingGallery
