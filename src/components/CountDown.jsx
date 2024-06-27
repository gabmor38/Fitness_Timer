import { CountdownCircleTimer } from 'react-countdown-circle-timer'


const Countdown = (props) => {

    //const numberOfRounds = props.roundTime;


    return (
        <>
        <div style={{margin: '20px'}}>
            <CountdownCircleTimer
            isPlaying
            duration={1}
            colors={['#004777', '#F7B801', '#A30000', '#A30000']}
            colorsTime={[7, 5, 2, 0]}
            >
            {({ remainingTime }) => remainingTime}
            </CountdownCircleTimer>
        </div>
        </>
    )
    
}

  export default Countdown;