'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';
import { supabase } from '@/lib/supabase';

type GalleryImage = {
  id: string;
  title: string;
  image_url: string;
  category: 'training' | 'graduates' | 'facilities' | 'events';
  description?: string;
};

export default function GalleryPage() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchImages() {
      const { data, error } = await supabase
        .from('gallery_images')
        .select('*')
        .eq('is_active', true)
        .order('order_index');

      if (!error && data) {
        setImages(data);
      }
      setLoading(false);
    }

    fetchImages();
  }, []);

  const categories = [
    { value: 'all', label: 'All Photos' },
    { value: 'training', label: 'Training Sessions' },
    { value: 'graduates', label: 'Graduates' },
    { value: 'facilities', label: 'Our Facilities' },
    { value: 'events', label: 'Events' },
  ];

  const filterImages = (category: string) => {
    if (category === 'all') return images;
    return images.filter((img) => img.category === category);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Gallery</h1>
        <p className="text-xl text-gray-600">
          Take a look at our training facilities, students in action, and graduation celebrations.
        </p>
      </div>

      <Tabs defaultValue="all" className="max-w-6xl mx-auto">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8">
          {categories.map((cat) => (
            <TabsTrigger key={cat.value} value={cat.value}>
              {cat.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {categories.map((cat) => (
          <TabsContent key={cat.value} value={cat.value}>
            {loading ? (
              <div className="text-center py-12">
                <p className="text-gray-600">Loading images...</p>
              </div>
            ) : filterImages(cat.value).length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filterImages(cat.value).map((image) => (
                  <Card key={image.id} className="overflow-hidden card-elevated hover:shadow-lg transition-shadow">
                    <div className="relative h-64 bg-gray-200">
                       {/* [Image Placeholder: Security training graduation ceremony with smiling students and trainers.] */}
                      <Image
                        src={image.image_url}
                        alt={image.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-lg mb-1">{image.title}</h3>
                      {image.description && (
                        <p className="text-sm text-gray-600">{image.description}</p>
                      )}
                    </div>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600">
                  No images available in this category yet. Check back soon!
                </p>
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
