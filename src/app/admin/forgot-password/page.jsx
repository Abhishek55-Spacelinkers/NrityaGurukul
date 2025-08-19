import Forget from "@/components/form/Forget";

export const metadata = {
  title: "Forget Password - Nritya GURUKUL",
  description: "Reset your password for FixElectricity.",
  author: "Spacelinkers",
  robots: "index, follow",
};

const ForgotPasswordPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <Forget/>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
