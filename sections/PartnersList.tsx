import Slider from "../islands/Slider.tsx";
import { useId } from "preact/hooks";

import QuillText from "$start/sections/QuillText.tsx";
import type { HTML } from "$live/std/ui/types/HTML.ts";

import Image from "$live/std/ui/components/Image.tsx";
import type { Image as LiveImage } from "$live/std/ui/types/Image.ts";

export interface Props {
  title: HTML;
  company: { image: LiveImage; altImage: string }[];
  button: { text: string; link: string };
}

export default function PartnersList({ title, company, button }: Props) {
  const id = useId();
  return (
    <div>
      <div class="mx-[130px] bg-white shadow rounded-[24px] py-14 mt-[-100px]">
        <div class="mb-6 text-[20px]">
          <QuillText html={title} />
        </div>
        <div
          id={id}
          class="max-w-[1140px] m-auto px-4 relative w-full overflow-hidden"
        >
          <div
            class={`flex justify-between transition w-[${
              company.length * 20
            }%]`}
            data-slider-content
          >
            {company.map((company, idx) => {
              return (
                <div
                  id={`${id}-${idx}`}
                  class="w-[200px] flex justify-center h-10"
                >
                  <img src={company.image} alt={company.image} />
                </div>
              );
            })}
          </div>
        </div>
        <Slider id={id} items={company.length} delay={2 * 1000} />
        <div class="flex justify-center">
          <a
            href={button.link}
            class="block py-[21px] rounded-[8px] border-secondary border-1 w-full max-w-[270px] bg-secondary text-center hover:bg-white hover:text-secondary duration-500 mt-8 font-semibold"
          >
            {button.text}
          </a>
        </div>
      </div>
    </div>
  );
}
