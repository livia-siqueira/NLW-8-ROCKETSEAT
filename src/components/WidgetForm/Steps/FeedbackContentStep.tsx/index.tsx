import { ArrowLeft } from "phosphor-react";
import { FormEvent, useState } from "react";
import { FeedBackType, feedbackTypes } from "../..";
import { api } from "../../../../lib/api";
import { CloseButton } from "../../../CloseButton";
import { Loading } from "../../../Loading";
import { ScreenshotButton } from "../../ScreenshotButton";

interface IPropsFeedbackContentStep {
  type: FeedBackType;
  restartFeedback(): void;
  onFeedBackSent: (status: boolean) => void;
}
export function FeedbackContentStep({
  type,
  restartFeedback,
  onFeedBackSent,
}: IPropsFeedbackContentStep) {
  const feedBackTypeInfo = feedbackTypes[type];
  const [picture, setPicture] = useState<string | null>(null);
  const [comment, setComment] = useState("");
  const [isSendingFeedBack, setIsSendingFeedBack] = useState(false);

  async function handleSubmitFeedBack(event: FormEvent) {
    event.preventDefault();

    setIsSendingFeedBack(true);
    await api.post("/feedbacks", {
      type,
      comment,
      screenshot: picture,
    });
    setIsSendingFeedBack(false);
    onFeedBackSent(true);
  }

  return (
    <>
      <header>
        <button
          type="button"
          className="absolute left-5 top-5 text-zinc-400 hover:text-zinc-100"
          onClick={restartFeedback}
        >
          <ArrowLeft className="w-4 h-4" weight="bold" />
        </button>
        <span className="text-xl leading-4 flex items-center gap-2">
          <img
            src={feedBackTypeInfo.image.url}
            alt={feedBackTypeInfo.image.alt}
            className="w-6  h-6"
          />
          {feedBackTypeInfo.title}
        </span>
        <CloseButton />
      </header>

      <form className="my-4 w-full" onSubmit={handleSubmitFeedBack}>
        <textarea
          placeholder="Conte com detalhes o que está acontecendo"
          className="min-w-[304px] w-full h-min-[112px] text-sm focus:outline-none placeholder-zinc-900 text-zinc-900 dark:placeholder-zinc-400 dark:text-zinc-100 border-zinc-600 bg-transparent rounded-md   scrollbar-zinc-700  scrollbar-track-transparent scrollbar-thin focus:border-brand-500 focus:ring-brand-500 focus:ring-1 resize-none"
          onChange={(event) => setComment(event.target.value)}
        />
        <footer className="flex gap-2 mt-2">
          <ScreenshotButton setPicture={setPicture} picture={picture} />
          <button
            type="submit"
            disabled={comment.length === 0 || isSendingFeedBack}
            className="bg-zinc-500 dark:bg-brand-300 text-white dark:text-zinc-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed  rounded-md border-transparent flex-1 justify-center items-center text-sm hover:bg-slate-400 dark:hover:bg-brand-500 focus:outline-none focus:ring-2  focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
          >
            {isSendingFeedBack ? <Loading /> : "Enviar FeedBack"}
          </button>
        </footer>
      </form>
    </>
  );
}
