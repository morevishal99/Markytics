import { legacy_createStore } from "redux";
import reducer from "./Redux/reducer"

const store = legacy_createStore(reducer)
export default store