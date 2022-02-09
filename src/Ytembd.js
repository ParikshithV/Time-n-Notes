import YouTube from "react-youtube";

function ytembd(){

    const opts = {
        // Sizing and other presentation parameters yet to be set
        height: '535',
        width: '950',
        color: 'white',
        playerVars: {
            autoplay: 1
        }
    };

    return(
        <div>
            <YouTube videoId="5qap5aO4i9A" opts={opts} autoplay="1" />
        </div>
    );
}

export default ytembd;