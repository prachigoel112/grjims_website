import React from "react";
import codekshetraimg from "../assets/images/168.webp";
import techvorteximg from "../assets/images/167.webp";

const Cards = ({ date, title, description, teams, status, enddate }) => {
  const eventLinks= {
    codekshetra: "https://code-kshetra.devfolio.co",
    techvortex: "https://linktr.ee/GeekRoom_Jims",
  };
  const handleButtonClick = () => {
    if (status === "Know more") {
      //window.open(event.codekshetra, '_blank', 'noopener,noreferrer');
      const eventKey = title.toLowerCase().replace(/\s/g, ""); // convert title to lowercase and remove spaces
      if (eventLinks[eventKey]) {
        window.open(eventLinks[eventKey], '_blank', 'noopener,noreferrer');
      } else {
        console.log("No link found for this event");
      }
    } else {
      console.log('Status is not "Know more"');
    }
  };
  const cardImage = title.toLowerCase() === "tech vortex" ? techvorteximg : codekshetraimg;
  return (
    <div className=" max-w-[20rem] md:max-w-7xl mx-auto my-3 md:my-10">
      <div className="max-w-[23rem] mx-auto  bg-black rounded-lg shadow  ">
        <a href="#">
          <img
            className="rounded-t-lg w-full h-[12rem] object-cover"
            src={cardImage}
            alt={title}
          />
        </a>
        <div className="p-3 md:p-4">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#fffafa] ">
              {title}
            </h5>
          </a>
          <p className="mb-3 font-normal text-[#ffffff98] ">{description}</p>

          <div className="mb-4">
            {teams ? (
              <h2 className="text-[#fffafa] md:text-xl text-base font-bold ">
                Teams Participated : {teams}
              </h2>
            ) : (
              ""
            )}
            <p className="text-[#fffafa] font-bold text-lg">
              {date} to {enddate}
            </p>
          </div>
          <button
            className="inline-flex items-center px-3 py-2 text-sm duration-700 text-center font-bold text-slate-900 bg-[#80ed99] rounded-lg"
            onClick={handleButtonClick}
          >
            {status}
          </button>

        </div>
      </div>
    </div>
  );
};

export default Cards;
