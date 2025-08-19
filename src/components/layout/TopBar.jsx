import { Phone, MapPin } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="bg-gray-800 text-white text-xs py-2 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <Phone size={14} />
            <span>078389 89781</span>
          </div>
          <div className="hidden sm:flex items-center space-x-1 font-poppins">
            <MapPin size={14} />
            <span className='font-family-poppins'>Kendriya Vihar II, Sector 82, Noida</span>
          </div>
        </div>
        <div className="hidden sm:block">
          <span className="font-semibold">Join the best Bharatnatyam classes in Noida!</span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;