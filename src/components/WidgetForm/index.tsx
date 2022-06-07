import { useState } from "react";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep.tsx";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";

export const feedbackTypes = {
  BUG: {
    title: "Problema",
    image: {
      url: "assets/bug.png",
      alt: "Bug",
    },
  },
  IDEA: {
    title: "Ideia",
    image: {
      url: "assets/idea.png",
      alt: "Idea",
    },
  },
  OTHER: {
    title: "Other",
    image: {
      url: "assets/thought.png",
      alt: "Other",
    },
  },
};

export type FeedBackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackSelected, setFeedbackSelected] = useState<FeedBackType | null>(
    null
  );
  const [feedBackStatus, setFeedBackStatus] = useState(false);

  function handleRestartFeedBack() {
    setFeedBackStatus(false);
    setFeedbackSelected(null);
  }
  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {feedBackStatus ? (
        <FeedbackSuccessStep handleRestartFeedBack={handleRestartFeedBack} />
      ) : (
        <>
          {!feedbackSelected ? (
            <FeedbackTypeStep onFeedBackType={setFeedbackSelected} />
          ) : (
            <FeedbackContentStep
              type={feedbackSelected}
              restartFeedback={handleRestartFeedBack}
              onFeedBackSent={() => setFeedBackStatus(true)}
            />
          )}
        </>
      )}
      <footer className="text-xs text-neutral-400">
        Feito com ❤️ pela{" "}
        <a href="" className="underline underline-offset-2">
          Livia
        </a>
      </footer>
    </div>
  );
}
