import { Fragment, useState } from "react";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { Colors } from "../Config";
import { Link, useNavigate } from "react-router-dom";
import Auth from "./Auth";
import { Dropdown } from "antd";
import { RxPerson } from "react-icons/rx";
import { LiaBoxSolid } from "react-icons/lia";
import { SlLocationPin } from "react-icons/sl";
import { TbLogout2 } from "react-icons/tb";
import { CiGrid32 } from "react-icons/ci";
import { SlLogin } from "react-icons/sl";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const items = [
    {
      key: "1",
      label: (
        <div onClick={()=> navigate('myProfile')} className="flex items-center w-40 justify-start hover:text-white text-base text-indigo-500 p-1 rounded-sm hover:bg-indigo-400">
          <RxPerson className="mr-2 " />
          Profile
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <div onClick={()=> navigate('myOrders')} className="flex items-center w-40 justify-start hover:text-white text-base text-indigo-500 p-1 rounded-sm hover:bg-indigo-400">
          <LiaBoxSolid className="mr-2 " />
          My Orders
        </div>
      ),
    },
    {
      key: "3",
      label: (
        <div className="flex items-center w-40 justify-start hover:text-white text-base text-indigo-500 p-1 rounded-sm hover:bg-indigo-400">
          <SlLocationPin className="mr-2 " />
          Address
        </div>
      ),
    },
    {
      key: "4",
      label: (
        <div className="flex items-center w-40 justify-start hover:text-white text-base text-indigo-500 p-1 rounded-sm hover:bg-indigo-400">
          <TbLogout2 className="mr-2 " />
          Logout
        </div>
      ),
    },
  ];
  const sideBar = [
    {
      text: "My Profile",
      select: 1,
      icon: <RxPerson className="mr-2  " size={"24px"} />,
    },
    {
      text: "My Orders",
      select: 2,
      icon: <LiaBoxSolid className="mr-2  " size={"28px"} />,
    },
    {
      text: "Address",
      select: 3,
      icon: <SlLocationPin className="mr-2  " size={"28px"} />,
    },
    {
      text: "Log Out",
      select: 4,
      icon: <TbLogout2 className="mr-2  " size={"28px"} />,
    },
  ];
  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-5">
                  <button
                    type="button"
                    className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                {/*not login  */}
                {/* <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                 
                  <div className="flow-root">
                    <div
                      href="#"
                      className="-m-2 bg-indigo-500 text-white p-2 font-medium justify-center rounded-md flex items-center"
                    >
                      Login <SlLogin className="ml-2" />
                    </div>
                  </div>
                </div> */}

                <div className="space-y-6 border-t border-b border-gray-200 px-1 py-6">
                  {sideBar.map((page) => (
                    <div
                      key={page.select}
                      className="flow-root cursor-pointer hover:bg-indigo-500 hover:text-white px-3 rounded-lg p-1 text-indigo-400"
                    >
                      <div className="-m-2 items-center py-2 font-medium  flex ">
                        {page.icon}
                        <p className="mx-3"> {page.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="font-medium text-lg py-3 pl-2 flex items-center ">
                  {" "}
                  <CiGrid32
                    size={"28px"}
                    className="mr-2 text-indigo-500 font-bold text-lg"
                  />
                  Category
                </p>

                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  {["Mukesh", "Nuwe", "Chani"].map((page) => (
                    <div key={page} className="flow-root">
                      <div className="-m-2 items-center p-2 font-medium hover:bg-indigo-500 rounded-lg hover:text-white flex  ">
                        <img
                          src="https://source.unsplash.com/random/200x200?sig=1"
                          className="h-14 rounded-lg"
                          alt=""
                        />
                        <p className="mx-3"> {page}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative bg-white">
        <marquee
          style={{ backgroundColor: Colors.main }}
          className="flex h-10 items-center justify-center bg-main-500 text-textcolor  px-4 text-sm font-medium text-white sm:px-6 lg:px-8"
        >
          Get free delivery on orders over $100 Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Rem, animi inventore, vero expedita
          quisquam cumque dolorem sint ab eaque illum cupiditate deleniti minima
          voluptatum illo sequi, commodi doloribus harum architecto.
        </marquee>

        <nav
          aria-label="Top"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <button
                type="button"
                className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open menu</span>
                <Bars3Icon
                  className="h-6 w-6 text-main-500"
                  aria-hidden="true"
                />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <a href="#">
                  <span className="sr-only">Kids Talk</span>
                  <img
                    className="h-8 w-auto max-h-8"
                    src="https://kidsstalk.in/assets/frontend/images/main-logo.webp"
                    alt=""
                    onClick={() => navigate("/")}
                  />
                </a>
              </div>

              {/* Flyout menus */}

              <div className="ml-auto flex items-center">
                {/* Search */}
                <div className="flex lg:ml-6">
                  <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Search</span>
                    <MagnifyingGlassIcon
                      className="h-6 w-6"
                      aria-hidden="true"
                      onClick={() => navigate("filterPage")}
                      style={{ color: Colors.main }}
                    />
                  </a>
                </div>
                <div className="flex lg:ml-6">
                  <Dropdown
                    menu={{
                      items,
                    }}
                    placement="bottom"
                    arrow={{
                      pointAtCenter: true,
                    }}
                    trigger={"click"}
                  >
                    <a
                      href="#"
                      className="p-2 text-gray-400 hover:text-gray-500"
                    >
                      <span className="sr-only">Search</span>
                      <UserCircleIcon
                        className="h-6 w-6"
                        aria-hidden="true"
                        // onClick={() => navigate("filterPage")}
                        style={{ color: Colors.main }}
                      />
                    </a>
                  </Dropdown>
                </div>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <a href="#" className="group -m-2 flex items-center p-2">
                    <ShoppingBagIcon
                      className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      style={{ color: Colors.main }}
                      aria-hidden="true"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                      0
                    </span>
                    <span className="sr-only">items in cart, view bag</span>
                  </a>

                  {/* <button  onClick={() => setIsModalOpen(!isModalOpen)} className='p-2 text-sm sm:text-sm md:text-lg lg:text-xl lg:px-2 lg:p-2 bg-[#4F46E5] text-white rounded-lg'>SignUp</button> */}
                </div>
              </div>
            </div>
          </div>
        </nav>
        <Auth trigger={isModalOpen} cancelOn={handleCancel} />
      </header>
    </div>
  );
}
