"use client"
import { useRef, useEffect, useState } from "react";
export default function Home() {
  const [tasbeehDots, setTasbeehDots] = useState([]);
  let [count, setCount] = useState(0);
  let [countN, setCountN] = useState(0);
  const [greeting, setGreeting] = useState("...");
  const [tasbeehStorage, setTasbeehStorage] = useState({});
  const [origin, setOrigin] = useState({});
  const tasbeehDotsRef = useRef(null);
  const tasbeehDotsSecond = useRef(null);
  useEffect(() => {
    const greetings = [
      "May your heart be filled with peace and light today.",
      "Every moment is a blessing; embrace it with gratitude.",
      "SubhanAllah, may your day be as beautiful as your faith.",
      "Alhamdulillah for another chance to do good today.",
      "May Allah ease all your tasks and fill your heart with joy.",
      "Seek contentment in the remembrance of Allah today.",
      "Each Bismillah is a step closer to barakah in your life.",
      "Start your day with a grateful heart; blessings will follow.",
      "In every hardship, remember there's ease from Allah.",
      "May Allah’s light guide you in every step you take.",
      "Remember, a simple smile is charity. Spread joy today!",
      "Gratitude turns what we have into enough. Alhamdulillah!",
      "Trust Allah's plan; He knows what’s best for you.",
      "May your day be filled with peace and your heart with faith.",
      "Begin with Bismillah, and let Allah guide the rest.",
      "Stay positive, stay grateful, and watch Allah bless you.",
      "Your intentions are seen by Allah. Keep them pure.",
      "May today bring ease to all your worries.",
      "Allah’s mercy surrounds you; trust Him fully.",
      "Take every step with faith, and Allah will guide you.",
      "Patience brings reward; trust in Allah’s timing.",
      "Today is a gift from Allah; make it count.",
      "Remember Allah often, and He will remember you.",
      "May peace and blessings follow you wherever you go.",
      "Be kind, for kindness is a form of worship.",
      "Every Alhamdulillah adds to your blessings.",
      "Seek closeness to Allah, and He will ease your path.",
      "Start with a pure heart and a grateful mind.",
      "Dua is the believer’s strength; make it often.",
      "May Allah reward every effort you make for His sake."
    ];
    setGreeting(greetings[Math.floor(Math.random() * greetings.length)]);
  }, []);
  const addDot = () => {
    setCount(count += 1);
    setCountN(countN += 1);
    setTasbeehDots(prevDots => [
      ...prevDots,
      <div key={prevDots.length} className="tasbeeh-holder">
        <div className="tasbeeh-btn">
          <div className="left">{count--}</div>
          <div className="right">{countN++}</div>
        </div>
      </div>
    ]);
  };
  const nextDot = () => {
    addDot();
    if ("vibrate" in navigator) {
      navigator.vibrate(80);
    }
    setTimeout(() => {
      if (tasbeehDots.length < 1) {
        setOrigin({ id: Math.floor(Math.random() * 9999999), start: new Date().toLocaleTimeString(), date: new Date().toDateString() });
      } else {
        setTasbeehStorage({ id: origin.id, counts: tasbeehDots.length += 1, start: origin.start, end: new Date().toLocaleTimeString(), date: new Date().toDateString() });
      }
      if (tasbeehDotsRef.current) {
        tasbeehDotsRef.current.scrollIntoView({ behavior: "smooth" });
      }
      if (tasbeehDotsSecond.current) {
        tasbeehDotsSecond.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 1);
  };
  const resetAndSave = () => {
    if (tasbeehStorage.counts >= 10) {
      if (localStorage.history === undefined) {
        localStorage.setItem("history", JSON.stringify([tasbeehStorage]));
      } else {
        const previousHistory = JSON.parse(localStorage.history);
        previousHistory.push(tasbeehStorage);
        localStorage.setItem("history", JSON.stringify(previousHistory));
      }
    }
    if ("vibrate" in navigator) {
      navigator.vibrate([100, 50, 50]);
    }
    setCountN(0);
    setCount(0);
    setTasbeehDots([]);
  }
  const popBtn = (e) => {
    const poper = e.currentTarget.style;
    poper.scale = 1.1
    setTimeout(() => {
      poper.scale = 1
    }, 100);
  }
  const rotBtn = (e) => {
    const poper = e.currentTarget.style;
    poper.rotate = "360deg"
    setTimeout(() => {
      poper.rotate = "0deg"
    }, 100);
  }
  return (
    <>
      <div className="mob-max-node">
        <div className="greeting-header">
          <h2>Tasbeeh</h2>
          <p>{greeting}</p>
        </div>
        <div className="tasbeeh">
          <div className="tap-x-node x-reverse">
            {
              tasbeehDots.map((element, index) => (
                <div className="before-holder" key={index}>
                  {element}
                </div>
              ))
            }
            <div ref={tasbeehDotsRef} />
          </div>
          <div className="tap-center-x">
            <div className="tasbeeh-holder">
              <div className="tasbeeh-btn" onClick={(e) => { popBtn(e); nextDot() }}>{tasbeehDots.length}</div>
            </div>
            <div className="options-holder">
              <div className="opt-btn" onClick={(e) => { rotBtn(e); resetAndSave() }}>
                <svg viewBox="0 0 20 20" >
                  <path d="M0.833252 3.33337V8.33337H5.83325" />
                  <path d="M19.1667 16.6666V11.6666H14.1667" />
                  <path d="M17.0749 7.49998C16.6523 6.30564 15.934 5.23782 14.987 4.39616C14.0401 3.55451 12.8954 2.96645 11.6597 2.68686C10.424 2.40727 9.13762 2.44527 7.92059 2.79729C6.70356 3.14932 5.59554 3.80391 4.69992 4.69998L0.833252 8.33331M19.1666 11.6666L15.2999 15.3C14.4043 16.1961 13.2963 16.8506 12.0792 17.2027C10.8622 17.5547 9.57584 17.5927 8.34016 17.3131C7.10447 17.0335 5.95975 16.4455 5.01281 15.6038C4.06586 14.7621 3.34756 13.6943 2.92492 12.5" />
                </svg>
              </div>
              <div className="opt-btn">
                <svg viewBox="0 0 20 20" >
                  <path d="M0.833252 3.33337V8.33337H5.83325" />
                  <path d="M2.92492 12.5C3.46525 14.0337 4.48936 15.3502 5.84297 16.2512C7.19657 17.1522 8.80632 17.5889 10.4297 17.4954C12.053 17.402 13.6021 16.7835 14.8434 15.7332C16.0846 14.6828 16.951 13.2575 17.3118 11.672C17.6726 10.0865 17.5083 8.42667 16.8438 6.94262C16.1792 5.45857 15.0504 4.2307 13.6273 3.44401C12.2042 2.65732 10.564 2.35442 8.95382 2.58097C7.34363 2.80751 5.85068 3.55122 4.69992 4.70004L0.833252 8.33337" />
                </svg>
              </div>
              <div className="opt-btn">
                <svg viewBox="0 0 20 20" >
                  <path d="M17.3666 3.84172C16.941 3.41589 16.4356 3.0781 15.8794 2.84763C15.3232 2.61716 14.727 2.49854 14.1249 2.49854C13.5229 2.49854 12.9267 2.61716 12.3705 2.84763C11.8143 3.0781 11.3089 3.41589 10.8833 3.84172L9.99994 4.72506L9.1166 3.84172C8.25686 2.98198 7.0908 2.49898 5.87494 2.49898C4.65908 2.49898 3.49301 2.98198 2.63327 3.84172C1.77353 4.70147 1.29053 5.86753 1.29053 7.08339C1.29053 8.29925 1.77353 9.46531 2.63327 10.3251L3.5166 11.2084L9.99994 17.6917L16.4833 11.2084L17.3666 10.3251C17.7924 9.89943 18.1302 9.39407 18.3607 8.83785C18.5912 8.28164 18.7098 7.68546 18.7098 7.08339C18.7098 6.48132 18.5912 5.88514 18.3607 5.32893C18.1302 4.77271 17.7924 4.26735 17.3666 3.84172Z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="tap-x-node">
            {
              tasbeehDots.map((element, index) => (
                <div className="before-holder" key={index}>
                  {element}
                </div>
              ))
            }
            <div ref={tasbeehDotsSecond} />
          </div>
        </div>
      </div>
    </>
  );
}
