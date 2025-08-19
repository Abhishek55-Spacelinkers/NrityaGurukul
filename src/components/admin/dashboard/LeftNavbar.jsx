"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

const LeftNavbar = () => {
  const pathname = usePathname();
  const leftlink = [
    {
      name: "Profile Status",
      path: "/electrician/dashboard",
      icon: "/image/electrician/dashboard/profile.png",
    },
    {
      name: "View Leads",
      path: "/electrician/dashboard/view-leads",
      icon: "/image/electrician/dashboard/leads.png",
    },
    {
      name: "Update Availability",
      path: "/electrician/dashboard/update-availability",
      icon: "/image/electrician/dashboard/availability.png",
    },
    {
      name: "Contact Admin",
      path: "/electrician/dashboard/contact-admin",
      icon: "/image/electrician/dashboard/admin.png",
    },
    {
      name: "My Reviews",
      path: "/electrician/dashboard/my-reviews",
      icon: "/image/electrician/dashboard/review.png",
    },
  ];
  
  return (
    <ul className="mt-12 space-y-6 mx-auto w-fit font-medium ">
      <li className="flex items-center gap-2 font-semibold text-lg my-8 cursor-context-menu">
        <div className="bg-white text-blue-500 rounded-md">
          <img src="/image/dashboard/dashboard-icon.png" alt="dashboard-icon" className="h-10 rounded-4xl" />
        </div>
        Dashboard
      </li>

      {leftlink.map((item, id) => {
        const isActive = pathname === `${item.path}`;
        return (
          <li key={id} className="p-0">
            <Link
              href={item.path}
              className={`${
                isActive
                  ? "bg-white text-blue-600 font-semibold  pl-1.5 pr-1"
                  : "hover:text-blue-700 pr-2 pl-1"
              } cursor-pointer rounded-2xl w-[150%] py-2 outline-none flex gap-1 duration-75`}
            >
              {/* <img src={item.icon} alt={item.name} className="h-6" /> */}

              {item.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default LeftNavbar;
