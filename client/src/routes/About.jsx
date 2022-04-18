import Sign from "../components/Sign";

export default function About() {
    return (
        <>
            <Sign />
            <div className="about">
                <h1 className="about-h1"> Watch Daily Youtube Videos that seem to have out of the ordinary content. </h1>
                <h1 className="about-h1"> Made by <a href="https://github.com/BeenHashed">Hashed</a> and <a href="https://github.com/ayaanp-dev">Ayaan Panda</a> </h1>
                <h1 className="about-h1"> The Project Source Code can be found <a href="https://github.com/ayaanp-dev/weird-yt">Here</a></h1>
            </div>
        </>
    );
}