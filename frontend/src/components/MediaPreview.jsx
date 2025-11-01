import React from "react";

export default function MediaPreview({ media }) {
  if (!media)
    return (
      <p className="text-gray-500 text-center text-sm md:text-base">
        Upload & detect a video or image to preview.
      </p>
    );

  // ✅ Safe file extension extraction
  const getFileExtension = (url) => {
    try {
      const path = new URL(url, window.location.origin).pathname;
      const parts = path.split(".");
      return parts.length > 1 ? parts.pop().toLowerCase() : "";
    } catch {
      const parts = url.split(".");
      return parts.length > 1 ? parts.pop().toLowerCase() : "";
    }
  };

  const ext = getFileExtension(media);
  const isVideo = ["mp4", "mov", "avi", "mkv", "webm"].includes(ext);

  return (
    <div className="w-full h-full flex justify-center items-center bg-white rounded-2xl shadow-inner overflow-hidden p-2 md:p-4">
      {isVideo ? (
        <video
          key={media}
          src={`${media}?t=${new Date().getTime()}`} // cache-buster
          controls
          autoPlay
          muted
          playsInline
          className="rounded-xl w-full h-full object-contain bg-black"
        />
      ) : (
        <img
          src={media}
          alt="Detected Preview"
          className="rounded-xl w-full h-auto max-h-[80vh] object-contain"
        />
      )}
    </div>
  );
}
