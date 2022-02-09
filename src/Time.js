import Clock from 'react-live-clock';

function Time(){
    return(
        <>
        <Clock format={'hh:mm'} ticking={true} id="time"/>
        </>
    )
}

export default Time;