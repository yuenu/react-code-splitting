import { Desktop, Mobile } from "@/apps";
import Responsive from "@/hoc/responsive";

function App() {
  const Screen = Responsive({Desktop, Mobile})
  return (
    <div>
      <div>Root App Component</div>
      <Screen />
    </div>
  );
}

export default App;
