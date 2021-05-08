import React from 'react';
import Home from './Home';
import Music from './Music';
import Games from './Games';
import Settings from './Settings';

class Screen extends React.Component{
    render(){
        return(
            <div style={styles.screen} id='screen-container'>
                {this.props.activePage==='Home'?<Home activeItem = {this.props.activeItem}/> : null}
                {this.props.activePage==='Music'?<Music activeItem={this.props.activeItem}/> : null}
                {this.props.activePage==='Games'?<Games /> : null}
                {this.props.activePage==='Settings'?<Settings /> : null}
            </div>
        )
    }
}
const styles = {
    screen : {
        height : '50%',
        width : '95%',
        borderRadius : '12px',
        backgroundColor : 'white',
        border : '2px solid black',
        marginTop : '1rem'
    }
}
export default Screen;