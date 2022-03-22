import posts from './posts.js'
import SummaryItem from "./SummaryItem.js";

const PostSummaryList = () => {
    return(`
            <ul class="list-group">
                ${posts.map(item => SummaryItem(item)).join('\n')}
            </ul>
`)
}

export default PostSummaryList;