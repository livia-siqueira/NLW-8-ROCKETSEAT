import { Check } from "phosphor-react";
import { CloseButton } from "../../../CloseButton";

interface FeedBackStepSuccess {
  handleRestartFeedBack(): void;
}

export function FeedbackSuccessStep({
  handleRestartFeedBack,
}: FeedBackStepSuccess) {
  return (
    <>
      <header>
        <CloseButton />
        <div className="flex flex-col items-center py-10 w-[304px] ">
          <Check className="w-6 h-6 text-green-400" />
          <span className="text-xl mt-2">Agradecemos o seu feedback</span>

          <button
            onClick={handleRestartFeedBack}
            className="py-2 px-6 mt-6 border-transparent bg-zinc-800 text-sm leading-6 rounded-md hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2  focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
          >
            Quero enviar outro feedback
          </button>
        </div>
      </header>
    </>
  );
}
