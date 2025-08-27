"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const photoGalleryImages = [
  {
    alt: "Group of students posing after a successful performance",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1755586892/ab2_gkljyb.jpg",
  },
  {
    alt: "A young student practicing a basic Bharatanatyam stance",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1755586893/b2_uqumpb.jpg",
  },
  {
    alt: "Close-up of ornate traditional jewelry worn by a dancer",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1755586894/gallery1_zpvgdp.jpg",
  },
  {
    alt: "Dancers in vibrant silk sarees during a cultural event",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1755666075/g7_tfxxgk.jpg",
  },

  {
    alt: "An instructor demonstrating a complex footwork pattern",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1755666075/g9_ekmips.jpg",
  },
  {
    alt: "A candid moment of laughter between students during a break",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1755666074/g6_dr9x41.jpg",
  },
  {
    alt: "A powerful, expressive pose by an advanced student",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1755666074/g14_bfngtw.jpg",
  },
  {
    alt: "The entire Nritya Gurukul family together for a celebration",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1755666073/g13_lytwkm.jpg",
  },
  {
    alt: "The entire Nritya Gurukul family together for a celebration",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1755666073/g15_mfvcug.jpg",
  },
  {
    alt: "The entire Nritya Gurukul family together for a celebration",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1755666073/g3_ec8lfq.jpg",
  },
  {
    alt: "The entire Nritya Gurukul family together for a celebration",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1755666072/g11_kagpoi.jpg",
  },
  {
    alt: "The entire Nritya Gurukul family together for a celebration",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1755666072/g2_cw2bvs.jpg",
  },
  {
    alt: "The entire Nritya Gurukul family together for a celebration",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1755666072/g10_kjhk0b.jpg",
  },
  {
    alt: "The entire Nritya Gurukul family together for a celebration",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1755666072/g12_y4wppi.jpg",
  },
  {
    alt: "The entire Nritya Gurukul family together for a celebration",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1755666071/g1_ubzkv5.jpg",
  },
  {
    alt: "The entire Nritya Gurukul family together for a celebration",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1755666071/g16_odcdet.jpg",
  },
];

const nineImages = [
  {
    alt: "Group of students posing after a successful performance",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1756270723/img8_z16k5j.jpg",
  },
  {
    alt: "Group of students posing after a successful performance",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1756270723/img9_qx8blx.jpg",
  },
  {
    alt: "Group of students posing after a successful performance",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1756270723/img7_zmgjyp.jpg",
  },
  {
    alt: "Group of students posing after a successful performance",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1756270722/img6_aixzdg.jpg",
  },
  {
    alt: "Group of students posing after a successful performance",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1756270722/img5_glzyia.jpg",
  },
  {
    alt: "Group of students posing after a successful performance",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1756270722/img4_cu6jiy.jpg",
  },
  {
    alt: "Group of students posing after a successful performance",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1756270722/img3_yauyf3.jpg",
  },
  {
    alt: "Group of students posing after a successful performance",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1756270722/img26_hhiith.jpg",
  },
  {
    alt: "Group of students posing after a successful performance",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1756270722/img25_intvz8.jpg",
  },
  {
    alt: "Group of students posing after a successful performance",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1756270721/img24_htvn8e.jpg",
  },
  {
    alt: "Group of students posing after a successful performance",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1756270721/img_o9zjjm.jpg",
  },
  {
    alt: "Group of students posing after a successful performance",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1756270721/img22_avjoct.jpg",
  },

  {
    alt: "Group of students posing after a successful performance",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1756270721/img23_vi8s9f.jpg",
  },
  {
    alt: "Group of students posing after a successful performance",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1756270721/img17_qkrofi.jpg",
  },
  {
    alt: "Group of students posing after a successful performance",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1756270721/img16_yjyyky.jpg",
  },
  {
    alt: "Group of students posing after a successful performance",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1756270720/img20_zm8kzu.jpg",
  },

  {
    alt: "Group of students posing after a successful performance",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1756270720/img15_wwia8u.jpg",
  },
  {
    alt: "Group of students posing after a successful performance",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1756270720/img21_dxlr8y.jpg",
  },
  {
    alt: "Group of students posing after a successful performance",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1756270720/img13_szgjry.jpg",
  },
  {
    alt: "Group of students posing after a successful performance",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1756270720/img2_fj9q6r.jpg",
  },
  {
    alt: "Group of students posing after a successful performance",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1756270720/img14_srrrdz.jpg",
  },
  {
    alt: "Group of students posing after a successful performance",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1756270719/img12_zqpnpf.jpg",
  },
  {
    alt: "Group of students posing after a successful performance",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1756270719/img19_kfzwwi.jpg",
  },
  {
    alt: "Group of students posing after a successful performance",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1756270719/img1_nyftik.jpg",
  },
  {
    alt: "Group of students posing after a successful performance",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1756270719/img11_mkiuhq.jpg",
  },
  {
    alt: "Group of students posing after a successful performance",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1756270719/img10_wodwwv.jpg",
  },
  {
    alt: "Group of students posing after a successful performance",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1756270719/img18_lbs4nr.jpg",
  },
];

