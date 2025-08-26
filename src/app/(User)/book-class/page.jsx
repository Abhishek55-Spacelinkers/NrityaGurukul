import { BookingGuide, Front } from "@/components/Animation/Book_class";

export const metadata = {
  title: "Book a Class | Nritya Gurukul",
  description:
    "Choose your Bharatanatyam class at Nritya Gurukul. We offer courses for beginner, intermediate, and advanced levels.",
};

const BookClass = () => {
  

  return (
    <>
        <div className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Front />
        </div>
      </div>
      <BookingGuide/>
    </>
  );
};

export default BookClass;
