import { Priority } from "../../state/api"
import PriorityPage from "./Priority"

const Urgent = () => {
    return(
        <PriorityPage priority = {Priority.Urgent} />
    )
}
export default Urgent;