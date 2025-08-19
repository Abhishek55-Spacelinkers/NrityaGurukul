"use client";
import { useFirebase } from "@/context/firebase";
import { useRouter } from "next/navigation";

export default function LogoutConfirmation({ onCancel }) {
  const router = useRouter();
  const { logoutUser } = useFirebase();

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black/90 bg-opacity-50 z-50">
      <div className="bg-white rounded-2xl shadow-lg p-6 text-center w-full max-w-md">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img
            src="/assets/logo.png"
            alt="Fix Electricity Logo"
            width={120}
            height={120}
          />
        </div>

        {/* Title */}
        <h2 className="text-lg font-semibold">Logout Confirmation</h2>
        <p className="text-blue-500 text-sm mt-1">
          Are you sure you want to logout?
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={()=>logoutUser()}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Yes
          </button>
          <button
            onClick={onCancel}
            className="border border-blue-400 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-100 transition"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
