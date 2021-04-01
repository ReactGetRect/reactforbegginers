import { connect } from 'react-redux';
import Friends from './friends';

let mapStateToProps = (state) => {
    return {
        namesData: state.sideBar.namesData,
    }
}

const FriendsContainer = connect(mapStateToProps)(Friends)

export default FriendsContainer;