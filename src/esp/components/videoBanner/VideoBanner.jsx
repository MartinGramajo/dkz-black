import "./videoBanner.css";
import ReactPlayer from "react-player";

export default function VideoBanner() {
    return (
        <div className="pb-5">
            <div className="tamaño-video">
                <ReactPlayer
                    className=""
                    url={"https://youtu.be/Jdux5Es9gBM"}
                    muted
                    loop
                    playing
                    width="100%"
                    height="100%"
                ></ReactPlayer>
            </div>
        </div>
    );
}
