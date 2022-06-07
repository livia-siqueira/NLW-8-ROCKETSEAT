import { FeedBackType, feedbackTypes } from "../..";
import { CloseButton } from "../../../CloseButton";

interface IPropsFeedbackTypeStep {
  onFeedBackType(key: FeedBackType): void;
}

export function FeedbackTypeStep({ onFeedBackType }: IPropsFeedbackTypeStep) {
  return (
    <>
      <header>
        <span className="text-xl leading-4">Deixe seu feedback</span>
        <CloseButton />
      </header>
      <div className="flex py-8 gap-2 w-full">
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <button
              key={key}
              className="bg-white font-bold text-bg-zinc-200 dark:bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center  gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 outline-none"
              onClick={() => onFeedBackType(key as FeedBackType)}
            >
              <span>{value.title}</span>
              <img src={value.image.url} alt={value.image.alt} />
            </button>
          );
        })}
      </div>
    </>
  );
}
