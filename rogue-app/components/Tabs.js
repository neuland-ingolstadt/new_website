'use client';

import React, { useState } from 'react';

function TabContent1() {
  return (
    <div>
      <h2>Tab 1</h2>
      <p>This is the content of Tab 1</p>
    </div>
  );
}

function TabContent2() {
  return (
    <div>
      <h2>Tab 2</h2>
      <p>This is the content of Tab 2</p>
    </div>
  );
}

function TabContent3() {
  return (
    <div>
      <h2>Tab 3</h2>
      <p>This is the content of Tab 3</p>
    </div>
  );
}

function Tab(props) {
  const handleClick = () => {
    props.onClick(props.tabIndex);
  };

  return (
    <button onClick={handleClick}>
      {props.tabName}
    </button>
  );
}

function Tabs() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  let tabContent;
  switch (activeTab) {
    case 0:
      tabContent = <TabContent1 />;
      break;
    case 1:
      tabContent = <TabContent2 />;
      break;
    case 2:
      tabContent = <TabContent3 />;
      break;
    default:
      tabContent = null;
  }

  return (
    <div>
      <div>
        <Tab onClick={handleTabClick} tabIndex={0} tabName="Tab 1" />
        <Tab onClick={handleTabClick} tabIndex={1} tabName="Tab 2" />
        <Tab onClick={handleTabClick} tabIndex={2} tabName="Tab 3" />
      </div>
      <div>
        {tabContent}
      </div>
    </div>
  );
}

export default Tabs;
