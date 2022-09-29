import React from "react";
import { AiFillStar, AiOutlineMessage } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi";
import { MdAccountBalanceWallet, MdPointOfSale } from "react-icons/md";

const Cards = () => {
  return (
    <>
      <section className="">
        <main className="h-full ">
          <div className="container px-6 mx-auto">
            <h1 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
              Cards
            </h1>
            <div className="flex items-center justify-between p-4 mb-8 text-sm font-semibold text-purple-100 bg-purple-600 rounded-lg shadow-md focus:outline-none ">
              <div className="flex items-center">
                <AiFillStar className="w-5 h-5 mr-2" />
                <p>Star this project on GitHub</p>
              </div>
              <a href="#" className="flex items-center ">
                View more <BsArrowRight className="ml-1" />
              </a>
            </div>
            <h2 className="mb-4 text-xl font-semibold text-gray-600 dark:text-gray-200">
              Big section cards
            </h2>
            <div className="min-w-0 rounded-lg shadow-xs overflow-hidden bg-white mb-8 shadow-md">
              <div className="flex items-center">
                <p className="p-4">Large,full width sections goes here</p>
              </div>
            </div>
            <h2 className="mb-4 text-xl font-semibold text-gray-600 dark:text-gray-200">
              Responsive cards
            </h2>
            <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
              <div className="min-w-0 rounded-lg shadow-xs overflow-hidden bg-white dark:bg-gray-400">
                <div className="p-4 flex items-center">
                  <div className="p-3 rounded-full text-orange-500 bg-orange-100 mr-4">
                    <HiUserGroup className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2 text-gray-600">
                      Total clients
                    </p>
                    <p className="text-lg font-semibold text-gray-700 ">6861</p>
                  </div>
                </div>
              </div>
              <div className="min-w-0 rounded-lg shadow-xs overflow-hidden bg-white dark:bg-gray-400">
                <div className="p-4 flex items-center">
                  <div className="p-3 rounded-full text-purple-500 bg-purple-100 mr-4">
                    <MdAccountBalanceWallet className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2 text-gray-600">
                      Account balance
                    </p>
                    <p className="text-lg font-semibold text-gray-700 ">
                      $ 46,325.34
                    </p>
                  </div>
                </div>
              </div>
              <div className="min-w-0 rounded-lg shadow-xs overflow-hidden bg-white dark:bg-gray-400">
                <div className="p-4 flex items-center">
                  <div className="p-3 rounded-full text-green-500 bg-green-100 mr-4">
                    <MdPointOfSale className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2 text-gray-600">
                      New sales
                    </p>
                    <p className="text-lg font-semibold text-gray-700 ">661</p>
                  </div>
                </div>
              </div>
              <div className="min-w-0 rounded-lg shadow-xs overflow-hidden bg-white dark:bg-gray-400">
                <div className="p-4 flex items-center">
                  <div className="p-3 rounded-full text-teal-500 bg-teal-100 mr-4">
                    <AiOutlineMessage className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2 text-gray-600">
                      Pending Contacts
                    </p>
                    <p className="text-lg font-semibold text-gray-700 ">35</p>
                  </div>
                </div>
              </div>
            </div>
            <h2 className="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-200">
              Cards with title
            </h2>
            <div className="grid gap-6 mb-8 md:grid-cols-2">
              <div className="min-w-0 rounded-lg shadow-xs overflow-hidden bg-white dark:bg-gray-800">
                <div className="p-4">
                  <p className="mb-4 font-semibold text-gray-600">Revenue</p>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Nihil, omnis placeat veniam, facere eveniet mollitia quos id
                    fuga nemo rerum velit perspiciatis. Dolorem aliquam
                    dignissimos ad sapiente ipsa tenetur modi.
                  </p>
                </div>
              </div>
              <div className="min-w-0 rounded-lg shadow-xs overflow-hidden text-white bg-purple-600 dark:bg-gray-800">
                <div className="p-4">
                  <p className="mb-4 font-semibold ">Colored card</p>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Nihil, omnis placeat veniam, facere eveniet mollitia quos id
                    fuga nemo rerum velit perspiciatis. Dolorem aliquam
                    dignissimos ad sapiente ipsa tenetur modi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Cards;
