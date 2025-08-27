"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, X } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Raunila Singh",
    relation: "Parent",
    text: "Nirthya Gurukul has been a nurturing ground for my daughter over the past three years, instilling not only the art of dance but also grace, discipline, and confidence. The Guru, with her rare blend of love and firmness, has shaped her into a better dancer and a more grounded individual.",
    rating: 5,
  },
  {
    name: "Ashi Mohan ",
    relation: "Student",
    html: (
      <>
        Mam, you are not only a hardworking teacher in my life but also a true
        inspiration. 🫶🏻 Your positive thoughts and guidance have always
        motivated me to give my best. I really admire your dedication and
        patience, and I wish to become like you in the future. ✨ <br />
        <br /> To my dance teacher, who has been guiding me for the past 10
        years in classical dance — you are the reason I connect so deeply with
        this art. Your grace, discipline, and passion make every step
        meaningful. You have not just taught me dance but also values of
        perseverance, respect, and love for our culture. I am truly grateful to
        have you as my Guru. 🙏💖
      </>
    ),
    text: "Mam, you are not only a hardworking teacher in my life but also a true inspiration. 🫶🏻 Your positive thoughts and guidance have always motivated me to give my best. I really admire your dedication and patience, and I wish to become like you in the future. ✨To my dance teacher, who has been guiding me for the past 10 years in classical dance — you are the reason I connect so deeply with this art. Your grace, discipline, and passion make every step meaningful. You have not just taught me dance but also values of perseverance, respect, and love for our culture. I am truly grateful to have you as my Guru. 🙏💖",
    rating: 5,
  },
  {
    name: "Ritu M.",
    fname: "Ritu Maheshwari",
    relation: "Parent",
    text: "My daughter has been learning dance at Nritya Gurukul for the past four years, and it's been an amazing experience. The teacher’s dedication and passion have helped her grow not just as a dancer, but as a confident individual. We’re truly grateful for this wonderful journey.",
    rating: 5,
  },
  {
    name: "Daraksha Sinha",
    relation: "Student",
    text: "I have been a part of Nritya Gurukul since 2017, when I was just 7 years old, and now at almost 15, it has been an incredible journey. What I love the most is the way our Guru, Akshatha Pai, teaches us with so much patience, dedication, and love. She not only corrects every small detail in our dance but also inspires us to express with our heart. Traveling to different states for competitions and learning under her guidance has been a priceless experience. For me, Nritya Gurukul is not just a dance class, it is a family where Guru Akshatha Pai is the guiding light.",
    rating: 5,
  },
  {
    name: "Shivi Kodinya",
    relation: "Student",
    text: "I have been learning Bharatanatyam since class 4, and I truly could not have asked for a better teacher than Akshatha ma’am. She is much more than a guru to me—she is my guiding light and inspiration in dance. Her classes are always filled with warmth and positivity, creating an environment where I feel encouraged to grow and express myself. Over the years, she has witnessed my journey and has played a significant role in shaping not only my dance but also my mental and physical growth. For me, she is not just a teacher but a mentor I deeply admire, and undoubtedly the best teacher I have ever known.  LOVE YOU MAM",
    rating: 5,
  },
  {
    name: "Pankaj Kumar ",
    relation: "Parent",
    text: "Nritya Gurukul has given my child a strong foundation in Bharatanatyam. Along with learning the art form, she has imbibed discipline, grace, and respect for our culture.",
    rating: 5,
  },
  {
    name: "Parul Chandra",
    relation: "Parent",
    text: "My daughter restarted her classical dance journey with Bharatanatyam at Nritya Gurukul, and it has been a very positive experience. She enjoys her classes and keeps improving under ma’am’s guidance, who teaches with warmth and creates a comfort zone for every student.",
    rating: 5,
  },

  {
    name: "Sanjana",
    relation: "Parent",
    text: "I'm blessed to have  you as  my daughter's dance guru Really  she is so confident  , disciplined and graceful in your guidance thank you so much  for supporting always",
    rating: 5,
  },

  {
    name: "Snehalata",
    relation: "Parent",
    text: "My daughter is learning Bharatnatyam at Nritya Gurukul and she admire you a-lot, I personally love the passion for the art inside you and making each class informative. She never wanted to miss a single class which is already a big compliment for teacher. Thanks a lot🙏🏻",
    rating: 5,
  },

  {
    name: "Poulami Dey",
    relation: "Parent",
    text: "My daughter has been taking bharatnatyam training since 2018. I'm too blessed to have such a confident and experienced guru ji like ma'am. My daughter enjoys her classes, and ma'am  also encourages  her children for their  presentation. Thank you, ma'am ..",
    rating: 5,
  },
  {
    name: "Shalini",
    relation: "Parent",
    text: "My daughter ruhani is learning bharatnatyam from nritya gurukul since two years . When asked what you want to become when you grow old she says akshatha ma'am what more compliment can one give. Akshatha maam is a superb, disciplined and ethical classical dance. Love her.",
    rating: 5,
  },
  {
    name: "Shikha Bathla",
    relation: "Parent",
    html: (
      <>
        Watching our daughter learn and grow under the tutelage of Guru Akshatha
        Pai for the last three years has been a wonderful experience. Her
        development as a young dancer is a direct testament to Ma'am's
        incredible teaching methodology. <br />
        <br />
        Guru Akshatha Pai teaches with a rare combination of patience and
        passion, ensuring that the discipline of Bharatanatyam is always paired
        with enjoyment. She doesn't just teach steps; she brings the dance to
        life by imparting the stories, the emotions, and the deep cultural
        heritage behind every expression and movement. This allows her students
        to appreciate the art form in its entirety, moving from mere execution
        to meaningful performance. <br />
        <br />
        The confidence, poise, and affection for dance that she has instilled in
        our daughter are priceless. We are deeply grateful that our daughter has
        the opportunity to be guided by such a knowledgeable, inspiring, and
        supportive guru. She is indeed fortunate to have such a positive role
        model.
      </>
    ),
    text: "Watching our daughter learn and grow under the tutelage of Guru Akshatha Pai for the last three years has been a wonderful experience. Her development as a young dancer is a direct testament to Ma'am's incredible teaching methodology. Guru Akshatha Pai teaches with a rare combination of patience and passion, ensuring that the discipline of Bharatanatyam is always paired with enjoyment. She doesn't just teach steps; she brings the dance to life by imparting the stories, the emotions, and the deep cultural heritage behind every expression and movement. This allows her students to appreciate the art form in its entirety, moving from mere execution to meaningful performance. The confidence, poise, and affection for dance that she has instilled in our daughter are priceless. We are deeply grateful that our daughter has the opportunity to be guided by such a knowledgeable, inspiring, and supportive guru. She is indeed fortunate to have such a positive role model.",
    rating: 5,
  },
  {
    name: "Jyoti Sharma",
    relation: "Parent",
    html: (
      <>
        <strong>Nritya Gurukul</strong> has provided my child, Anika, with an
        excellent foundation in Bharatanatyam . She is not only learning the
        dance form but has also developed a strong sense of discipline, grace,
        and a deep appreciation for our culture. <br />
        <br /> Her teacher, <strong> Akshatha </strong> Ma'am, is an exceptional
        blend of skill, discipline, and professional ethics. Her commitment to
        the art form and her students is truly outstanding and makes the
        learning experience so valuable.💕
      </>
    ),
    text: "Nritya Gurukul has provided my child, Anika, with an excellent foundation in Bharatanatyam . She is not only learning the dance form but has also developed a strong sense of discipline, grace, and a deep appreciation for our culture. Her teacher, Akshatha Ma'am, is an exceptional blend of skill, discipline, and professional ethics. Her commitment to the art form and her students is truly outstanding and makes the learning experience so valuable.💕",
    rating: 5,
  },
  {
    name: "Durga Sailaja",
    relation: "Parent",
    text: "My daughter learning Bharatanatyam under Guru Akshata Pai since last 2 years. It has been a truly enriching experience. Ma’am teaches with immense patience, dedication, and passion, making every class both disciplined and joyful. Along with the dance techniques, she beautifully explains the expressions, meanings, and cultural depth behind every movement, helping students connect to the art form at a deeper level. Her guidance instills confidence, grace, and love for classical dance. My daughter is truly fortunate and lucky to learn from such a talented and inspiring guru. 🙏",
    rating: 5,
  },
  {
    name: "SURABHI A.",
    fname: "SURABHI AGARWAL BISHNOI",
    relation: "Parent",
    html: (
      <>
        Dear Guru Smt. Akshatha Pai, <br /> <br /> Our heartfelt congratulations
        to you on the wonderful milestone of launching your own website! This is
        such a proud and inspiring achievement, and a true reflection of your
        dedication, passion, and commitment to the divine art of Bharatanatyam.{" "}
        <br /> <br /> Over the past two years, we have been deeply grateful for
        the invaluable guidance, patience, and discipline you have imparted to
        our daughter. Under your tutelage, she has not only learned the
        intricacies of this sacred dance form, but has also developed a deeper
        sense of grace, focus, and cultural appreciation. <br />
        Thank you for being a guiding light in her journey and for nurturing her
        with such care and excellence. Your new website is not just a digital
        platform—it is a gateway for many more students and rasikas to witness
        and be inspired by your artistry and vision.
        <br /> <br /> Wishing you continued success, joy, and fulfillment as you
        reach new heights. May your knowledge shine ever brighter and continue
        to touch many more lives through the beauty of Bharatanatyam. <br />
        <br /> With sincere respect and gratitude, <br />
        [Avika Bishnoi & Family]{" "}
      </>
    ),
    text: "Dear Guru Smt. Akshatha Pai, Our heartfelt congratulations to you on the wonderful milestone of launching your own website! This is such a proud and inspiring achievement, and a true reflection of your dedication, passion, and commitment to the divine art of Bharatanatyam. Over the past two years, we have been deeply grateful for the invaluable guidance, patience, and discipline you have imparted to our daughter. Under your tutelage, she has not only learned the intricacies of this sacred dance form, but has also developed a deeper sense of grace, focus, and cultural appreciation. Thank you for being a guiding light in her journey and for nurturing her with such care and excellence. Your new website is not just a digital platform—it is a gateway for many more students and rasikas to witness and be inspired by your artistry and vision. Wishing you continued success, joy, and fulfillment as you reach new heights. May your knowledge shine ever brighter and continue to touch many more lives through the beauty of Bharatanatyam. With sincere respect and gratitude, [Avika Bishnoi & Family]",
    rating: 5,
  },
];

