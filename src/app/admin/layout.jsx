import { FirebaseProvider } from "@/context/firebase";

export default function RootLayout({ children }) {
  return (
    <FirebaseProvider>

        {children}
    </FirebaseProvider>
  );
}
