import React from 'react';

class Ipod extends React.Component{
    render() {
        return (
            <div style = {styles.ipodContainer}>
                <audio className = "audio-element">
                    <source></source>
                </audio>
                <div id="inner-container" style={styles.wheel}>
                    <div style={styles.buttonContainer}>
                        <div style={styles.menuButton}>

                        </div>
                    </div>
                    <div style ={styles.buttonContainer}>
                        <div style={styles.middleButtons}>

                        </div>
                    </div>
                    <div style={styles.buttonContainer}>
                        <div style={styles.playButton}>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const styles = {
    ipodContainer : {
        height : '33rem',
        width : '20rem',
        backgroundImage: 'radial-gradient(#adb1b5, #4d4f50)',
        margin : '4rem auto',
        display : 'flex',
        flexDirection : 'row',
        flexWrap : 'wrap',
        justifyContent : 'center',
        borderRadius : '24px'
    },
    wheel : {
        width : '75%',
        height : '40%',
        margin : '1rem auto',
        backgroundColor : '#4b4e52',
        borderRadius : '50%',
        display : 'flex',
        flexDirection : 'row',
        flexWrap : 'wrap',
        justifyContent : 'center'
    },
    buttonContainer : {
        width : '85%',
        height : '30%',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'center'
    },
    menuButton : {
        alignSelf:'center'
    },
    playButton : {
        alignSelf:'center'
    },
    middleButtons : {
        alignSelf:'center',
        width : '100%',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-between'
    },
    image: {
        alignSelf : 'center',
        fontSize: '1.5rem',
        color : 'white'
    },
}
export default Ipod;