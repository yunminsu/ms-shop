import React from 'react';

function TabContents(props) {
  const { showTabIndex } = props;

  let tabContent;
  if ( showTabIndex === 0 ) {
    tabContent = <div>탭 내용1</div>;
  } else if ( showTabIndex === 1 ) {
    tabContent = <div>탭 내용2</div>;
  } else if ( showTabIndex === 2 ) {
    tabContent = <div>탭 내용3</div>;
  } else if ( showTabIndex === 3 ) {
    tabContent = <div>탭 내용4</div>;
  }

  return (
    <>
      {tabContent}
    </>
  );
}

export default TabContents;