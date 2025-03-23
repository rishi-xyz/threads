import { OrganizationSwitcher, SignedIn, SignOutButton } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import Image from "next/image";
import Link from "next/link";

function Topbar() {
  return (
    <nav className='topbar backdrop-blur-sm bg-dark-2/80 sticky top-0 z-50 transition-all duration-300 ease-in-out'>
      <Link href='/' className='flex items-center gap-4 hover:opacity-80 transition-opacity'>
        <Image src='/logo.svg' alt='logo' width={28} height={28} />
        <p className='text-heading3-bold text-light-1 max-xs:hidden'>Threads</p>
      </Link>

      <div className='flex items-center gap-4'>
        <div className='block md:hidden'>
          <SignedIn>
            <SignOutButton>
              <div className='flex cursor-pointer hover:opacity-80 transition-opacity p-2 rounded-full hover:bg-dark-3'>
                <Image
                  src='/assets/logout.svg'
                  alt='logout'
                  width={24}
                  height={24}
                />
              </div>
            </SignOutButton>
          </SignedIn>
        </div>

        <OrganizationSwitcher
          appearance={{
            baseTheme: dark,
            elements: {
              organizationSwitcherTrigger: "py-2 px-4 hover:bg-dark-3 transition-colors rounded-lg",
            },
          }}
        />
      </div>
    </nav>
  );
}

export default Topbar;