const narayanImages = [
  {
    alt: "narayanImage",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1756291175/Narayan_Narayan_a5ixaj.png",
  },
  {
    alt: "narayanImage",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1756285473/DSC_7830_yhptdr.jpg",
  },
  {
    alt: "narayanImage",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1756285473/DSC_7662_ibx6ci.jpg",
  },
  {
    alt: "narayanImage",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1756285473/DSC_7638_joebg0.jpg",
  },
  {
    alt: "narayanImage",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1756285472/DSC_7632_dljr3m.jpg",
  },
  {
    alt: "narayanImage",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1756285472/DSC_7519_cl7vyz.jpg",
  },
  {
    alt: "narayanImage",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1756285472/DSC_7614_meo47d.jpg",
  },
  {
    alt: "narayanImage",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1756285472/DSC_7574_xh6sdo.jpg",
  },
  {
    alt: "narayanImage",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1756285471/DSC_7508_jhuzwg.jpg",
  },
  {
    alt: "narayanImage",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1756285471/DSC_7598_nyre3y.jpg",
  },
  {
    alt: "narayanImage",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1756285471/DSC_7462_vh2c71.jpg",
  },
  {
    alt: "narayanImage",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1756285470/DSC_7237_fr29uw.jpg",
  },
  {
    alt: "narayanImage",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1756285470/DSC_7411_vfye0m.jpg",
  },
  {
    alt: "narayanImage",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1756285470/DSC_7419_vk5std.jpg",
  },
  {
    alt: "narayanImage",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1756285470/DSC_7343_t0ramy.jpg",
  },
  {
    alt: "narayanImage",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1756285470/DSC_7331_mfgcf1.jpg",
  },
  {
    alt: "narayanImage",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1756285470/DSC_7309_i1dgcg.jpg",
  },
  {
    alt: "narayanImage",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1756285469/DSC_7289_f0ebds.jpg",
  },
  {
    alt: "narayanImage",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1756285469/DSC_7214_jm7tc7.jpg",
  },
  {
    alt: "narayanImage",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1756285469/DSC_7128_unytie.jpg",
  },
  {
    alt: "narayanImage",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1756285469/DSC_7120_nt3f10.jpg",
  },
  {
    alt: "narayanImage",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1756285468/DSC_7098_hcubv3.jpg",
  },
  {
    alt: "narayanImage",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1756285468/DSC_7085_f7vnvz.jpg",
  },
  {
    alt: "narayanImage",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1756285468/DSC_6964_nvgkmy.jpg",
  },
  {
    alt: "narayanImage",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1756285468/DSC_7036_isimhb.jpg",
  },
  {
    alt: "narayanImage",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1756285468/DSC_6934_kxaudz.jpg",
  },
  {
    alt: "narayanImage",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1756285468/DSC_7002_nybtd5.jpg",
  },
  {
    alt: "narayanImage",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1756285468/DSC_6897_b5jwgg.jpg",
  },
  {
    alt: "narayanImage",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1756285467/DSC_6888_wf8ai2.jpg",
  },
  {
    alt: "narayanImage",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1756285467/DSC_6817_qiblz5.jpg",
  },
  {
    alt: "narayanImage",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1756285467/DSC_6876_rkegwp.jpg",
  },
  {
    alt: "narayanImage",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1756285467/DSC_6865_uxuonm.jpg",
  },
  {
    alt: "narayanImage",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1756285467/DSC_6834_zx6xg0.jpg",
  },
  {
    alt: "narayanImage",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1756285467/DSC_6782_bxpj82.jpg",
  },
  {
    alt: "narayanImage",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1756285466/DSC_6775_ftm4o9.jpg",
  },
  {
    alt: "narayanImage",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1756285466/DSC_6698_rdrt91.jpg",
  },
  {
    alt: "narayanImage",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1756285466/DSC_6768_qwxeoo.jpg",
  },
  {
    alt: "narayanImage",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1756285466/DSC_6758_vfzph0.jpg",
  },
  {
    alt: "narayanImage",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1756285466/DSC_6739_efm934.jpg",
  },
  {
    alt: "narayanImage",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1756285466/DSC_6733_hhtmgz.jpg",
  },
  {
    alt: "narayanImage",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1756285465/DSC_6662_vrtfma.jpg",
  },
  {
    alt: "narayanImage",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1756285465/DSC_6596_gje0rf.jpg",
  },
  {
    alt: "narayanImage",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1756285465/DSC_6657_gvi02r.jpg",
  },
  {
    alt: "narayanImage",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1756285465/DSC_6352_wjsqzs.jpg",
  },
  {
    alt: "narayanImage",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1756285464/DSC_6565_rplefw.jpg",
  },
  {
    alt: "narayanImage",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1756285464/DSC_6447_yjdg2c.jpg",
  },
  {
    alt: "narayanImage",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1756285464/DSC_6386_-_Copy_bjrjek.jpg",
  },
  {
    alt: "narayanImage",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1756285464/DSC_6551_jlvj2v.jpg",
  },
  {
    alt: "narayanImage",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1756285464/DSC_6385_-_Copy_vqybsu.jpg",
  },
  {
    alt: "narayanImage",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1756285464/DSC_6402_ecclcy.jpg",
  },
  {
    alt: "narayanImage",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1756285463/DSC_6330_dji5dz.jpg",
  },
  {
    alt: "narayanImage",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1756285463/DSC_6496_xkm20s.jpg",
  },
  {
    alt: "narayanImage",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1756285463/DSC_6535_jsokme.jpg",
  },
  {
    alt: "narayanImage",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1756285463/DSC_6325_up94x9.jpg",
  },
  {
    alt: "narayanImage",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1756285463/DSC_6273_euevue.jpg",
  },
  {
    alt: "narayanImage",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1756285463/DSC_6275_tiwlwf.jpg",
  },
];

