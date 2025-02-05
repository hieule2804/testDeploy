import React from "react";

const MediaPage = () => {
  const videoUrl = "https://drive.google.com/file/d/1tauYKPcqG40xkqvErOWLxzNm5ViCUHAh/view?usp=drive_link";
  const audioUrl = "https://drive.google.com/file/d/1-I4fp4VWPqW150n1UuY80NpWIBEDDtg3/view?usp=drive_link";

  return (
    <div>
      <h1>Watch and Listen</h1>
      
      {/* Nhúng Video từ Google Drive */}
      <video width="600" controls>
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <br /><br />

      {/* Nhúng Âm thanh từ Google Drive */}
      <audio controls>
        <source src={audioUrl} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default MediaPage;
