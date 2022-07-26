import iconSearch from "./img/icons8-search-20.svg"
import React, { Component }  from 'react';

function NavbarReact(){
    return (
    <div class="relative bg-white ml-[266px] mr-[306px] mt-[-10px]">
        <div class="max-w-7xl mx-auto px-4 sm:px-6">
            <div class="flex items-center border-b-2 border-black-100 py-6 md:justify-start md:space-x-10">
                <div class="flex justify-start lg:w-0 lg:flex-1">
                    <a href="#">
                    <img class="h-[70px] w-auto " src="https://www.ou.edu/content/dam/website-wordmarks/university-of-oklahoma-wordmark.png" alt="" />
                    </a>
                </div>
                <div class="flex justify-end lg:w-0 lg:flex-1">
                    <a href="#">
                    <img class="h-10 w-auto font-bold" src={iconSearch} alt="" />
                    </a>
                </div>
            </div>
        </div>
    </div>

    );
}

export default NavbarReact;