const premImages = [
  {
    alt: "premImage",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1756285477/VIN07576_trhwjh.jpg",
  },
  {
    alt: "premImage",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1756285477/VIN07280_endgol.jpg",
  },
  {
    alt: "premImage",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1756285477/VIN07275_sffhyv.jpg",
  },
  {
    alt: "premImage",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1756285476/VIN07265_fgvcjb.jpg",
  },
  {
    alt: "premImage",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1756285476/VIN07257_jz5cle.jpg",
  },
  {
    alt: "premImage",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1756285476/VIN07255_x2y6cr.jpg",
  },
  {
    alt: "premImage",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1756285475/VIN07247_p5bijm.jpg",
  },
  {
    alt: "premImage",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1756285475/VIN07244_owcing.jpg",
  },
  {
    alt: "premImage",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1756285475/VIN07218_vaqai2.jpg",
  },
  {
    alt: "premImage",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1756285475/VIN07235_biwnpn.jpg",
  },
  {
    alt: "premImage",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1756285475/VIN07229_fva056.jpg",
  },
  {
    alt: "premImage",
    src: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1756285474/VIN07219_gwe1qe.jpg",
  },
];
const arangetramImages = [];

const dataSources = {
  photoGalleryImages,
  narayanImages,
  premImages,
  arangetramImages,
  nineImages,
};

