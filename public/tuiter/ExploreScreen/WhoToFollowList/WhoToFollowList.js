import who from './who.js'
import WhoToFollowListItem from './WhoToFollowListItem.js';

const WhoToFollowList = () => {
    return (`
        <ul class="list-group">
            ${who.map(item => WhoToFollowListItem(item)).join('\n')}
        </ul>
    `);
}
export default WhoToFollowList;