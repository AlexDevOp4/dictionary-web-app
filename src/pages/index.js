import * as React from "react";
import Group from "../../public/images/group.svg";
import Book from "../../public/images/iconoir-book.svg";
import Path from "../../public/images/path-3.svg";

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
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
