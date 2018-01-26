class Button extends React.Component {
  render() {
    return (
      <button
        onClick={() => {
          this.props.clickHandle(this.props.id, this.props.detail);
        }}
        style={{ color: this.props.active ? "green" : "red" }}
      >
        {this.props.name}
      </button>
    );
  }
}

class Details extends React.Component {
  render() {
    return <h1>{this.props.detail}</h1>;
  }
}
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeArray: [0, 0, 0, 0],
      details: "Push the revelvant button for immediate support."
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(id, details) {
    var arr = [0, 0, 0, 0];
    arr[id] = 1;
    this.setState({
      activeArray: arr,
      details: details
    });
  }
  render() {
    return (
      <div>
        <Button
          id={0}
          name="Ambulance"
          clickHandle={this.clickHandler}
          active={this.state.activeArray[0]}
          detail="Location sent Ambulance is on the way, estimated time of arrival 5 Mins."
        />
        <Button
          id={1}
          name="Police"
          clickHandle={this.clickHandler}
          active={this.state.activeArray[1]}
          detail="Location sent Police is on the way, estimated time of arrival 5 Mins."
        />
        <Button
          id={2}
          name="Fire"
          clickHandle={this.clickHandler}
          active={this.state.activeArray[2]}
          detail="Location sent Fire Extinguisher is on the way, estimated time of arrival 5 Mins."
        />
        <Button
          id={3}
          name="Amphibious"
          clickHandle={this.clickHandler}
          active={this.state.activeArray[3]}
          detail="Location sent Amphibous support vehicle is on the way, estimated time of arrival 5 Mins."
        />
        <Details detail={this.state.details} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
