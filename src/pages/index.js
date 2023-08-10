import * as React from "react";
import Group from "../../public/images/group.svg";
import Book from "../../public/images/iconoir-book.svg";
import Path from "../../public/images/path-3.svg";
import Search from "../../public/images/iconoir-search.svg";

const IndexPage = () => {
  return (
    <main className="h-[1065px] md:h-[1205px] w-[375px] md:w-[1440px] bg-white container mx-auto md:px-24 flex flex-col justify-around ">
      <div className="flex flex-row justify-between items-center pt-4 ">
        <img src={Book} alt="book" className="w-7 h-8 md:ml-4" />
        <div className="flex flex-row items-center space-x-4 ">
          <p className="text-right text-sm leading-6 font-semibold">
            Sans Serif
          </p>
          <img src={Path} alt="path-3" className="w-3 h-1.5" />
          <div className="w-px h-8 bg-[rectangle-color] border"></div>
          <img src={Group} alt="group" className="h-5 w-[71.993px]" />
        </div>
      </div>

      <div className="search-box w-[370px] md:w-full h-12 shrink-0 rounded-2xl bg-[search-input] bg-gray-50 flex flex-row items-center md:justify-between">
        <input
          id="search-field"
          className="w-80 md:w-full h-12 py-0 pl-8 pr-0 text-black sm:text-sm bg-gray-50 rounded-2xl focus:outline-none"
          placeholder="Search..."
          name="search"
        />
        <img className="h-[15.55px] w-[15.55px] mr-4" src={Search} />
      </div>

      <div className="flex justify-between container mx-auto px-2 ">
        <div>
          <h1 className="text-4xl font-medium">keyboard</h1>
          <p className="text-light-purple pt-2">/'ki:bɔ:d/</p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
        >
          <circle opacity="0.25" cx="24" cy="24" r="24" fill="#A445ED" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M19 18V31L32 24.5L19 18Z"
            fill="#A445ED"
          />
        </svg>
      </div>

      <div className="parts-of-speech flex flex-row justify-between items-center">
        <p className="italic font-[sans] pronoun">noun</p>
        <div className="line border w-80 h-0 border-slate-100 md:w-[750px]"></div>
      </div>

      <div className="meaning-section container">
        <p className=" pb-4">Meaning</p>
        <div className="meaning-list w-[302px] mx-auto md:w-[750px]">
          <ul>
            <li className="first-li">
              (etc.) A set of keys used to operate a typewriter, computer etc.
            </li>
            <li className="first-li">
              A component of many instruments including the piano, organ, and
              harpsichord consisting of usually black and white keys that cause
              different tones to be produced when struck.
            </li>
            <li className="first-li">
              A device with keys of a musical keyboard, used to control
              electronic sound-producing devices which may be built into or
              separate from the keyboard device.
            </li>
          </ul>
        </div>
      </div>

      <div className="synonyms flex flex-row space-x-5">
        <p className="text-light-grey">Synonyms</p>
        <p className="text-light-purple font-bold">electronic keyboard</p>
      </div>

      <div className="parts-of-speech flex flex-row justify-between items-center">
        <p className=" font-[sans] ">verb</p>
        <div className="line border w-80 h-0 border-slate-100 md:w-[750px]"></div>
      </div>

      <div className="meaning-section container">
        <p className="pb-4">Meaning</p>
        <div className="meaning-list mx-auto w-[302px] md:w-[750px]">
          <ul>
            <li className="first-li">To type on a computer keyboard.</li>
            <li className="quote py-4">
              “Keyboarding is the part of this job I hate the most.”
            </li>
          </ul>
        </div>
      </div>

      <div className="line border w-full h-0 border-slate-100"></div>

      <div className="source pb-8 pl-2 flex space-x-5">
        <p>Source</p>
        <div className="source-link flex flex-row  align-middle items-center  space-x-2">
          <a>https://en.wiktionary.org/wiki/keyboard</a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="14"
            viewBox="0 0 13 14"
            fill="none"
          >
            <path
              d="M6.09091 4.29545C6.50512 4.29545 6.84091 3.95967 6.84091 3.54545C6.84091 3.13124 6.50512 2.79545 6.09091 2.79545V4.29545ZM1.42603 3.97148L1.95635 4.50182L1.95637 4.50181L1.42603 3.97148ZM1.42603 12.574L1.95638 12.0437L1.95637 12.0436L1.42603 12.574ZM11.2045 7.90909C11.2045 7.49488 10.8688 7.15909 10.4545 7.15909C10.0403 7.15909 9.70455 7.49488 9.70455 7.90909H11.2045ZM4.83331 8.10603C4.54041 8.39893 4.54041 8.8738 4.83331 9.16669C5.1262 9.45959 5.60107 9.45959 5.89397 9.16669L4.83331 8.10603ZM13.1667 1.89397C13.4596 1.60107 13.4596 1.1262 13.1667 0.833306C12.8738 0.540413 12.3989 0.540413 12.106 0.833306L13.1667 1.89397ZM12.6364 2.11364C13.0506 2.11364 13.3864 1.77785 13.3864 1.36364C13.3864 0.949423 13.0506 0.613636 12.6364 0.613636V2.11364ZM9 0.613636C8.58579 0.613636 8.25 0.949423 8.25 1.36364C8.25 1.77785 8.58579 2.11364 9 2.11364V0.613636ZM13.3864 1.36364C13.3864 0.949423 13.0506 0.613636 12.6364 0.613636C12.2221 0.613636 11.8864 0.949423 11.8864 1.36364H13.3864ZM11.8864 5C11.8864 5.41421 12.2221 5.75 12.6364 5.75C13.0506 5.75 13.3864 5.41421 13.3864 5H11.8864ZM6.09091 2.79545H2.45455V4.29545H6.09091V2.79545ZM2.45455 2.79545C1.86987 2.79545 1.30913 3.02771 0.895692 3.44116L1.95637 4.50181C2.08849 4.36968 2.26769 4.29545 2.45455 4.29545V2.79545ZM0.895706 3.44115C0.482259 3.85458 0.25 4.41532 0.25 5H1.75C1.75 4.81314 1.82423 4.63394 1.95635 4.50182L0.895706 3.44115ZM0.25 5V11.5455H1.75V5H0.25ZM0.25 11.5455C0.25 12.1301 0.482269 12.6908 0.895685 13.1043L1.95637 12.0436C1.82422 11.9115 1.75 11.7323 1.75 11.5455H0.25ZM0.895678 13.1043C1.30913 13.5178 1.86988 13.75 2.45455 13.75V12.25C2.26768 12.25 2.08849 12.1758 1.95638 12.0437L0.895678 13.1043ZM2.45455 13.75H9V12.25H2.45455V13.75ZM9 13.75C9.58466 13.75 10.1454 13.5177 10.5588 13.1043L9.49818 12.0436C9.36603 12.1758 9.18683 12.25 9 12.25V13.75ZM10.5588 13.1043C10.9723 12.6908 11.2045 12.1301 11.2045 11.5455H9.70455C9.70455 11.7323 9.63033 11.9115 9.49818 12.0436L10.5588 13.1043ZM11.2045 11.5455V7.90909H9.70455V11.5455H11.2045ZM5.89397 9.16669L13.1667 1.89397L12.106 0.833306L4.83331 8.10603L5.89397 9.16669ZM12.6364 0.613636H9V2.11364H12.6364V0.613636ZM11.8864 1.36364V5H13.3864V1.36364H11.8864Z"
              fill="#757575"
            />
          </svg>
        </div>
      </div>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
