import type { Image as LiveImage } from "$live/std/ui/types/Image.ts";

import QuillText from "$start/sections/QuillText.tsx";
import type { HTML } from "$live/std/ui/types/HTML.ts";

import LinkButton from "../components/LinkButton.tsx";

export interface Props {
  title: string;
  text: HTML;
  button: { text: string; link: string };
  image: LiveImage;
}

export default function OurServices({ title, text, button, image }: Props) {
  return (
    <div class="bg-secondary flex mx-6 py-32 rounded-[32px]">
      <div class="max-w-[1140px] flex m-auto">
        <div class="w-full max-w-[470px]">
          <span class="text-gray-dark font-semibold text-[12px] tracking-[1px]">
            Nossos serviços
          </span>
          <h2 class="font-bold text-[42px] leading-[100%] mt-4">{title}</h2>
          <div class="mt-4">
            <QuillText html={text} />
          </div>
          <LinkButton text={button.text} link={button.link} mode="black" />
        </div>
        <div class="flex gap-6 flex-wrap justify-end relative">
          <img class="ml-12" src={image} alt="" />
        </div>
      </div>
    </div>
  );
}
