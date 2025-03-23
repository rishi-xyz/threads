"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { SignOutButton, SignedIn, useAuth } from "@clerk/nextjs";

import { sidebarLinks } from "@/constants";

const LeftSidebar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { userId } = useAuth();

  return (
    <section className='custom-scrollbar leftsidebar bg-dark-2/95 backdrop-blur-sm'>
      <div className='flex w-full flex-1 flex-col gap-6 px-6'>
        {sidebarLinks.map((link) => {
          const isActive =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route;

          if (link.route === "/profile") link.route = `${link.route}/${userId}`;

          return (
            <Link
              href={link.route}
              key={link.label}
              className={`leftsidebar_link group transition-all duration-300 ease-in-out ${
                isActive 
                  ? "bg-primary-500 hover:bg-primary-600" 
                  : "hover:bg-dark-3"
              }`}
            >
              <Image
                src={link.imgURL}
                alt={link.label}
                width={24}
                height={24}
                className={`transition-transform duration-300 group-hover:scale-110 ${
                  isActive ? "brightness-0 invert" : ""
                }`}
              />

              <p className='text-light-1 max-lg:hidden transition-opacity duration-300 group-hover:opacity-100'>
                {link.label}
              </p>
            </Link>
          );
        })}
      </div>

      <div className='mt-10 px-6'>
        <SignedIn>
          <SignOutButton signOutCallback={() => router.push("/sign-in")}>
            <div className='flex cursor-pointer gap-4 p-4 rounded-lg hover:bg-dark-3 transition-colors duration-300 group'>
              <Image
                src='/assets/logout.svg'
                alt='logout'
                width={24}
                height={24}
                className="transition-transform duration-300 group-hover:scale-110"
              />

              <p className='text-light-2 max-lg:hidden transition-opacity duration-300 group-hover:opacity-100'>
                Logout
              </p>
            </div>
          </SignOutButton>
        </SignedIn>
      </div>
    </section>
  );
};

export default LeftSidebar;
