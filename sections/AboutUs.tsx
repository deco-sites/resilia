import Image from "$live/std/ui/components/Image.tsx";
import type { Image as LiveImage } from "$live/std/ui/types/Image.ts";

import QuillText from "$start/sections/QuillText.tsx";
import type { HTML } from "$live/std/ui/types/HTML.ts";

export interface Props {
  image: LiveImage;
  title: string;
  text: HTML;
  button: { link: string; text: string };
  feedback: { image: LiveImage; text: string; name: string };
}

export default function AboutUs(
  { image, title, text, button, feedback }: Props,
) {
  return (
    <div class="flex gap-4 max-w-[1140px] m-auto pb-44">
      <div class="w-full max-w-[470px]">
        <span class="text-gray font-semibold text-[12px] tracking-[1px]">
          QUEM SOMOS
        </span>
        <h2 class="font-bold text-[42px] leading-[100%]">{title}</h2>
        <div class="mt-6">
          <QuillText html={text} />
        </div>
        <a
          href={button.link}
          class="block py-[21px] rounded-[8px] border-secondary border-1 w-full max-w-[270px] bg-secondary text-center hover:bg-white hover:text-secondary duration-500 mt-8"
        >
          {button.text}
        </a>
      </div>
      <div class="relative w-full">
        <img src={image} class="ml-auto" alt="" />
        <div class="flex flex-col items-center absolute bg-white rounded-2xl py-8 px-6 shadow bottom-0">
          <img src={feedback.image} alt="" class="w-10 rounded-1/2" />
          <p class="max-w-[295px] w-full mt-3 text-[13px] text-primary-light text-center">
            {feedback.text}
          </p>
          <p class="font-medium text-center mt-3 text-[12px] text-primary-light">
            {feedback.name}
          </p>
        </div>
      </div>
    </div>
  );
}
