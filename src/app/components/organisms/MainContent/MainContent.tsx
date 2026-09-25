import AboutSection from "../../molecules/AboutSection";
import LatestReleaseSection from "../../molecules/LatestReleaseSection";
import { mainContentStyles } from "./styles";

export function MainContent() {
  return (
    <div className={mainContentStyles.root}>
      <LatestReleaseSection />
      <AboutSection />
    </div>
  );
}

export default MainContent;
