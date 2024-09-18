import "./Video.css";

function Video({
  videoID,
  autoplay,
  color,
  controls,
  start,
  end,
  loop,
  thumbnaill,
}) {
  const autoplayParam = autoplay ? "1" : "0";
  const videoSrc = `https://www.youtube.com/embed/${videoID}?autoplay=${autoplayParam}&color=${color}&controls=${controls}&start=${start}&end=${end}&playlist=${videoID}&loop=${loop}`;
  return (
    <div className="flex-container">
      {!thumbnaill && videoID && (
        <iframe
          src={videoSrc}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          title="TED talk"
        ></iframe>
      )}

      {thumbnaill && videoID && (
        <iframe src={"https://picsum.photos/id/" + thumbnaill + "/500/300"}>
          <img src=""></img>
        </iframe>
      )}
    </div>
  );
}

export default Video;
