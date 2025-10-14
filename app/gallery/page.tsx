
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from '@/components/ui/card';
import { GalleryImage } from '@/lib/types';
import { db } from '@/firebase';
import { getGalleryImages } from '@/lib/data';
import { Skeleton } from '@/components/ui/skeleton';

export default async function GalleryPage() {
  const allImages = await getGalleryImages(db);
  const images = allImages.filter(img => img.is_active).sort((a, b) => (a.order_index || 0) - (b.order_index || 0));

  const filterImages = (category: string) => {
    if (category === 'all') return images;
    return images.filter(image => image.category === category);
  };

  const tabs = [
    { value: 'all', label: 'All' },
    { value: 'training', label: 'Training Sessions' },
    { value: 'graduates', label: 'Our Graduates' },
    { value: 'facilities', label: 'Facilities' },
    { value: 'events', label: 'Events' },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Gallery</h1>
        <p className="text-xl text-gray-600">
          A glimpse into our training environment, our successful graduates, and our state-of-the-art facilities.
        </p>
      </div>

      <Tabs defaultValue="all" className="w-full text-center">
        <TabsList className="mb-8 p-2 h-auto">
          {tabs.map(tab => (
            <TabsTrigger key={tab.value} value={tab.value} className="text-md px-4 py-2">{tab.label}</TabsTrigger>
          ))}
        </TabsList>

        {tabs.map(tab => (
          <TabsContent key={tab.value} value={tab.value}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filterImages(tab.value).map(image => (
                <Card key={image.id} className="overflow-hidden card-elevated hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <Image
                      src={image.image_url}
                      alt={image.title || 'Gallery image'}
                      width={400}
                      height={300}
                      className="object-cover w-full h-full aspect-[4/3]"
                    />
                  </CardContent>
                </Card>
              ))}
            </div>
            {filterImages(tab.value).length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">
                  No images found in this category. Check back soon!
                </p>
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>

      {images.length === 0 && (
         <div className="text-center py-12">
           <p className="text-gray-600 text-lg mb-6">
             Our gallery is currently empty. We'll be adding photos soon!
           </p>
         </div>
      )}
    </div>
  );
}
