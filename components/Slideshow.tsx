'use client'

import { useState, useEffect } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '@/firebase'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

interface GalleryImage {
  id: string;
  imageUrl: string;
  caption: string;
}

export default function Slideshow() {
  const [images, setImages] = useState<GalleryImage[]>([])
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])

  useEffect(() => {
    const fetchImages = async () => {
      const querySnapshot = await getDocs(collection(db, 'gallery_images'))
      const fetchedImages = querySnapshot.docs.map(doc => ({
        id: doc.id,
        imageUrl: doc.data().image_url,
        caption: doc.data().description,
      }))
      setImages(fetchedImages)
    }

    fetchImages()
  }, [])

  if (images.length < 5) {
    return null
  }

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {images.map(image => (
          <div className="embla__slide" key={image.id}>
            <img src={image.imageUrl} alt={image.caption} className="w-full h-auto" />
          </div>
        ))}
      </div>
    </div>
  )
}
