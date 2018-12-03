import React from "react";
import "./Drumpad.css";

export default class Drumpad extends React.Component {
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeydown);
    window.focus();
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeydown);
  }

  handleKeydown = e => {
    if (e.keyCode === this.props.letter.charCodeAt()) {
      this.audio.play();
      this.audio.currentTime = 0;
      this.props.handleDisplay(this.props.id);
    }
  };

  handleClick = () => {
    this.audio.play();
    this.audio.currentTime = 0;
    this.props.handleDisplay(this.props.id);
  };

  render() {
    return (
      <div id={this.props.id} className="drum-pad" onCLick={this.handleClick}>
        <h1>{this.props.letter}</h1>
        <audio
          ref={ref => (this.audio = ref)}
          className="clip"
          src={this.props.src}
          id={this.props.letter}
        />
      </div>
    );
  }
}
