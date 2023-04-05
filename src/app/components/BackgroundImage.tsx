"use client";

import { ChangeEvent, useState } from "react";

function BackgroundImage() {
  const [imageUrl, setImageUrl] = useState("");
  const [backgroundSize, setBackgroundSize] = useState("cover");
  const [backgroundRepeat, setBackgroundRepeat] = useState("no-repeat");
  const [toggleVisibility, setToggleVisibility] = useState(false);

  function handleBackgroundImage(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      const imageUrl = URL.createObjectURL(file);
      setImageUrl(imageUrl);
    }
  }

  function handleBackgroundSize(event: ChangeEvent<HTMLSelectElement>) {
    const size = event.target.value;
    setBackgroundSize(size);
  }

  function handleBackgroundRepeat(event: ChangeEvent<HTMLSelectElement>) {
    const repeat = event.target.value;
    setBackgroundRepeat(repeat);
  }

  function handleToggleVisibility() {
    setToggleVisibility(!toggleVisibility);
  }

  return (
    <div
      className="background-image-container"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: backgroundSize,
        backgroundRepeat: backgroundRepeat,
      }}
    >
      <button className="fixed bottom-5 right-5 h-20 w-20 rounded-full bg-gray-800 border border-gray-700" onClick={handleToggleVisibility}>⚙️</button>
      {toggleVisibility && (
        <div className="fixed bottom-24 right-24 rounded-lg max-w-sm p-6 bg-gray-800 border border-gray-700">
          <label className="block text-gray-300 mb-2">
            Background Image:
            <input type="file" onChange={handleBackgroundImage} className="mt-1 block w-full rounded-md border-gray-700 bg-gray-900 focus:outline-none focus:border-indigo-500 focus:shadow-outline-indigo sm:text-sm sm:leading-5" />
          </label>
          <label className="block text-gray-300 mb-2">
            Background Size:
            <select value={backgroundSize} onChange={handleBackgroundSize} className="mt-1 block w-full rounded-md border-gray-700 bg-gray-900 focus:outline-none focus:border-indigo-500 focus:shadow-outline-indigo sm:text-sm sm:leading-5">
              <option value="cover">Cover</option>
              <option value="contain">Contain</option>
              <option value="auto">Auto</option>
              <option value="50%">50%</option>
              <option value="100%">100%</option>
            </select>
          </label>
          <label className="block text-gray-300 mb-2">
            Background Repeat:
            <select value={backgroundRepeat} onChange={handleBackgroundRepeat} className="mt-1 block w-full rounded-md border-gray-700 bg-gray-900 focus:outline-none focus:border-indigo-500 focus:shadow-outline-indigo sm:text-sm sm:leading-5">
              <option value="no-repeat">No Repeat</option>
              <option value="repeat">Repeat</option>
            </select>
          </label>
        </div>
      )
      }
      <style jsx>{`
        .background-image-container {
          width: 100%;
          height: 100vh;
          border-radius: 2.5rem;
        }
      `}</style>
    </div>
  );
}

export default BackgroundImage;