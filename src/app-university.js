import './App.css';
import NavbarReact from './navbarReact';
import NavberMenuReact from './NavbarMenuReact';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRoad } from '@fortawesome/free-solid-svg-icons'
import { faDollar } from '@fortawesome/free-solid-svg-icons'
import imgf from "./img/1658350870555.png"
import imgr from "./img/1658350990977.png"
import Tabs from "./tabs"
import React from 'react';
import footterLogo from "./img/footerlogo.png"
import facebook from "./img/icons8-facebook-f.svg"
import twitter from "./img/icons8-twitter.svg"
import ig from "./img/icons8-instagram-old.svg"
import yt from "./img/icons8-youtube-logo.svg"
import mediaplay from "./img/iconmonstr-media-control-1.svg"
import { FacebookEmbed } from 'react-social-media-embed';
import LabTabs from "./IframeFacebook"

function AppUniversity() {
  return (
    <div>
      <div>
        <NavbarReact />
      </div>
      <div>
       <NavberMenuReact />
      </div>
      <div className="bg-pack-train w-auto h-[430px] bg-no-repeat bg-right">
          <div className='bg-neutral-900 p-16 md:bg-opacity-30 top-[27%] w-auto relative z-0 pb-20'>
              <p className=' text-center text-[45px] text-zinc-50 font-serif drop-shadow-md mt-[-30px] ' >Visit Campus</p>
              <p className='text-center text-zinc-50 font-sans text-sm drop-shadow-md font-serif'>Learn about on-campus experiences for prospective students.</p>
              <button class="bg-sky-800 hover:bg-[#154765] text-white text-xs py-[10px] px-4 absolute left-[47%] top-[67%] shadow-xl border-b-2 border-sky-700 mb-10 rounded">Learn More</button>
          </div>
      </div>
      <div className='bg-[#EDEDED] w-auto h-[450px] mt-6 flex justify-evenly'>
        <div>
          <div class="mt-7 w-80 h-[179px] text-gray-900 bg-white rounded-md border border-gray-200  dark:bg-[#EDEDED] dark:border-neutral-300 dark:text-sky-800 relative right-[-100px]">
              <button type="button" class="inline-flex relative items-center py-2 px-4 w-full text-xs rounded-t-lg border-b border-neutral-300 flex justify-between hover:bg-[#F1F1F1]">
                  Apply to OU
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[#606060]" viewBox="0 0 20 20" fill="currentColor"><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" /></svg>
              </button>
              <button type="button" class="inline-flex relative items-center py-2 px-4 w-full text-xs border-b border-neutral-300 flex justify-between hover:bg-[#F1F1F1]">
                  Visit Us
                  <FontAwesomeIcon icon={faRoad} class=" mr-1 h-4 w-4 text-[#606060]" />
              </button>
              <button type="button" class="inline-flex relative items-center py-2 px-4 w-full text-xs border-b border-neutral-300 flex justify-between hover:bg-[#F1F1F1]">
                Support OU
                <FontAwesomeIcon icon={faDollar} class=" mr-1 h-4 w-4 text-[#606060]" />
              </button>
              <button type="button" class="inline-flex relative items-center py-2 px-4 w-full text-xs border-b border-neutral-300 flex justify-between hover:bg-[#F1F1F1]">
                  Event
                  <svg xmlns="http://www.w3.org/2000/svg" class="mr-0.5 h-5 w-5 text-[#606060]" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" /></svg>
              </button>
              <button type="button" class="inline-flex relative items-center py-2 px-4 w-full text-xs  flex justify-between hover:bg-[#F1F1F1]">
                  Contact
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[#606060] mr-0.5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" /></svg>
              </button>
          </div>
          <p className='text-xs font-bold mt-5 text-gray-700 relative right-[-100px]'>Leadership:</p>
          <div class="mt-5 w-80 h-[70px] text-gray-900 bg-white rounded-md border border-gray-200  dark:bg-[#EDEDED] dark:border-neutral-300 dark:text-sky-800 relative right-[-100px]">
              <button type="button" class="inline-flex relative items-center py-2 px-4 w-full text-xs border-b border-neutral-300 flex justify-between hover:bg-[#F1F1F1]">
                    Board of Regents     
              </button>
              <button type="button" class="inline-flex relative items-center py-2 px-4 w-full text-xs  flex justify-between hover:bg-[#F1F1F1]">
                    Office of the President
              </button>
          </div>
          <p className='text-xs font-bold mt-5 text-gray-700 relative right-[-100px]'>OU Locations:</p>         
          <div class="inline-flex shadow-b-md shadow-gray-900 mt-3 relative right-[-100px] shadow-sm rounded-tr-sm rounded-tl-sm rounded-br-sm rounded-bl-sm">
            <a href="#" aria-current="page" class="border-r-[1px] border-neutral-300 py-[6px] px-[12px] font-medium text-sm text-[#525252] bg-[#f5f5f5] rounded-l-lg hover:bg-gray-100 5 hover:shadow-inner hover:shadow-neutral-300">
              Norman
            </a>
            <a href="#" class="border-r-[1px] border-neutral-300 py-[6px] font-medium px-[12px] text-sm text-[#525252] bg-[#f5f5f5] hover:bg-gray-100 hover:shadow-inner hover:shadow-neutral-300">
              Tusla
            </a>
            <a href="#" class="py-[6px] px-[12px] text-sm text-[#525252] font-medium bg-[#f5f5f5] rounded-r-lg  hover:bg-gray-100  hover:shadow-inner hover:shadow-neutral-300">
              HSC
            </a>
          </div>
        </div>
        

        <div className='mt-7 w-80 h-[400px] bg-[#fff] rounded-md relative shadow-lg absolute left-[-15px]'>
          <img src={imgf} className="rounded-t-md" />
          <button class="bg-[#660000] text-white text-xs py-2 px-4 shadow-xl absolute right-[0%] top-[47%]">RANKINGS</button>
          <p className='text-left p-4 text-xs'>The Fran and Earl Ziegler College of Nursing at the University of Oklahoma is once again one of the best programs in the nation and the No. 1 nursing school in the state of Oklahoma, according to Nursing Schools Almanac.</p>
          <button class="text-white text-xs py-2 px-4 shadow-xl rounded-sm ml-[70px] mt-4 bg-[#154765] hover:bg-sky-800 ">OU Nursing No. 1 in State</button>
          
        </div>
        <div className='mt-7 w-80 h-[400px] bg-[#fff] rounded-md relative shadow-lg absolute left-[-130px]'>
          <img src={imgr} className="rounded-t-md" />
          <button class="bg-[#660000] text-white text-xs py-2 px-4 shadow-xl absolute right-[0%] top-[34%] ">FACULTY</button>
          <p className='text-left p-4 text-xs'>The Fran and Earl Ziegler College of Nursing at the University of Oklahoma is once again one of the best programs in the nation and the No. 1 nursing school in the state of Oklahoma, according to Nursing Schools Almanac.</p>
          <button class="text-white text-xs py-2 px-6 shadow-xl rounded-sm ml-[20px] mt-[68px] bg-[#154765] hover:bg-sky-800 ">Professors Named Fulbright Scholar Fellows</button>
        </div>


      </div>
      <div className='bg-white w-auto h-[650px] mt-10 flex justify-evenly'>
         <div className='mt-10 w-[450px] h-[540px] bg-[#fff] relative absolute left-[60px] border border-gray-400 px-4 py-5 '>
          <p className="text-lg font-bold text-[#660000] font-sans">News</p>
          <p className="text-md font-bold mt-2 text-gray-800 font-sans">OU Medical Student and Veteran Named 2022 Tillman Scholar</p>
          <p className="text-xs mt-2 text-gray-700 font-sans">Nate Cross, a Navy veteran and third-year medical student at the University of Oklahoma College of Medicine, has been named a 2022 Tillman Scholar by the Pat Tillman Foundation.</p>
          <p className="text-[12px] mt-10 text-gray-700 font-sans">RECENT ARTICLES</p>
          <div className='py-1 border-b'>
            <a className="text-[12px] text-[#19577B] font-sans hover:underline" href="#">OU Medical Student and Veteran Named 2022 Tillman Scholar</a>
          </div>
          <div className='py-1 border-b'>
            <a className="text-[12px] text-[#19577B] font-sans hover:underline" href="#">OU Welcome Center to be Named in Honor of Significant Gift From Jones Family</a>
          </div>
          <div className='py-1 border-b'>
            <a className="text-[12px] text-[#19577B] font-sans hover:underline" href="#">OU College of Nursing Ranked No. 1 Nursing School in the State</a>
          </div>
          <div className='py-1 border-b'>
            <a className="text-[12px] text-[#19577B] font-sans hover:underline" href="#">OU Names Department of Mathematics in Honor of Transformational Gift</a>
          </div>
          <div className='py-1 border-b'>
            <a className="text-[12px] text-[#19577B] font-sans hover:underline" href="#">OU Board of Regents Approves FY23 Budget, OU Polytechnic Institute, Facility Expansions and Renovations, and More</a>
          </div>
          <div className='py-1 border-b'>
            <a className="text-[12px] text-[#19577B] font-sans hover:underline" href="#">Two OU Professors Named Fulbright U.S. Scholar Fellows</a>
          </div>
          <button class="text-white text-xs py-2 px-6 shadow-xl rounded-sm  bg-[#154765] hover:bg-sky-800 mt-[26px]">View all articles</button>
         </div>
         <LabTabs />
         </div>
      <div className="w-auto h-[210px] bg-[#242424]">
        <div className='mx-[300px] relative top-[25px] w-[250px]'>
            <img src={footterLogo} className="w-[45px] h-[62px]"/>
            <div className='absolute top-[0px] left-[55px]'>
               <p className="text-[#ffffff] text-xs font-bold hover:underline">The University of Oklahoma</p>
               <p className="text-[#ffffff] text-xs mt-1">660 Parrington Oval,</p>
               <p className="text-[#ffffff] text-xs mt-1">Norman, OK 73019-0390</p>
               <p className="text-[#ffffff] text-xs mt-1">(405) 325-0311</p>
            </div>
            
        </div>
        <div className="w-[150px] ml-[630px] relative top-[-40px]">
          <p className="text-xs text-[#ffffff] mt-1 hover:underline font-normal">Accessibility</p>
          <p className="text-xs text-[#ffffff] mt-1 hover:underline font-normal">Sustainability</p>
          <p className="text-xs text-[#ffffff] mt-1 hover:underline font-normal">HIPAA</p>
          <p className="text-xs text-[#ffffff] mt-1 hover:underline font-normal">OU Job Search</p>
        </div>

        <div className="w-[150px] ml-[770px] relative top-[-120px]">
          <p className="text-xs text-[#ffffff] mt-1 hover:underline font-sans font-normal">Policies</p>
          <p className="text-xs text-[#ffffff] mt-1 hover:underline font-normal">Legal Notices</p>
          <p className="text-xs text-[#ffffff] mt-1 hover:underline font-normal">Copyright</p>
          <p className="text-xs text-[#ffffff] mt-1 hover:underline font-normal">Resources & Offices</p>
          <p className="text-xs text-[#ffffff] mt-1 hover:underline font-normal">OU Report It!</p>

          <div className='h-[50px] w-[950px] border-t-[0.5px] border-gray-500 realtive absolute top-[130px] left-[-470px]'>
            <p className='text-xs text-[#ffffff] py-4 '>Updated 7/20/2022 by The University of Oklahoma: marcomm@ou.edu</p>
          </div>
        </div>
        <div className='relative absolute top-[-215px] grid grid-cols-5 w-[250px] left-[940px]'>
          <span><img src={facebook} alt="logo" className="bg-[#A3A3A3] rounded-md p-1 w-[45px] h-[45px] hover:bg-[#242424] hover:text-white"/></span>
          <span><img src={twitter} alt="logo" className="bg-[#A3A3A3] rounded-md p-1 w-[45px] h-[45px] hover:bg-[#242424] hover:text-white"/></span>
          <span><img src={ig} alt="logo" className="bg-[#A3A3A3] rounded-md p-1 w-[45px] h-[45px] hover:bg-[#242424] hover:text-white"/></span>
          <span><img src={yt} alt="logo" className="bg-[#A3A3A3] rounded-md p-1 w-[45px] h-[45px] hover:bg-[#242424] hover:text-white"/></span>
          <span><img src={mediaplay} alt="logo" className="bg-[#A3A3A3] rounded py-[5px] w-[15px] h-[15px]  mt-4 ml-2"/></span>
        </div>
      </div>
      
      
    </div>
       
    
  );
}

export default AppUniversity;
