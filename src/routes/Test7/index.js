import useRenderLog from "../../hooks/useRenderLog";
import { Test7ContextProvider } from "./context";
import Input from "./Input";
import Table from "./Table";


const Test7 = () => {
  useRenderLog('Test7', 1);

  return(
    <>
      <ul>
        <li>Please filter the table by name search (after press enter or click search button)</li>
        <li>No rerender allowed in <code>Test7</code> component</li>
      </ul>
      <Test7ContextProvider>
        <Input/>
        <div>
          <Table/>
        </div>
      </Test7ContextProvider>
    </>
  )
}

export default Test7;