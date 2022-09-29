import React, { useState } from "react";
import {
  AiOutlineCreditCard,
  AiOutlineForm,
  AiOutlineHome,
  AiOutlineMenu,
  AiOutlinePieChart,
  AiOutlineSearch,
} from "react-icons/ai";
import { MdDarkMode, MdNotifications, MdSmartButton } from "react-icons/md";
import { RiLightbulbFlashFill } from "react-icons/ri";
import { TbTable } from "react-icons/tb";
import { VscFileSubmodule } from "react-icons/vsc";
import { Link, NavLink, Outlet } from "react-router-dom";
import user from "../images/userid.jpg";

const Layout = () => {
  const [dark, setDark] = useState(true);
  const [nav, setNav] = useState(true);
  const handleclick = () => {
    setNav(!nav);
  };
  const darkClick = () => {
    setDark(!dark);
  };
  return (
    <section>
      {/* navbar */}

      <div className="fixed top-0 left-0 right-0 py-4 shadow-md flex justify-around items-center bg-white">
        <div onClick={handleclick} className="block md:hidden ml-4">
          {!nav ? (
            <AiOutlineMenu
              size={24}
              className="rounded  ring-purple-600 ring-2 text-purple-600"
            />
          ) : (
            <AiOutlineMenu size={24} className="text-purple-600" />
          )}
        </div>
        <div className="hidden md:flex">
          <a
            href="#"
            className="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200"
          >
            Windmil
          </a>
        </div>
        <div className="flex container items-center mx-auto px-6 text-purple-600 justify-between">
          <div className="p-1  rounded-md  space-x-2 border border-[#d5d6d7] md:ml-[245px]  md:w-2/4 w-2/3  flex items-center ">
            <AiOutlineSearch size={18} />
            <input
              className="w-full outline-none"
              type="text"
              placeholder="Search for projects"
            />
          </div>
          <div className="flex items-center justify-around space-x-6">
            <div onClick={darkClick}>
              {!dark ? (
                <RiLightbulbFlashFill
                  size={27}
                  className="ring-2 p-1 rounded-full  ring-pink-300 ring-inset"
                />
              ) : (
                <MdDarkMode size={22} />
              )}
            </div>

            <MdNotifications size={22} />
            <div>
              <img src={user} className="h-7 w-7 rounded-full" alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* navbar */}
      {/* ********* for SMALL******* */}

      <div
        className={
          !nav
            ? "fixed  shadow-md min-h-screen bg-white ease-in-out duration-150"
            : "fixed left-[-100%]"
        }
      >
        <div className="md:hidden">
          <div className=" flex mt-8 px-6 py-3 items-center text-gray-500 text-bold font-semibold hover:text-gray-900 duration-150">
            <AiOutlineHome size={20} />
            <Link className="px-4 text-bold" to="dashboard">
              Dashboard
            </Link>
          </div>
          <div className="flex px-6 py-3 items-center text-gray-500 text-bold font-semibold hover:text-gray-900 duration-150">
            <AiOutlineForm size={20} />
            <Link className="px-4 text-bold" to="form">
              Form
            </Link>
          </div>
          <div className="flex px-6 py-3 items-center text-gray-500 text-bold font-semibold hover:text-gray-900 duration-150">
            <AiOutlineCreditCard size={20} />
            <Link className="px-4 text-bold" to="cards">
              cards
            </Link>
          </div>
          <div className="flex px-6 py-3 items-center text-gray-500 text-bold font-semibold hover:text-gray-900 duration-150">
            <AiOutlinePieChart size={20} />
            <Link className="px-4 text-bold" to="charts">
              Charts
            </Link>
          </div>
          <div className="flex px-6 py-3 items-center text-gray-500 text-bold font-semibold hover:text-gray-900 duration-150">
            <MdSmartButton size={20} />
            <Link className="px-4 text-bold" to="buttons">
              Buttons
            </Link>
          </div>
          <div className="flex px-6 py-3 items-center text-gray-500 text-bold font-semibold hover:text-gray-900 duration-150">
            <VscFileSubmodule size={20} />
            <Link className="px-4 text-bold" to="modals">
              Modals
            </Link>
          </div>
          <div className="flex px-6 py-3 items-center text-gray-500 text-bold font-semibold hover:text-gray-900 duration-150">
            <TbTable size={20} />
            <Link className="px-4 text-bold" to="tables">
              Tables
            </Link>
          </div>
          <div className="px-6 py-6 ">
            <button
              class="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white bg-purple-600 border border-transparent active:bg-purple-600 hover:bg-purple-700 focus:shadow-outline-purple"
              type="button"
            >
              Create account
              <span class="ml-2" aria-hidden="true">
                +
              </span>
            </button>
          </div>
        </div>
      </div>
      {/* ********* END SMALL******* */}
      {/* ********* LARGE ******* */}

      {/* <div className="flex mt-[66px]"> */}
      <div className="flex mt-[66px]">
        <div className=" w-0 md:w-1/6 min-h-screen bg-white md:shadow-md ">
          <div className="hidden md:flex md:fixed">
            <div>
              <div className=" flex mt-8 px-6 py-3 items-center text-gray-500 text-bold font-semibold hover:text-gray-900 duration-150">
                <AiOutlineHome size={20} />
                <NavLink
                  className={(navData) =>
                    navData.isActive
                      ? " text-blue-600 px-4 text-bold"
                      : "px-4 text-bold"
                  }
                  to="dashboard"
                >
                  Dashboard
                </NavLink>
              </div>
              <div className="flex px-6 py-3 items-center text-gray-500 text-bold font-semibold hover:text-gray-900 duration-150">
                <AiOutlineForm size={20} />
                <Link className="px-4 text-bold" to="form">
                  Form
                </Link>
              </div>
              <div className="flex px-6 py-3 items-center text-gray-500 text-bold font-semibold hover:text-gray-900 duration-150">
                <AiOutlineCreditCard size={20} />
                <Link className="px-4 text-bold" to="cards">
                  cards
                </Link>
              </div>
              <div className="flex px-6 py-3 items-center text-gray-500 text-bold font-semibold hover:text-gray-900 duration-150">
                <AiOutlinePieChart size={20} />
                <Link className="px-4 text-bold" to="charts">
                  Charts
                </Link>
              </div>
              <div className="flex px-6 py-3 items-center text-gray-500 text-bold font-semibold hover:text-gray-900 duration-150">
                <MdSmartButton size={20} />
                <Link className="px-4 text-bold" to="buttons">
                  Buttons
                </Link>
              </div>
              <div className="flex px-6 py-3 items-center text-gray-500 text-bold font-semibold hover:text-gray-900 duration-150">
                <VscFileSubmodule size={20} />
                <Link className="px-4 text-bold" to="modals">
                  Modals
                </Link>
              </div>
              <div className="flex px-6 py-3 items-center text-gray-500 text-bold font-semibold hover:text-gray-900 duration-150">
                <TbTable size={20} />
                <Link className="px-4 text-bold" to="tables">
                  Tables
                </Link>
              </div>

              <div className="px-6 py-6 ">
                <button
                  class="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white bg-purple-600 border border-transparent active:bg-purple-600 hover:bg-purple-700 focus:shadow-outline-purple"
                  type="button"
                >
                  <Link to="create">
                    Create account
                    <span class="ml-2" aria-hidden="true">
                      +
                    </span>
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* ********* END LARGE ******* */}

        {/* ********* OUT-LET ******* */}
        <div className="w-full md:w-5/6 ">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default Layout;
