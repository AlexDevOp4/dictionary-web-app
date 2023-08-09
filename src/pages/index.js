import * as React from "react";
import Group from "../../public/images/group.svg";
import Book from "../../public/images/iconoir-book.svg";
import Path from "../../public/images/path-3.svg";
import Search from "../../public/images/iconoir-search.svg";

const IndexPage = () => {
  return (
    <main className="h-[1065px] w-[375px] bg-white container mx-auto ">
      <div className="flex flex-row justify-between items-center pt-4 ">
        <img src={Book} alt="book" className="w-7 h-8" />
        <div className="flex flex-row items-center space-x-4 ">
          <p className="text-right text-sm leading-6 font-semibold">
            Sans Serif
          </p>
          <img src={Path} alt="path-3" className="w-3 h-1.5" />
          <div className="w-px h-8 bg-[rectangle-color] border"></div>
          <img src={Group} alt="group" className="h-5 w-[71.993px]" />
        </div>
      </div>

      <div className="search-box mt-4  w-[370px] h-12 shrink-0 rounded-2xl bg-[search-input] bg-gray-50 flex flex-row items-center">
        <input
          id="search-field"
          className="w-80 h-12 py-0 pl-8 pr-0 text-black sm:text-sm bg-gray-50 rounded-2xl focus:outline-none"
          placeholder="Search..."
          name="search"
        />
        <img className="h-[15.55px] w-[15.55px] mr-4" src={Search} />
      </div>

      <div className="flex justify-between container mx-auto px-2 pt-8">
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

      <div className="parts-of-speech flex flex-row justify-between items-center pt-4">
        <p className="italic font-[sans] pronoun">noun</p>
        <div className="line border w-80 h-0 border-slate-100"></div>
      </div>

      <div className="meaning-section container">
        <p className="pt-8 pb-4">Meaning</p>
        <div className="meaning-list mx-auto">
          <ul>
            <li>
              (etc.) A set of keys used to operate a typewriter, computer etc.
            </li>
            <li>
              A component of many instruments including the piano, organ, and
              harpsichord consisting of usually black and white keys that cause
              different tones to be produced when struck.
            </li>
            <li>
              A device with keys of a musical keyboard, used to control
              electronic sound-producing devices which may be built into or
              separate from the keyboard device.
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