const PhotoGallery = () => {
  const showMore = 4;
  const [visible, setvisible] = useState(8);
  const [cimg, setCimg] = useState("photoGalleryImages");
  const currentData = dataSources[cimg];
  const max = currentData.length;
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleClick = () => {
    setvisible((prev) => Math.min(prev + showMore, max));
  };

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : max - 1));
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev < max - 1 ? prev + 1 : 0));
  };

  const handleMethodChange = (method) => {
    setCimg(method);
    setvisible(8);
    setSelectedIndex(null);
  };

  return (
    <section className="py-10 px-4 scroll-m-20" id="photos">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold font-['Cinzel'] mb-4">
            <span className="dance-ornament">Photo</span> Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A glimpse into the life, culture, and art at Nritya Gurukul.
          </p>
        </motion.div>

        {/* Photo Grid */}
        <div className="flex space-x-1 bg-gradient-to-r  to-yellow-500 via-orange-600 from-red-500 rounded-lg p-1.5 mb-5 text-[15px]">
          <button
            onClick={() => handleMethodChange("photoGalleryImages")}
            className={`w-full px-4 py-2 rounded-md transition-colors flex items-center justify-center gap-2 duration-300 ${
              cimg === "photoGalleryImages"
                ? "bg-white text-orange-600 font-semibold shadow-sm  text-[16px]"
                : "text-white/90 hover:font-semibold"
            }`}
          >
            Snapshots ({photoGalleryImages.length})
          </button>
          <button
            onClick={() => handleMethodChange("nineImages")}
            className={`w-full px-4 py-2 rounded-md transition-colors flex items-center justify-center gap-2 duration-300 ${
              cimg === "nineImages"
                ? "bg-white text-orange-600 font-semibold shadow-sm  text-[16px]"
                : "text-white/90 hover:font-semibold"
            }`}
          >
            Nine Nights({nineImages.length})
          </button>
          <button
            onClick={() => handleMethodChange("narayanImages")}
            className={`w-full px-4 py-2 rounded-md transition-colors flex items-center justify-center gap-2 duration-300 ${
              cimg === "narayanImages"
                ? "bg-white text-orange-600 font-semibold shadow-sm  text-[16px]"
                : "text-white/90 hover:font-semibold"
            }`}
          >
            Narayan Narayan ({narayanImages.length})
          </button>
          <button
            onClick={() => handleMethodChange("premImages")}
            className={`w-full px-4 py-2 rounded-md transition-colors flex items-center justify-center gap-2 duration-300 ${
              cimg === "premImages"
                ? "bg-white text-orange-600 font-semibold shadow-sm  text-[16px]"
                : "text-white/90 hover:font-semibold"
            }`}
          >
            Prem Vonod ({premImages.length})
          </button>
          <button
            onClick={() => handleMethodChange("arangetramImages")}
            className={`w-full px-4 py-2 rounded-md transition-colors flex items-center justify-center gap-2 duration-300 ${
              cimg === "arangetramImages"
                ? "bg-white text-orange-600 font-semibold shadow-sm  text-[16px]"
                : "text-white/90 hover:font-semibold"
            }`}
          >
            Arangetram ({arangetramImages.length})
          </button>
        </div>

        {max === 0 ? (
          <p className="text-center text-gray-500 py-10">
            No images available.
          </p>
        ) : (
          <>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentData} 
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
              >
                {currentData.slice(0, visible).map((image, index) => {
                  return (
                    <motion.div
                      key={index}
                      className="relative aspect-square w-full rounded-xl overflow-hidden shadow-xl border border-orange-200"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.6,
                        delay: (index ) * 0.1,
                      }}
                      onClick={() => setSelectedIndex(index)}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.03, zIndex: 10 }}
                    >
                      <img
                        className="w-full h-full object-cover"
                        alt={image.alt}
                        src={image.src}
                        loading="lazy"
                      />
                    </motion.div>
                  );
                })}
              </motion.div>
              {visible < max && (
                <motion.div
                  className="w-fit mx-auto"
                  initial={{ opacity: 0.8, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03 }}
                  onClick={handleClick}
                >
                  <button className="rounded-2xl text-xl mt-6 px-8 py-2 cursor-pointer mx-auto bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white">
                    Show More
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}
      </div>
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 flex z-50 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="fixed inset-0 w-full h-full bg-black opacity-90"
              onClick={() => setSelectedIndex(null)}
            ></div>
            <div className="flex items-center mt-0 min-h-screen px-4 z-20 mx-auto">
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 md:top-14 md:right-14 text-white cursor-pointer"
                onClick={() => setSelectedIndex(null)}
              >
                <X className="text-5xl" size={35} />
              </button>

              {/* Prev Button */}
              {selectedIndex != 0 && (
                <button
                  className="absolute left-4 md:left-14 top-1/2 -translate-y-1/2 text-white cursor-pointer"
                  onClick={handlePrev}
                >
                  <ChevronLeft size={50} />
                </button>
              )}

              {/* Image */}
              <AnimatePresence mode="wait">
                <motion.img
                  key={selectedIndex}
                  src={currentData[selectedIndex].src}
                  alt={currentData[selectedIndex].alt}
                  className="mx-auto max-h-[80vh] rounded-lg shadow-lg"
                  initial={{ opacity: 0, scale: 0.95, x: 200 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.95, x: -200 }}
                  transition={{ duration: 0.3 }}
                />
              </AnimatePresence>

              {/* Next Button */}
              {selectedIndex != max - 1 && (
                <button
                  className="absolute right-4 md:right-14 top-1/2 -translate-y-1/2 text-white cursor-pointer"
                  onClick={handleNext}
                >
                  <ChevronRight size={50} />
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PhotoGallery;
