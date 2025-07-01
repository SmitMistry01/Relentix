import { Priority } from "../../state/api"
import PriorityPage from "./Priority"

const High = () => {
    return(
        <PriorityPage priority = {Priority.Low} />
    )
}
export default High;