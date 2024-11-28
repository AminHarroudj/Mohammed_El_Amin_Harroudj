import { useState } from "react";
import AllProjects from "./AllProjects";
import FrontendProjects from "./FrontendProjects";
import BackendProjects from "./BackendProjects";
import Button from "./Button";

function MyLatestProject() {
  const [visibleDiv, setVisibleDiv] = useState(1);

  const handleButtonClick = (divId) => {
    setVisibleDiv(divId);
  };

  return (
    <>
      <div className="px-16 py-32 flex flex-col gap-10 bg-[#2EB2D3] bg-opacity-10">
        <div className="flex flex-col gap-10 justify-center items-center text-center">
          <h1 className="text-5xl font-medium">
            My <span className="text-[#2EB2D3]">Latest</span> Projects
          </h1>
          <p className="text-white text-opacity-50">
            Greeting, fellow digital explorers! I am Mohammed , a passionate and
            innovate developer
          </p>
        </div>
        <div className="flex gap-10 justify-center items-center ">
          <button
            className={`${
              visibleDiv === 1 ? "bg-[#2EB2D3]" : ""
            } py-2 px-8 rounded-full hover:text-[white] hover:bg-[#2EB2D3] border-2 border-[#2EB2D3] hover:border-2 hover:border-[#2EB2D3] hover:scale-110 duration-200`}
            onClick={() => {
              handleButtonClick(1);
            }}
          >
            All
          </button>
          <button
            className={`${
              visibleDiv === 2 ? "bg-[#2EB2D3]" : ""
            } py-2 px-8 rounded-full hover:text-[white] hover:bg-[#2EB2D3] border-2 border-[#2EB2D3] hover:border-2 hover:border-[#2EB2D3] hover:scale-110 duration-200`}
            onClick={() => {
              handleButtonClick(2);
            }}
          >
            Frontend
          </button>
          <button
            className={`${
              visibleDiv === 3 ? "bg-[#2EB2D3]" : ""
            } py-2 px-8 rounded-full hover:text-[white] hover:bg-[#2EB2D3] border-2 border-[#2EB2D3] hover:border-2 hover:border-[#2EB2D3] hover:scale-110 duration-200`}
            onClick={() => {
              handleButtonClick(3);
            }}
          >
            Backend
          </button>
        </div>
        <div>
          {visibleDiv === 1 && (
            <div>
              <AllProjects />
              <div className="flex items-center justify-center mt-10">
                <Button title={"See More Projects"} />
              </div>
            </div>
          )}
          {visibleDiv === 2 && (
            <div>
              <FrontendProjects />
              <div className="flex items-center justify-center mt-10">
                <Button title={"See More Projects"} />
              </div>
            </div>
          )}
          {visibleDiv === 3 && (
            <div>
              <BackendProjects />
              <div className="flex items-center justify-center mt-10">
                <Button title={"See More Projects"} />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default MyLatestProject;
