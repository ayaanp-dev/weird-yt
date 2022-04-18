export default function DailyVideos() {
    const videoId = "SfXWyDLvQuQ";

    return (
        <div className="daily-videos">
            <h1 className="daily-videos-h1"> Daily Video! </h1>
            <iframe 
            className="daily-videos-video"
            width="885"
            height="498" 
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player" 
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
             </iframe>
        </div>
    );
}