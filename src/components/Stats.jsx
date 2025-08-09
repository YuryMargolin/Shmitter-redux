import Avatar from "./Avatar.jsx";
import {useDispatch, useSelector} from "react-redux";
import {changeFollowers, changeFollowing} from "../actions/userAction.js";

const Stats = () => {
    let {followers, following} = useSelector(state => state.stats);
    const {name} = useSelector(state => state.user);
    const dispatch = useDispatch();

    return (
        <div className={'user-stats'}>
            <div>
                <Avatar/>
                {name}
            </div>
            <div className={'stats'}>
                <div onClick={() => {dispatch(changeFollowers(followers + 1))}}
                     onContextMenu={(event) => {
                         event.preventDefault();
                         if (followers<=0) return;
                         dispatch(changeFollowers(followers - 1));
                     }}>
                    Followers: {followers}
                </div>
                <div onClick={() => {dispatch(changeFollowing(following + 1))}}
                     onContextMenu={(event) => {
                         event.preventDefault();
                         if (following<=0) return;
                         dispatch(changeFollowing(following - 1));
                     }}>
                     Following: {following}
                </div>
            </div>
        </div>
    );
};

export default Stats;