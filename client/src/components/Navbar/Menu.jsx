// <div id="root"></div>
import styles from './Menu.module.css';
import React, { useState, useEffect } from 'react';

const Menu = () => {
  const [startAnimate, setStartAnimate] = useState(false);
  const [highlightTopPosition, setStateHighlightTopPosition] = useState(
    0
  );
  const [currCount, setCurrCount] = useState(0);

  const onClickTab = (count) => {
    setStartAnimate(false);
    setCurrCount(count);
    setStateHighlightTopPosition(count * 52);

    setTimeout(() => {
      setStartAnimate(true);
    }, 100);
  };

  useEffect(() => {
    setTimeout(() => {
      setStartAnimate(true);
    }, 500);

    return () => {};
  }, []);

  return (
    <div>
      {/* <h1>Sidebar animation example</h1> */}
      <div className={styles.sidebar}>
        <div
          style={{ top: `${highlightTopPosition}px` }}
          className={`styles.sidebar__highlight ${
            startAnimate && 'styles.sidebar__highlight__animate'
          }`}
        ></div>
        {/* note: will still have to think about this implementation */}
        {/* <div style={{ position: "absolute", height: "500px", width: "50px", backgroundColor: "#049DBF", zIndex: "-1" }}></div> */}

        <a
          className={currCount ? 0 : undefined && 'active'}
          href="#home"
          onClick={() => onClickTab(0)}
        >
          <span className={currCount ? 0 : undefined && 'styles.text-active'}>
            <i className="fas fa-arrow-right"></i> Home
          </span>
        </a>
        <a
          className={currCount ? 1 : undefined && 'styles.active'}
          href="#news"
          onClick={() => onClickTab(1)}
        >
          <span className={currCount ? 1 : undefined && 'styles.text-active'}>
            <i className="fas fa-arrow-right"></i> News
          </span>
        </a>
        <a
          className={currCount ? 2 : undefined && 'styles.active'}
          href="#contact"
          onClick={() => onClickTab(2)}
        >
          <span className={currCount ? 2 : undefined && 'styles.text-active'}>
            <i className="fas fa-arrow-right"></i> Contact
          </span>
        </a>
        <a
          className={currCount ? 3 : undefined && 'styles.active'}
          href="#about"
          onClick={() => onClickTab(3)}
        >
          <span className={currCount ? 3 : undefined && 'styles.text-active'}>
            <i className="fas fa-arrow-right"></i> About
          </span>
        </a>
      </div>
    </div>
  );
};

export default Menu;
