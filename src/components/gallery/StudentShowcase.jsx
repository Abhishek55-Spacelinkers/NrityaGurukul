"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const STUDENTS = [
  {
    id: 1,
    name: "Virika Maheshwari",
    level: "Intermediate",
    img: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1757055193/Virika_Maheshwari_-_Intermediate_Level_qgs1po.jpg",
  },
  {
    id: 2,
    name: "Urjanvi Namdev",
    level: "Intermediate",
    img: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1757054956/Urjanvi_Namdev_-_Intermediate_Level_jmjswx.jpg",
  },
  {
    id: 3,
    name: "Tanishtha Mandal",
    level: "Advanced",
    img: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1757054954/Tanishtha_Mandal-_Adavance_Level_orztag.jpg",
  },
  {
    id: 4,
    name: "Sakshi Singh",
    level: "Intermediate",
    img: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1757054839/Sakshi_Singh_-_Intermediate_Level_cqgihe.jpg",
  },
  {
    id: 5,
    name: "Swati Darbha",
    level: "Intermediate",
    img: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1757054842/Swati_Darbha_-_Intermediate_Level_ukef25.jpg",
  },
  {
    id: 6,
    name: "Sthitpragya Sharma",
    level: "Intermediate",
    img: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1757054840/Sthitpragya_Sharma_-_Intermediate_ul4tw4.jpg",
  },
  {
    id: 7,
    name: "Ruhani Sinha",
    level: "Beginner",
    img: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1757054837/Ruhani_Sinha-_Beginner_Level_olhbth.jpg",
  },
  {
    id: 8,
    name: "Rudrakshi Kushwah",
    level: "Beginner",
    img: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1757054836/Rudrakshi_Kushwah_-_Beginner_fyqbw5.jpg",
  },
  {
    id: 9,
    name: "Rishita Dey",
    level: "Advanced",
    img: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1757054834/Rishita_Dey_-_Advance_Level_hzeozm.jpg",
  },
  {
    id: 10,
    name: "Riddhi Biswal",
    level: "Intermediate",
    img: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1757054832/Riddhi_Biswal_-_Intermediate_Level_yev6eb.jpg",
  },
  {
    id: 11,
    name: "Pandey Sisters",
    level: "Intermediate",
    img: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1757054831/Pandey_Sisters_-_Intermediate_level_hhxlzg.jpg",
  },
  {
    id: 12,
    name: "Ojistha Das Biswas",
    level: "Intermediate",
    img: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1757054829/Ojistha_Das_Biswas_-_Intermediate_Level_bc5c0h.jpg",
  },
  {
    id: 13,
    name: "Nitya Sharma",
    level: "Beginner",
    img: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1757054827/Nitya_Sharma_-_Beginner_uwowhi.jpg",
  },
  {
    id: 14,
    name: "Manya Kashyap",
    level: "Intermediate",
    img: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1757054825/Manya_Kashyap-_Intermediate_level_lioc2d.jpg",
  },
  {
    id: 15,
    name: "Kimaya_Sharma",
    level: "Beginner",
    img: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1757054823/Kimaya_Sharma_-_Beginner_mwes7f.jpg",
  },
  {
    id: 16,
    name: "Khrisha Tripathi",
    level: "Beginner",
    img: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1757054822/Khrisha_Tripathi_-_Beginner_Level_pmhiz2.jpg",
  },
  {
    id: 17,
    name: "Kadambari Langote",
    level: "Advanced",
    img: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1757054820/Kadambari_Langote_-_Advance_Level_s9a7ld.jpg",
  },
  {
    id: 18,
    name: "Kaashvi Jain",
    level: "Intermediate",
    img: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1757054818/Kaashvi_Jain_-_Intermediate_Level_gdyxrl.jpg",
  },
  {
    id: 19,
    name: "Jyotika Sarkar",
    level: "Beginner",
    img: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1757054817/Jyotika_Sarkar_-_Beginner_piyxrs.jpg",
  },
  {
    id: 20,
    name: "Jessica Pitta",
    level: "Intermediate",
    img: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1757054814/Jessica_Pitta_-_Intermediate_Level_mcqvox.jpg",
  },
  {
    id: 21,
    name: "Harshita Chandra",
    level: "Beginner",
    img: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1757054813/Harshita_Chandra_-_Beginner_nwjlcf.jpg",
  },
  {
    id: 22,
    name: "Daraksha_Sinha",
    level: "Advanced",
    img: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1757054811/Daraksha_Sinha_-_Advance_Level_axoalz.jpg",
  },
  {
    id: 23,
    name: "Ashi Mohan",
    level: "Advanced",
    img: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1757054809/Ashi_Mohan_-_Advance_Level_ljlnt0.jpg",
  },
  {
    id: 24,
    name: "Anvi Bisht",
    level: "Beginner",
    img: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1757054808/Anvi_Bisht_-_Beginner_ayjwgb.jpg",
  },
  {
    id: 25,
    name: "Anushka Pai, Ada Salwan",
    level: "Advanced",
    img: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1757054806/Anushka_Pai_Ada_Salwan_-_Advance_Level_eifs4v.jpg",
  },
  {
    id: 26,
    name: "Anayna Dhemla",
    level: "Intermediate",
    img: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1757054804/Anayna_Dhemla_-_Intermediate_Level_dxno2h.jpg",
  },
  {
    id: 27,
    name: "Anahita Cholli",
    level: "Beginner",
    img: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1757054803/Anahita_Cholli_-_Beginner_nalvra.jpg",
  },
  {
    id: 28,
    name: "Amyra Kumar",
    level: "Beginner",
    img: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1757054801/Amyra_Kumar_-_Beginner_figke7.jpg",
  },
  {
    id: 29,
    name: "Amishi Singh",
    level: "Intermediate",
    img: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1757054800/Amishi_Singh_-_Intermediate_Level_bgewss.jpg",
  },
  {
    id: 30,
    name: "Advita Khurana",
    level: "Beginner",
    img: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1757054798/Advita_Khurana_-_Beginner_Level_pt7svz.jpg",
  },
  {
    id: 31,
    name: "Abhyanshi Pal",
    level: "Intermediate",
    img: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1757054797/Abhyanshi_Pal_-_Intermediate_Level_bpb4as.jpg",
  },
  {
    id: 32,
    name: "Aadishree Kathiyar",
    level: "Intermediate",
    img: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1757054796/Aadishree_Kathiyar_-_Intermediate_Level_saz0q2.jpg",
  },
  {
    id: 33,
    name: "Aaditri Singh",
    level: "Intermediate",
    img: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1757054795/Aaditri_Singh_-_Intermediate_level_z0dlxh.jpg",
  },
  {
    id: 34,
    name: "Aadishree Kashyap",
    level: "Beginner",
    img: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1757054794/Aadishree_Kashyap_-_Beginner_Level_qnpjou.jpg",
  },
  {
    id: 35,
    name: "Aadhya_Balodhi",
    level: "Beginner",
    img: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1757054793/Aadhya_Balodhi_-_Beginner_Level_chsjs9.jpg",
  },
  {
    id: 36,
    name: "Sia Sabharwal",
    level: "Beginner",
    img: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1757062660/Sia_Sabarwal-_Beginner_Level_kz1zoo.jpg",
  },
  {
    id: 37,
    name: "Yahvi Poorna",
    level: "Intermediate",
    img: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1757062660/Yahvi_Poorna_-_Intermediate_Level_ce1d5g.jpg",
  },
  {
    id: 38,
    name: "Avika_Bisnoi",
    level: "Beginner",
    img: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1757062660/Avika_Bisnoi_-_beginners_level_emhjdl.jpg",
  },
  {
    id: 39,
    name: "Ira Aadya",
    level: "Beginner",
    img: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1757062660/Ira_Aadya_-_Beginners_Level_hdl7vd.jpg",
  },

  {
    id: 41,
    name: "Anika_Gaur",
    level: "Beginner",
    img: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1757062659/Anika_Gaur_-_Beginners_xkk7ns.jpg",
  },
  {
    id: 42,
    name: "Kalpana Dhiman",
    level: "Beginner",
    img: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1757062659/Kalpana_Dhiman_-_Beginner_Level_rghmwc.jpg",
  },
  {
    id: 43,
    name: "Latika Pindi",
    level: "Beginner",
    img: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1757062659/Latika_Pindi_-_Beginner_Level_jfeuv5.jpg",
  },
  {
    id: 44,
    name: "Anvi Sinha",
    level: "Beginner",
    img: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1757062659/Anvi_Sinha_Beginner_Level_zua0tw.jpg",
  },
  {
    id: 45,
    name: "Ilina Biswas",
    level: "Beginner",
    img: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1757062659/Ilina_Biswas_-_Beginner_Level_z59jqa.jpg",
  },
  {
    id: 46,
    name: "Aadya Shukla, Sia Sabharwal",
    level: "Beginner",
    img: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1757062658/Adhya_Shukla_Sia_Sabarwal_-_Beginners_z2skjc.jpg",
  },
  {
    id: 47,
    name: "Aryahi Dhiman",
    level: "Beginner",
    img: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1757062658/Aryahi_Dhiman_-_Beginner_egrqjn.jpg",
  },
  {
    id: 48,
    name: "Gargi",
    level: "Intermediate",
    img: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1757062658/Gargi_-_Intermediate_Level_bw8gqq.jpg",
  },
  {
    id: 49,
    name: "Avni Agarwal",
    level: "Intermediate",
    img: "https://res.cloudinary.com/dg8mtv2kz/image/upload/v1757062658/Anbi_Agarwal_-_Intermediate_Level_tqvtzf.jpg",
  },
];

