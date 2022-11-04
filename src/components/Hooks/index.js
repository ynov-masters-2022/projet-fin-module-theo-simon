const {Component} = require("react");
import {useDocumentTitle} from "../../utils/functions"

class Hooks extends Component {

  render() {
    useDocumentTitle("Section HOOKS")
  }
}

export default Hooks
