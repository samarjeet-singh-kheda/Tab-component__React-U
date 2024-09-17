import { useState } from "react";
import { flushSync } from "react-dom";

export default function TabContent({ item }) {
  console.log("TAB CONTENT component rendered");

  const [showDetails, setShowDetails] = useState(true);
  const [likes, setLikes] = useState(0);

  function handleInc() {
    setLikes((likes) => {
      console.log(likes);
      return likes + 1;
    });
  }

  function handleTripleInc() {
    setLikes((likes) => {
      console.log(likes);
      return likes + 1;
    });

    setLikes((likes) => {
      console.log(likes);
      return likes + 1;
    });

    setLikes((likes) => {
      console.log(likes);
      return likes + 1;
    });
  }

  function handleUndo() {
    console.log("BEFORE Undo", likes);

    flushSync(() => {
      console.log("BEFORE setLikes:", likes);
      setLikes(0);
      console.log("AFTER setLikes:", likes);
    });

    // flushSync(() => {
    //   // console.log("BEFORE setShowDetails:", likes);
    //   // setShowDetails(true);
    //   // console.log("AFTER setShowDetails:", likes);

    //   setShowDetails(() => {
    //     console.log("In setShowDetails:", likes);
    //     return true;
    //   });
    // });

    setLikes(0);
    setShowDetails(true);

    console.log("AFTER Undo", likes);
  }

  function handleUndoLater() {
    setTimeout(handleUndo, 2000);
  }

  return (
    <div className="tab-content">
      <h4>{item.summary}</h4>
      {showDetails && <p>{item.details}</p>}

      <div className="tab-actions">
        <button onClick={() => setShowDetails((h) => !h)}>
          {showDetails ? "Hide" : "Show"} details
        </button>

        <div className="hearts-counter">
          <span>{likes} ❤️</span>
          <button onClick={handleInc}>+</button>
          <button onClick={handleTripleInc}>+++</button>
        </div>
      </div>

      <div className="tab-undo">
        <button onClick={handleUndo}>Undo</button>
        <button onClick={handleUndoLater}>Undo in 2s</button>
      </div>
    </div>
  );
}
