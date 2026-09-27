import AboutSection from "../../molecules/AboutSection";
import LatestReleaseSection from "../../molecules/LatestReleaseSection";
import { mainContentStyles } from "./styles";

export function MainContent() {
  return (
    <div className={`${mainContentStyles.root} pr-xl24`}>
      <LatestReleaseSection />
      <AboutSection />
    </div>
  );
}

export default MainContent;
