import LatestReleaseSection from "../../molecules/LatestReleaseSection";
import { mainContentStyles } from "./styles";

export function MainContent() {
  return (
    <div className={mainContentStyles.root}>
      <LatestReleaseSection />
    </div>
  );
}

export default MainContent;
