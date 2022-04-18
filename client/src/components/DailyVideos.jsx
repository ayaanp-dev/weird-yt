export default function DailyVideos() {
    return (
        <div className="daily-videos">
            <h1 className="daily-videos"> Daily Video! </h1>
            <iframe 
            className="daily-videos-video"
            width="885"
            height="498" 
            src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
            title="YouTube video player" 
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
             </iframe>
        </div>
    );
}