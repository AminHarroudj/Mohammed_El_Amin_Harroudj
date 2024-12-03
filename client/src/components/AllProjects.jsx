import ProjectCard from "./ProjectCard";
import adwaveImg from "../assets/adwave.png";
import { motion } from "motion/react";

function AllProjects() {
  return (
    <>
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-4 gap-6"
        initial={{
          x: +50,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
      >
        <div>
          <ProjectCard
            imgSource={adwaveImg}
            title={"Adwave Website"}
            description={
              "Frontend project for an algerian entreprise of digital marketing"
            }
            github={"https://github.com/AminHarroudj/Adwave"}
            livepreview={"https://adwave.agency/"}
          />
        </div>
        <div className="lg:pt-10">
          <ProjectCard
            imgSource={adwaveImg}
            title={"Marketing Agency"}
            description={
              "Frontend project for an algerian entreprise of digital marketing"
            }
            github={"https://github.com/AminHarroudj/Digital-Marketing-Agency"}
            livepreview={"https://digital-marketing-agency-flame.vercel.app/"}
          />
        </div>
        <div>
          <ProjectCard
            imgSource={adwaveImg}
            title={"Club Basma"}
            description={
              "Frontend project for an algerian entreprise of digital marketing"
            }
            github={"https://github.com/AminHarroudj/Club-Basma"}
            livepreview={"https://club-basma.vercel.app/"}
          />
        </div>
        <div className="lg:pt-10">
          <ProjectCard
            imgSource={adwaveImg}
            title={"My Portfolio"}
            description={
              "Frontend project for an algerian entreprise of digital marketing"
            }
            github={"https://github.com/AminHarroudj/Mohammed-El-Amin-Harroudj"}
            livepreview={"https://mohammed-el-amin-harroudj.vercel.app/"}
          />
        </div>
      </motion.div>
    </>
  );
}

export default AllProjects;
