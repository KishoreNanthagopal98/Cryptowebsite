import "./titleSection.scss";

function TitleSection(props) {
  return (
    <>
      <div className="title-section" id="titleSection">
        <h1 className="title">{props.title ? props.title  : "90s Game Vault"}</h1>
      </div>
    </>
  );
}

export default TitleSection;
