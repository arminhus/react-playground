import React from "react";

const buttonStyle = {
  background: "yellow",
  color: "black"
};
class RouletteGun extends React.Component {
  static defaultProps = {
    bulletInChamber: 8
  };
  state = {
    chamber: null,
    spinningTheChamber: false
  };

  componentWillUnmount = () => {
    clearTimeout(this.timeout);
  };

  onClickEvent = () => {
    this.setState({
      spinningTheChamber: true
    });
    this.timeout = setTimeout(() => {
      const randNum = Math.floor(Math.random() * 9);
      console.log(randNum, this.props.bulletInChamber);
      this.setState({
        chamber: randNum,
        spinningTheChamber: false
      });
    }, 2000);
  };

  rouletteGunResult() {
    const { chamber, spinningTheChamber } = this.state;
    const { bulletInChamber } = this.props;
    if (spinningTheChamber) {
      return "spinning the chamber and pulling the trigger! ...";
    } else if (chamber === bulletInChamber) {
      return "BANG!!!!!";
    } else {
      return "you're safe!";
    }
  }

  render() {
    return (
      <div>
        <p>{this.rouletteGunResult()}</p>
        <button onClick={this.onClickEvent} style={buttonStyle}>
          Pull trigger!
        </button>
      </div>
    );
  }
}

export default RouletteGun;
