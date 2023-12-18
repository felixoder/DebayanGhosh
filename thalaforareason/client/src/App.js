import { useState, useEffect } from "react";
import "./App.css";
import { WhatsappShareButton, WhatsappIcon } from "react-share";

function App() {
  const [text, setText] = useState("");
  const [submittedText, setSubmittedText] = useState("");
  const [isSubmitClicked, setIsSubmitClicked] = useState(false);
  const [audio, setAudio] = useState(new Audio("/song.mp3")); // Replace with your audio file
  const shareUrl = "http://localhost:3000";
  const encoded = encodeURI(shareUrl);
  const title = "My Website";

  function code(event) {
    event.preventDefault(); // Prevent the form from submitting

    setSubmittedText(text);
    setIsSubmitClicked(true);
    console.log(text);
  }

  useEffect(() => {
    // Play audio when submitted text is 7 lines
    if (submittedText.length === 7) {
      audio.play();
    } else {
      // Pause audio when submitted text is not 7 lines
      audio.pause();
      // Reset audio to the beginning
      audio.currentTime = 0;
    }
  }, [submittedText, audio]);

  return (
    <>
      <div className="container">
        <form onSubmit={code}>
          <input
            type="text"
            id="text"
            value={text}
            onChange={(ev) => setText(ev.target.value)}
            placeholder="Enter Your Name"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="myClass">
        <code>
          <h1>{submittedText}</h1>
        </code>

        {isSubmitClicked ? (
          submittedText.length === 7 ? (
            <>
              <p>{`...${submittedText} is 7 words, so thala for a reason`}</p>

              {/* Conditionally render play button */}
              {!audio.paused && (
                <button onClick={() => audio.pause()}>Stop Audio</button>
              )}
            </>
          ) : (
            <p>{`The length of the submitted text is not 7.`}</p>
          )
        ) : (
          <p>{`Please click the submit button.`}</p>
        )}

        {/* Share on WhatsApp button */}
        <WhatsappShareButton url={encoded} title={title} id="share">
          <WhatsappIcon size={32} round />
          <h3>Share on WhatsApp</h3>
        </WhatsappShareButton>
      </div>
    </>
  );
}

export default App;
