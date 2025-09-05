import GalleryIntro from '@/components/gallery/GalleryIntro';
import PhotoGallery from '@/components/gallery/PhotoGallery';
import StudentShowcase from '@/components/gallery/StudentShowcase';
import VideoGallery from '@/components/gallery/VideoGallery';

export const metadata = {
  title: 'Gallery | Nritya Gurukul',
  description:
    'Explore the vibrant gallery of Nritya Gurukul. Watch captivating Bharatanatyam performances and witness the talent of our students.',
  openGraph: {
    title: 'Gallery | Nritya Gurukul',
    description:
      'Explore the vibrant gallery of Nritya Gurukul. Watch captivating Bharatanatyam performances and witness the talent of our students.',
  },
};

export default function GalleryPage() {
  return (
    <div>
      <GalleryIntro /> 
      <PhotoGallery />
      <VideoGallery />
      <StudentShowcase/>
    </div>
  );
}
