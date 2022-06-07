import { ChatTeardropDots, Circle } from "phosphor-react";
import { Popover } from "@headlessui/react";
import { WidgetForm } from "../WidgetForm";
import { useCallback } from "react";

export function Widget() {
  const themeActive = localStorage.getItem("Theme");
  const handleChangeTheme = useCallback(() => {
    let nextTheme;

    if (themeActive === "dark") {
      nextTheme = "light";
    } else {
      nextTheme = "dark";
    }
    localStorage.setItem("Theme", nextTheme);
    document.documentElement.classList.toggle(themeActive as string);
  }, [themeActive]);

  return (
    <div className={`w-[calc(100vw-2rem)] flex justify-end py-4`}>
      <button
        className="text-black dark:text-zinc-100 flex items-center gap-2 font-bold outline-none"
        onClick={handleChangeTheme}
      >
        Theme
        <Circle
          className={`bg-black dark:bg-white dark:border-none rounded-full outline-none`}
        />
      </button>
      <Popover className="absolute bottom-5 right-4 md:bottom-10 flex flex-col items-end">
        <Popover.Panel>
          <WidgetForm />
        </Popover.Panel>
        <Popover.Button className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group">
          <ChatTeardropDots className="w-6 h-6" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
            <span className="pl-2"></span>
            FeedBack
          </span>
        </Popover.Button>
      </Popover>
    </div>
  );
}
