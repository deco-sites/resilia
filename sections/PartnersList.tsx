import Slider from "../islands/Slider.tsx";
import { useId } from "preact/hooks";

import QuillText from "$live/std/ui/components/QuillText.tsx";
import type { HTML } from "$live/std/ui/types/HTML.ts";

import Image from "$live/std/ui/components/Image.tsx";
import type { Image as LiveImage } from "$live/std/ui/types/Image.ts";
import LinkButton from "../components/LinkButton.tsx";

export interface Props {
  title: HTML;
  company: { image: LiveImage; altImage: string }[];
  button: { text: string; link: string };
}

export default function PartnersList({ title, company, button }: Props) {
  const id = useId();
  return (
    <div>
      <div class="mx-8 md:mx-6 md:mx-[130px] bg-white shadow rounded-[24px] py-14 mt-[-100px]">
        <div class="mb-6 text-[18px] md:text-[20px]">
          <QuillText html={title} />
        </div>
        <div
          id={id}
          class=" max-w-[1140px] m-auto px-4 relative w-full overflow-hidden"
        >
          <div
            class={`flex justify-between transition w-[${
              company.length * 100
            }%] md:w-[${company.length * 20}%]`}
            data-slider-content
          >
            {company.map((company, idx) => {
              return (
                <div
                  id={`${id}-${idx}`}
                  class="w-[100%] md:w-[20%] flex justify-center h-10"
                >
                  <img src={company.image} alt={company.image} />
                </div>
              );
            })}
          </div>
        </div>
        <Slider
          id={id}
          items={company.length}
          itemsPerPageDesktop={5}
          itemsPerPageMobile={1}
          delay={2 * 1000}
          autoTransition={true}
        />

        <div class="flex justify-center max-w-[270px] m-auto">
          <LinkButton text={button.text} link={button.link} mode="yellow" />
        </div>
      </div>
    </div>
  );
}
