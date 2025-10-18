'use client'

import { useState, useEffect } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '@/firebase'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'

interface GalleryImage {
  id: string;
  imageUrl: string;
  caption: string;
}
const images:GalleryImage[]=[{
  id:'1 logo',
imageUrl:"/logo.png",
caption:"logo"
},
{
  id:'2 Psira',
imageUrl:"/Psira-Logo-1-1024x538.png",
caption:"Psira"
},  
{
  id:'3 sars',
imageUrl:"/sars-logo-1024x320.jpg",
caption:"sars"
}
]
export default function Slideshow() {
  // const [images, setImages] = useState<GalleryImage[]>([])
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])

  // useEffect(() => {
  //   const fetchImages = async () => {
  //     const querySnapshot = await getDocs(collection(db, 'gallery_images'))
  //     const fetchedImages = querySnapshot.docs.map(doc => ({
  //       id: doc.id,
  //       imageUrl: doc.data().image_url,
  //       caption: doc.data().description,
  //     }))
  //     setImages(fetchedImages)
  //   }

  //   fetchImages()
  // }, [])

  if (images.length < 2) {
    return null
  }

  return (
    <div className="embla " ref={emblaRef}>
      <div className="embla__container ">
        {images.map(image => (
          <div className="embla__slide " key={image.id}>
            <Image width={100000} height={100000} src={image.imageUrl} alt={image.caption} className="w-full rounded-lg h-auto" />
          </div>
        ))}
      </div>
    </div>
  )
}
