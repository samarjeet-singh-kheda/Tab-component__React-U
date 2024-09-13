import { useState } from "react";
import Tab from "./Tab";
import TabContent from "./TabContent";
import DifferentContent from "./DifferentContent";
import content from "../data/content";

export default function Tabbed() {
  console.log("TABBED component rendered");

  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <div className="tabs">
        <Tab num={0} activeTab={activeTab} onClick={setActiveTab} />
        <Tab num={1} activeTab={activeTab} onClick={setActiveTab} />
        <Tab num={2} activeTab={activeTab} onClick={setActiveTab} />
        <Tab num={3} activeTab={activeTab} onClick={setActiveTab} />
      </div>

      {activeTab <= 2 ? (
        <TabContent
          key={content.at(activeTab).summary}
          item={content.at(activeTab)}
        />
      ) : (
        <DifferentContent />
      )}

      {/* {TabContent({ item: content.at(0) })} */}
    </>
  );
}
