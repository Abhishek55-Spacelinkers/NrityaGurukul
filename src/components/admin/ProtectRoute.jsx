"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useFirebase } from "@/context/firebase";

export default function ProtectedRoute({ children }) {
  const { user, Loading } = useFirebase();
  const router = useRouter();

  useEffect(() => {
    if (!Loading && user === null) {
      router.replace("/admin/login");
    }
  }, [user, Loading, router]);

  if (user) {
    return children;
  }

  return <div>Loading...</div>;
}
