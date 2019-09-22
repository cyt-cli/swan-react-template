import React from 'react';
import avatar from '../images/avatar.jpeg';

interface IProps {
    num: number
}
let initState = { count: 0 };
type State = Readonly<typeof initState>;
class Avatar extends React.Component<IProps, State>{
    state: State = initState;
    handleClick = () => {
        this.setState({count: this.state.count + 1});
    }
    render() {
        return (
            <>
                <img className="avatar" src={avatar} onClick={this.handleClick}/>
                <div className="tip">{this.state.count}</div>
            </>
        )
    }
}

export default Avatar;