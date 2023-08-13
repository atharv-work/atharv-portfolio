import React from "react";

const Header = (props) => {
  const navigateHandler = (header) => {
    switch (header) {
      case 'home': props.scrollToHomeRef.current.scrollIntoView({
        behavior: 'smooth', // You can adjust the scrolling behavior
        block: 'start',     // You can adjust the vertical alignment
      });
        break;
      case 'about': props.scrollToAboutRef.current.scrollIntoView({
        behavior: 'smooth', // You can adjust the scrolling behavior
        block: 'start',     // You can adjust the vertical alignment
      });
        break;
      case 'education': props.scrollToEducationRef.current.scrollIntoView({
        behavior: 'smooth', // You can adjust the scrolling behavior
        block: 'start',     // You can adjust the vertical alignment
      });
        break;
      case 'skills': props.scrollToSkillsRef.current.scrollIntoView({
        behavior: 'smooth', // You can adjust the scrolling behavior
        block: 'start',     // You can adjust the vertical alignment
      });
        break;
      case 'contact': props.scrollToContactRef.current.scrollIntoView({
        behavior: 'smooth', // You can adjust the scrolling behavior
        block: 'start',     // You can adjust the vertical alignment
      });
        break;
      default: console.log("empty")
    }
  }
  return (
    <div className="sticky top-0 right-0 width-9/10">
      <div className="flex items-center gap-10 ">
        {props.headersArray.map((eachHeader) => {
          return (
            <div
              onClick={() => { navigateHandler(eachHeader.value) }}
              key={eachHeader.value}
              className="cursor-pointer hover:text-violet-600 text-base"
            >
              {eachHeader.label}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
