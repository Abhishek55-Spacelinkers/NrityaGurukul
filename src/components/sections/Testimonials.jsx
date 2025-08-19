"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Priya Sharma",
    relation: "Parent",
    text: "Nritya Gurukul has been a transformative experience for my daughter. The instructors are not only experts but also incredibly patient and nurturing. We've seen her confidence and discipline grow immensely.",
    rating: 5,
  },
  {
    name: "Anjali Rao",
    relation: "Student (Advanced)",
    text: "As an advanced student, I appreciate the depth of knowledge and the focus on authentic techniques. The personalized feedback has helped me refine my skills in ways I never thought possible. It feels like a second home.",
    rating: 5,
  },
  {
    name: "Rohan Mehta",
    relation: "Parent",
    text: "The environment at Nritya Gurukul is so positive and encouraging. My son eagerly looks forward to his classes every week. The annual showcase was a spectacular event that highlighted every student's talent.",
    rating: 5,
  },
  {
    name: "Sneha Verma",
    relation: "Student (Beginner)",
    text: "I started as a complete beginner with two left feet, and now I can perform basic compositions! The step-by-step teaching method makes learning so accessible and fun. I highly recommend it!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 px-20 bg-orange-50/50">
      <div className="max-w-5xl mx-auto">
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
            Hear what our students and parents have to say about their journey with us.
          </p>
        </motion.div>

        <Carousel className="w-full" opts={{ loop: true }}>
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="basic-full  lg:basis-1/2 tab:basis-1/3">
                <div className="p-4 h-full">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 h-full flex flex-col justify-between shadow-lg border border-orange-100">
                    <div>
                      <Quote className="w-10 h-10 text-orange-200 mb-4" />
                      <p className="text-gray-600 italic mb-6">"{testimonial.text}"</p>
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-bold text-gray-800">{testimonial.name}</p>
                          <p className="text-sm text-orange-600">{testimonial.relation}</p>
                        </div>
                        <div className="flex">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
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
    </section>
  );
};

export default Testimonials;