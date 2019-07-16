import React, { Component } from "react";
// import Split from "./composition/Split";
import "./App.css";
// import Tooltip from "./composition/Tooltip";
// import Messages from "./Messages";
import TheDate from "./state/TheDate";
import Counter from "./state/Counter";
import HelloWorld from "./state-drills/HelloWorld";

// make 2 tooltips here and another inside the App directly
// const firstTooltip = (
//   <Tooltip color="hotpink" message="tooltip message">
//     ipsum
//   </Tooltip>
// );
// const secondTooltip = (
//   <Tooltip color="#126BCC" message="another tooltip message">
//     officiis
//   </Tooltip>
// );

// function App() {
//   return (
//     <main className="App">
//       <Split className="left" flexBasis="2">
//         This is the content for the left Split. Lorem {firstTooltip} dolor sit
//         amet consectetur, adipisicing elit. Incidunt ex velit suscipit facere
//         officia?
//         <br />
//         {/* make another tooltip directly inside the App */}
//         <Tooltip message="one more tooltip message">Necessitatibus?</Tooltip>
//       </Split>
//       <Split className="right">
//         This is the content for the right Split. Inventore aliquid cupiditate
//         suscipit repellat. Quaerat quis {secondTooltip} quam fuga. Aliquid quo
//         possimus id soluta aspernatur.
//       </Split>
//     </main>
//   );
// }

// export default App;

class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <h1>YOUR APPLICATION NAME!</h1>
      //   <Messages name="Messages" unread={0} />
      //   <Messages name="Notifications" unread={10} />
      // </div>
      <div>
        <TheDate />
        <Counter count={123} />
        <HelloWorld />
      </div>
    );
  }
}

export default App;
