import iconMenu from "./img/icons8-menu.svg" ;
import React, { Component } from 'react'; import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { MenuIcon } from '@heroicons/react/solid';
function classNames(...classes)
{ return classes.filter(Boolean).join(' ') } function NavberMenuReact(){ return (
<div class="relative bg-white mx-[266px] ">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <div class="flex items-center py-3 md:justify-start md:space-x-10">
            <div class="flex justify-start lg:w-0 lg:flex-1">
                <div class="flex justify-between lg:w-0 lg:flex-1 ">
                    <a href="#" class="text-base  text-gray-900  hover:underline underline-offset-8 decoration-4"> ABOUT OU </a>
                    <a href="#" class="text-base  text-gray-900  hover:underline underline-offset-8 decoration-4"> ACADEMICS </a>
                    <a href="#" class="text-base  text-gray-900  hover:underline underline-offset-8 decoration-4"> ADMISSIONS & AID </a>
                    <a href="#" class="text-base  text-gray-900  hover:underline underline-offset-8 decoration-4"> CAMPUS LIFE </a>
                </div>
            </div>
            <div class="flex justify-end lg:w-0 lg:flex-1 mt-[3px]">
                <div class="flex justify-evenly lg:w-0 lg:flex-1 ">
                    <a href="#" class="text-base text-gray-900  hover:underline underline-offset-8 decoration-4"> SUPPORT OU </a>
                    <a href="#" class="text-base  text-gray-900  hover:underline underline-offset-8 decoration-4"> VISIT </a>
                    <a href="#" class="text-base  text-red-600  hover:underline underline-offset-8 decoration-4 decoration-gray-900"> APPLY NOW </a>
                    <Menu as="div" className="inline-block text-left z-10">
                        <div>
                            <Menu.Button className="bg-white text-red-900 hover:bg-gray-50">
                                <MenuIcon className="-mr-1 ml-2 h-10 w-10 mt-[-8px]" aria-hidden="true" />
                            </Menu.Button>
                        </div>

                        <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
                            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 shadow-lg bg-red-800  ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
                                <div className="py-1">
                                    <Menu.Item>
                                        {({ active }) => (
                                        <a href="#" className={classNames( active ? 'bg-none text-orange-50' : 'text-orange-50 bg-none', 'block px-4 py-2 text-right text-xs mr-2' )}>
                                        FOR YOU
                                        </a> )}
                                    </Menu.Item>
                                </div>
                                <div className="py-1 mx-6">
                                    <Menu.Item>
                                        {({ active }) => (
                                        <a href="#" className={classNames( active ? 'bg-red-700 text-orange-50' : 'text-orange-50', 'block px-2 py-1 text-[12px] font-bold text-right' )}>
                                        ALUMNI
                                        </a> )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                        <a href="#" className={classNames( active ? 'bg-red-700 text-orange-50' : 'text-orange-50', 'block px-2 py-1 text-[12px] font-bold text-right' )}>
                                        FUTURE SOONER
                                        </a> )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                        <a href="#" className={classNames( active ? 'bg-red-700 text-orange-50' : 'text-orange-50', 'block px-2 py-1 text-[12px] font-bold text-right' )}>
                                        PARENTS
                                        </a> )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                        <a href="#" className={classNames( active ? 'bg-red-700 text-orange-50' : 'text-orange-50', 'block px-2 py-1 text-[12px] font-bold text-right' )}>
                                        OU STUDENTS
                                        </a> )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                        <a href="#" className={classNames( active ? 'bg-red-700 text-orange-50' : 'text-orange-50', 'block px-2 py-1 text-[12px] font-bold text-right' )}>
                                        FACULTY & STAFF
                                        </a> )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                        <a href="#" className={classNames( active ? 'bg-none text-orange-50' : 'text-orange-50 bg-none', 'block px-4 py-2 text-right text-xs mr-[-15px] mt-[10px]' )}>
                                        EXPLORE OU
                                        </a> )}
                                    </Menu.Item>
                                </div>

                                <div className="py-1 mx-6">
                                    <Menu.Item>
                                        {({ active }) => (
                                        <a href="#" className={( active ? 'bg-red-700 text-orange-50' : 'text-orange-50', 'block px-2 py-1 text-[13px] font-bold text-right text-orange-50' )}>
                                        ATHLETICS
                                        </a> )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                        <a href="#" className={classNames( active ? 'bg-red-700 text-orange-50' : 'text-orange-50', 'block px-2 py-1 text-[12px] font-bold text-right' )}>
                                        NEWS & EVENTS
                                        </a> )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                        <a href="#" className={classNames( active ? 'bg-red-700 text-orange-50' : 'text-orange-50', 'block px-2 py-1 text-[12px] font-bold text-right' )}>
                                        CALENDAR
                                        </a> )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                        <a href="#" className={classNames( active ? 'bg-red-700 text-orange-50' : 'text-orange-50', 'block px-2 py-1 text-[12px] font-bold text-right' )}>
                                        RESEARCH
                                        </a> )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                        <a href="#" className={classNames( active ? 'bg-red-700 text-orange-50' : 'text-orange-50', 'block px-2 py-1 text-[12px] font-bold text-right' )}>
                                        CAMPUS SAFETY
                                        </a> )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                        <a href="#" className={classNames( active ? 'bg-red-700 text-orange-50' : 'text-orange-50', 'block px-2 py-1 text-[12px] font-bold text-right' )}>
                                        OUTREACH
                                        </a> )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                        <a href="#" className={classNames( active ? 'bg-red-700 text-orange-50' : 'text-orange-50', 'block px-2 py-1 text-[12px] font-bold text-right mb-2' )}>
                                        CONTACT OU
                                        </a> )}
                                    </Menu.Item>
                                </div>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </div>
            </div>
        </div>
    </div>
</div>
); } export default NavberMenuReact;