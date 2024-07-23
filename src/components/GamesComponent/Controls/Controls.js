import "./controls.scss";

function Controls() {
  const handleArrowKeyClick = (event) => {
    const key = event.target.dataset.key;
    const keyboardEvent = new KeyboardEvent("keydown", {
      keyCode: parseInt(key),
    });
    document.dispatchEvent(keyboardEvent);
  };

  return (
    <>
      <div className="arrow-key-container">
        <div
          className="arrow-key up"
          data-key="87"
          onClick={handleArrowKeyClick}
        ></div>
        <br />
        <div
          className="arrow-key left"
          data-key="65"
          onClick={handleArrowKeyClick}
        ></div>
        <div
          className="arrow-key enter"
          data-key="13"
          onClick={handleArrowKeyClick}
        ></div>
        <div
          className="arrow-key right"
          data-key="68"
          onClick={handleArrowKeyClick}
        ></div>
        <br />
        <div
          className="arrow-key down"
          data-key="83"
          onClick={handleArrowKeyClick}
        ></div>
        <br />
        <div
          className="arrow-key escape"
          data-key="27"
          onClick={handleArrowKeyClick}
        ></div>
      </div>
    </>
  );
}

export default Controls;