const FILTERS = ["Beginner", "Intermediate", "Advanced"];

export default function StudentShowcase() {
  const [activeFilter, setActiveFilter] = useState("Beginner");
  const getFiltered = (filter) => STUDENTS.filter((s) => s.level === filter);
  const displayed = getFiltered(activeFilter);

  const showMore = 4;
  const [visible, setvisible] = useState(8);
  const max = displayed.length;
  const [selectedIndex, setSelectedIndex] = useState(null);

  const prevVisibleRef = useRef(0); // track previous visible count
  const ENTER_STAGGER = 0.06; // small stagger for batch

  useEffect(() => {
    prevVisibleRef.current = 0;
    setvisible(8);
  }, [activeFilter]);

  const handleClick = () => {
    const prev = visible;
    const next = Math.min(prev + showMore, max);
    // remember previous visible so we can detect which items are new
    prevVisibleRef.current = prev;

    setvisible((prev) => next);
  };

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : max - 1));
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev < max - 1 ? prev + 1 : 0));
  };

  return (
    <section
      className="my-10 md:my-16 bg-gradient-to-b from-pink-50 to-white text-center scroll-mt-48"
      id="Our_students"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold font-['Cinzel'] mb-4">
            <span className="dance-ornament"> Our </span> Shining Stars
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            At Nritya Gurukul, every learner’s journey is special. From the
            first step in Bharatanatyam to the debut on stage, our students are
            the heartbeat of our community.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium shadow-md transition-all ${
                activeFilter === filter
                  ? "bg-orange-600 text-white shadow-lg scale-105"
                  : "bg-white text-orange-600 border border-pink-200 hover:bg-pink-50"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 min-h-[280px]">
          <AnimatePresence>
            {displayed.slice(0, visible).map((student, index) => {
              const batchStart = prevVisibleRef.current ?? 0;
              const isNew = index >= batchStart; // newly added this render?
              const localIndex = isNew ? index - batchStart : 0; // stagger index only for new items
              const delay = isNew ? localIndex * ENTER_STAGGER : 0;
              if (index < visible - 1 || visible == max) {
                return (
                  <motion.div
                    key={student.id}
                    onClick={() => setSelectedIndex(index)}
                    className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 relative"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.2,
                      delay, // only applies to entrance
                    }}
                  >
                    {/* Image */}
                    <div className="overflow-hidden">
                      <motion.img
                        src={student.img}
                        alt={`$student.name`}
                        className="w-full h-72 object-cover transform group-hover:scale-110 transition duration-500"
                        whileHover={{ scale: 1.05 }}
                        loading="lazy"
                      />
                    </div>

                    {/* Info */}
                    <div className="p-5 text-left">
                      <h3 className="text-xl font-semibold text-gray-800">
                        {student.name}
                      </h3>
                      <p className="text-sm font-medium text-orange-600 mb-0.5">
                        {student.level}
                      </p>
                    </div>
                  </motion.div>
                );
              }

              return (
                <motion.div
                  key={student.id}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 relative"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.2,
                    delay, // only applies to entrance
                  }}
                >
                  {/* Blurred overlay */}
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-xs z-10 flex items-center justify-center">
                    <button onClick={handleClick} className="rounded-xl text-lg px-6 py-2 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-md">
                      Show More
                    </button>
                  </div>

                  {/* Underlying Image */}
                  <div className="overflow-hidden">
                    <motion.img
                      src={student.img}
                      alt={student.name}
                      className="w-full h-72 object-cover transform transition duration-500"
                      loading="lazy"
                    />
                  </div>

                  {/* Underlying Info (blurred by overlay) */}
                  <div className="p-5 text-left">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {student.name}
                    </h3>
                    <p className="text-sm font-medium text-orange-600 mb-0.5">
                      {student.level}
                    </p>
                  </div>
                </motion.div>
              );
            })}

            {/* {visible < max - 1 && (
              <motion.div
                className="w-full h-full rounded-2xl mx-auto flex justify-center items-center"
                key={visible + "aja"}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                onClick={handleClick}
              >
                <button className="rounded-2xl text-xl mt-6 px-8 py-2 h-fit cursor-pointer mx-auto bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white">
                  Show More
                </button>
              </motion.div>
            )} */}
          </AnimatePresence>
        </div>

        {/* CTA */}
        <motion.div
          className="w-fit mx-auto mt-10"
          initial={{ opacity: 0.8, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.03 }}
        >
          <Link
            href="/book-class"
            className="rounded-2xl text-xl mt-6 px-8 py-2 cursor-pointer mx-auto bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white"
          >
            Join Nritya Gurukul
          </Link>
        </motion.div>
      </div>

      {/* ON full image */}
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
                  aria-label="Previous student"
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
                  src={displayed[selectedIndex].img}
                  alt={displayed[selectedIndex].name}
                  loading="lazy"
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
                  aria-label="Next student"
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
}
