import Slider from "../islands/Slider.tsx";
import { useId } from "preact/hooks";

import Image from "$live/std/ui/components/Image.tsx";
import type { Image as LiveImage } from "$live/std/ui/types/Image.ts";

export interface Props {
  title: string;
  subTitle: string;
  feedback: {
    image: LiveImage;
    text: string;
    name: string;
    role: string;
  }[];
}

export default function Feedback({ title, subTitle, feedback }: Props) {
  let id = useId();
  id += "feedback";
  return (
    <div class="mt-28 mb-28 relative pb-14">
      <h2 class="font-bold text-4xl text-center">{title}</h2>
      <p class="text-primary-light text-center">{subTitle}</p>
      <div
        id={id}
        class="max-w-[1140px] m-auto px-4 relative w-full overflow-hidden p-5 pb-16"
      >
        <div
          class={`flex justify-between transition w-[${
            feedback.length * 370
          }px]`}
          data-slider-content
        >
          {feedback.map((feedback, idx) => {
            return (
              <div
                id={`${id}-${idx}`}
                class="w-[33%] shadow-light rounded-[32px] mx-5 p-8"
              >
                <img src={feedback.image} alt="" class="w-16 rounded-1/2" />
                <p class="font-light">{feedback.text}</p>
                <h4 class="font-semibold">{feedback.name}</h4>
                <p>{feedback.role}</p>
              </div>
            );
          })}
        </div>
        <div class="absolute z-30 flex -translate-x-1/2 bottom-0 left-1/2">
          {feedback.map((_, index) => (
            <button
              data-dot
              aria-label={`Focus slide carousel ${index}`}
              class={`p-4 focus:children:bg-secondary`}
            >
              <div class="w-4 h-4 rounded-full bg-gray dark:bg-gray-800" />
            </button>
          ))}
        </div>
      </div>

      <Slider
        id={id}
        items={feedback.length}
        delay={2 * 1000}
        autoTransition={false}
      />
    </div>
  );
}
