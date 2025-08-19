import LeftNavbar from "@/components/admin/dashboard/LeftNavbar";
import TopNavbar from "@/components/admin/dashboard/TopNavbar";
import ProtectedRoute from "@/components/admin/ProtectRoute";

export default function RootLayout({ children }) {
  return (
    <ProtectedRoute>
      <div className="flex h-screen overflow-hidden">
        <div className="w-[260px] overflow-hidden bg-gradient-to-b text-black  from-cyan-400 to-blue-500 py-6 px-4 flex flex-col justify-between">
          <div>
            <img
              src="/assets/logo.png"
              
              alt="logo"
              width={150}
              height={60}
              className="mb-2 mx-auto"
            />
            <hr />
            <LeftNavbar />
          </div>
        </div>

        <div className="flex-1 bg-white rounded-md shadow-2xl shadow-gray-700 mx-2 h-[97vh] my-auto overflow-hidden p-6 ">
          <TopNavbar />

          <div className="relative my-5 w-full h-1">
            <div className="absolute -left-6 w-[100vw] h-[2px] bg-gray-200 drop-shadow-[0_0_8px_#f59e0b"></div>
          </div>

          <div className="h-[88%] overflow-hidden rounded-md overflow-y-auto scrollbar-hide flex">
            {children}
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
