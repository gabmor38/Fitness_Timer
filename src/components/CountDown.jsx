import { CountdownCircleTimer } from 'react-countdown-circle-timer'


const Countdown = (props) => {


    return (
        <>
        <div style={{margin: '20px'}}>
            <CountdownCircleTimer
            isPlaying
            duration={props.totalTime}
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