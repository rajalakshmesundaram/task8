import { Provider } from "react-redux"
import { OperationStore } from "./features/OperationStore"
import { Display } from "./component/Display"
import { Update } from "./component/Update"

export const App = () => {
  return (
    <div>
      <Provider store={OperationStore}>
        <Update/>
<Display/>
      </Provider>
    </div>
  )
}

export default App
