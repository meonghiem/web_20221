import * as React from "react";
import AppTab from "./app-tab";
import AppSidebar from "./app-sidebar";
import "./layout.css";
import { useState } from "react";
import "../index.css";

export default function Layout({ tab, content, isAdmin = false }) {
  const [isClick, setIsClick] = useState(false);
  return (
    // <div>
    //     <AppTab tabName={parentTab} childName={childTab}></AppTab>

    // </div>
    <>
      <div id="main-content">
        <div id="sidebar">
          <div
            className={`Container isDesktop ${isClick && "show fixed color"}`}
          >
            <AppSidebar />
            <div
              onClick={() => {
                setIsClick(!isClick);
              }}
              className={`closeBtnContainer4 ${!isClick && "hidden"}`}
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M56 5.64L50.36 0L28 22.36L5.64 0L0 5.64L22.36 28L0 50.36L5.64 56L28 33.64L50.36 56L56 50.36L33.64 28L56 5.64Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>

          <div className={`container2 isMobile ${isClick && "hidden"}`}>
            <div
              onClick={() => {
                // localStorage.setItem('isClick', !isClick)
                setIsClick(!isClick);
              }}
              className="logo_avatar csss"
            >
              {/* <svg
                width="42"
                height="45"
                viewBox="0 0 42 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 40.7143C2.9 40.7143 1.95867 40.295 1.176 39.4564C0.392 38.6164 0 37.6071 0 36.4286V12.8571C0 11.6786 0.392 10.67 1.176 9.83143C1.95867 8.99143 2.9 8.57143 4 8.57143H12V4.28571C12 3.10714 12.392 2.09786 13.176 1.25786C13.9587 0.419285 14.9 0 16 0H24C25.1 0 26.042 0.419285 26.826 1.25786C27.6087 2.09786 28 3.10714 28 4.28571V8.57143H36C37.1 8.57143 38.042 8.99143 38.826 9.83143C39.6087 10.67 40 11.6786 40 12.8571V22.0179C39.4 21.5536 38.7667 21.1514 38.1 20.8114C37.4333 20.4729 36.7333 20.1786 36 19.9286V12.8571H4V36.4286H18.15C18.25 37.1786 18.4 37.9107 18.6 38.625C18.8 39.3393 19.05 40.0357 19.35 40.7143H4ZM16 8.57143H24V4.28571H16V8.57143ZM32 45C29.2333 45 26.8753 43.9557 24.926 41.8671C22.9753 39.7771 22 37.25 22 34.2857C22 31.3214 22.9753 28.7943 24.926 26.7043C26.8753 24.6157 29.2333 23.5714 32 23.5714C34.7667 23.5714 37.1253 24.6157 39.076 26.7043C41.0253 28.7943 42 31.3214 42 34.2857C42 37.25 41.0253 39.7771 39.076 41.8671C37.1253 43.9557 34.7667 45 32 45ZM35.3 39.3214L36.7 37.8214L33 33.8571V27.8571H31V34.7143L35.3 39.3214Z"
                  fill="black"
                />
              </svg> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="Outline"
                viewBox="0 0 24 24"
                width="42"
                height="45"
              >
                <rect y="11" width="24" height="2" rx="1" />
                <rect y="4" width="24" height="2" rx="1" />
                <rect y="18" width="24" height="2" rx="1" />
              </svg>
            </div>
          </div>
        </div>
        <div id="top-content">
          {/* {parentTab && <AppTabs role="parent" tabs={parentTab}></AppTabs>} */}
          {/* {childTab && <AppTabs role="children" tabs={childTab}></AppTabs>} */}
          <AppTab
            tabName={tab.parent}
            childName={tab.child}
            isAdmin={isAdmin}
          ></AppTab>
          <div id="content">{content}</div>
        </div>
      </div>
      <style>{`
      .closeBtnContainer4{
        position: fixed;
        top:0px;
        right: 0px;
        padding: 2rem;
      }
      .color{
        background: rgba(204,204,204,0.5) !important;
      }
      .fixed{
        position: fixed;
        width: 100vw;
      }
      .container2{
        position: relative;
        min-height: 100vh;
        // padding-left: 0.5rem;
        // padding-right: 0.5rem;
        // background: #31EEEE;
        background: #cccccc;
      }
      .hidden{
        display: none;
      }
      .show{
        display: block;
      }
      `}</style>
    </>
  );
}
