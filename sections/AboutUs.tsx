import Image from "$live/std/ui/components/Image.tsx";
import type { Image as LiveImage } from "$live/std/ui/types/Image.ts";

import QuillText from "$live/std/ui/components/QuillText.tsx";
import type { HTML } from "$live/std/ui/types/HTML.ts";
import LinkButton from "../components/LinkButton.tsx";

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
    <div class="flex flex-col md:flex-row gap-4 max-w-[1140px] m-auto pb-44 px-[15px]">
      <div class="w-full max-w-[470px]">
        <span class="block text-gray font-semibold text-[10px] md:text-[12px] tracking-[1px] mb-4 md:mb-0">
          QUEM SOMOS
        </span>
        <h2 class="font-bold text-[32px] md:text-[42px] leading-[100%]">
          {title}
        </h2>
        <div class="mt-6 children:children:leading-[145%]">
          <QuillText html={text} />
        </div>
        <div class="hidden md:block">
          <LinkButton text={button.text} link={button.link} mode="yellow" />
        </div>
      </div>
      <div class="relative w-full">
        <img src={image} class="ml-auto" alt="" />
        <div class="flex flex-col items-center absolute bg-white rounded-2xl py-8 px-6 shadow bottom-0 hidden md:block">
          <img src={feedback.image} alt="" class="w-10 rounded-1/2" />
          <p class="max-w-[295px] w-full mt-3 text-[13px] text-primary-light text-center">
            {feedback.text}
          </p>
          <p class="font-medium text-center mt-3 text-[12px] text-primary-light">
            {feedback.name}
          </p>
        </div>
        <div class="block md:hidden">
          <LinkButton text={button.text} link={button.link} mode="yellow" />
        </div>
      </div>
    </div>
  );
}
