import html2canvas from "html2canvas";
import { Camera, Trash } from "phosphor-react";
import { useState } from "react";
import { Loading } from "../../Loading";

interface ScreenshotButtonProps {
  setPicture: (image: string | null) => void;
  picture: string | null;
}

export function ScreenshotButton({
  setPicture,
  picture,
}: ScreenshotButtonProps) {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);

  async function handleTakePicture() {
    setIsTakingScreenshot(true);
    const canvas = await html2canvas(document.querySelector("html")!);
    const base64Image = canvas.toDataURL("image/png");
    setPicture(base64Image);
    setIsTakingScreenshot(false);
  }

  if (picture) {
    return (
      <button
        className="p-1 w-10 h-10 rounded-md  border-transparent flex justify-end items-end  text-zinc-400 hover:bg-slate-400 dark:hover:text-zinc-100 transition-colors"
        type="button"
        onClick={() => setPicture(null)}
        style={{
          backgroundImage: `url(${picture})`,
          backgroundPosition: "right bottom",
          backgroundSize: 180,
        }}
      >
        <Trash weight="fill" />
      </button>
    );
  }
  return (
    <button
      type="button"
      className="p-2 bg-zinc-500 text-white dark:text-zinc-600 dark:bg-zinc-800 rounded-md border-transparent hover:bg-slate-400 dark:hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2  focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
      onClick={handleTakePicture}
    >
      {isTakingScreenshot ? <Loading /> : <Camera className="w-6 h-6 " />}
    </button>
  );
}