const Testimonials = () => {
  const autoplay = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false , stopOnMouseEnter: true }) // 3s delay, keeps scrolling even if clicked
  );

  const [selectedIndex, setSelectedIndex] = useState(null);
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedIndex(null);
      }
    };

    if (selectedIndex !== null) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex]);

  return (
    <section className="py-16 px-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold font-['Cinzel'] mb-4">
            <span className="dance-ornament">Words from</span> Our Community
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear what our students and parents have to say about their journey
            with us.
          </p>
        </motion.div>

        <Carousel
          className="w-full"
          opts={{ loop: true }}
          plugins={[autoplay.current]}
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="basic-full  lg:basis-1/2 tab:basis-1/3 "
              >
                <div className="p-4 h-full">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 h-full flex flex-col justify-between shadow-lg border border-orange-200">
                    <div>
                      <Quote className="w-10 h-10 text-orange-400/80 mb-4" />
                      <p className="text-gray-600 italic mb-1 text-justify">
                        "{testimonial.text.slice(0, 200)}
                        {testimonial.text.length > 200 ? (
                          <button
                            onClick={() => setSelectedIndex(index)}
                            className="text-orange-600/90 ml-2 font-medium cursor-pointer"
                          >
                            ...Read More
                          </button>
                        ) : (
                          `"`
                        )}
                      </p>
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-bold text-gray-800">
                            {testimonial.name}
                          </p>
                          <p className="text-sm text-orange-600">
                            {testimonial.relation}
                          </p>
                        </div>
                        <div className="flex">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-5 h-5 text-yellow-500 fill-current"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-orange-500 border-orange-500 hover:bg-orange-100" />
          <CarouselNext className="text-orange-500 border-orange-500 hover:bg-orange-100" />
        </Carousel>
      </div>
      <AnimatePresence mode="wait">
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 flex z-50 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="testimonial-title"
            aria-describedby="testimonial-content"
          >
            <div
              className="fixed inset-0 w-full h-full bg-black opacity-70"
              onClick={() => setSelectedIndex(null)}
            ></div>
            <div className="flex items-center relative justify-center my-auto px-4 z-10 w-[90%] md:w-[80%] xl:w-[60%] mx-auto h-fit">
              <AnimatePresence mode="wait">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  className="bg-white py-10  px-6 rounded-2xl pt-7 relative"
                >
                  {/* Close Button */}
                  <button
                    className="cursor-pointer absolute right-8 top-5"
                    onClick={() => setSelectedIndex(null)}
                  >
                    <X className="text-5xl" size={36} />
                  </button>

                  <div className="flex flex-col mb-3">
                    <div className="flex">
                      {[...Array(testimonials[selectedIndex].rating)].map(
                        (_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 text-yellow-500 fill-current"
                          />
                        )
                      )}
                    </div>
                    <div className="flex mt-1">
                      <p className="font-bold text-gray-800">
                        {testimonials[selectedIndex].fname
                          ? testimonials[selectedIndex].fname
                          : testimonials[selectedIndex].name}
                      </p>
                      <p className="text-sm text-orange-600 ml-2">
                        ({testimonials[selectedIndex].relation})
                      </p>
                    </div>
                  </div>
                  {testimonials[selectedIndex].html ? (
                    testimonials[selectedIndex].html
                  ) : (
                    <p>{testimonials[selectedIndex].text}</p>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Testimonials;
