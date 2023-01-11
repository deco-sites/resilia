import QuillText from "$live/std/ui/components/QuillText.tsx";
import type { HTML } from "$live/std/ui/types/HTML.ts";
import LinkButton from "../components/LinkButton.tsx";

export interface Props {
  title: string;
  text: HTML;
  button: { text: string; link: string };
  block: { title: string; text: string }[];
}

export default function PartnersSections(
  { title, button, text, block }: Props,
) {
  return (
    <div>
      <div class="bg-secondary flex mx-6 md:py-32 pt-14 pb-36 rounded-[32px]">
        <div class="max-w-[1140px] flex flex-col md:flex-row m-auto px-[15px]">
          <div class="relative w-full max-w-[470px]">
            <span class="hidden md:block text-gray-dark font-semibold text-[12px] tracking-[1px]">
              FORMAÇÕES RESILIA
            </span>
            <h2 class="text-gray-dark md:text-primary font-semibold text-[10px] tracking-[1px] md:font-bold md:text-[42px] md:leading-[100%] mt-4">
              {title}
            </h2>
            <div class="mt-4">
              <QuillText html={text} />
            </div>
            <div class="hidden md:block">
              <LinkButton text={button.text} link={button.link} mode="black" />
            </div>
          </div>
          <div class="flex gap-6 flex-wrap justify-end relative mt-6 md:mt-0">
            <div class="hidden md:block bg-white w-[402px] h-[402px] absolute rounded-1/2 right-16 top-14">
            </div>
            {block.map((block, idx) => {
              return (
                <div
                  class={`bg-primary text-white w-full md:w-[260px] h-[260px] rounded-2xl p-6 z-10 ${
                    idx == 0 || idx == 2 ? "md:mt-[-60px]" : ""
                  }`}
                >
                  <img class="mb-2.5" src="/Code.png" alt="" />
                  <h3 class="font-bold text-[20px]">{block.title}</h3>
                  <p class="text-[15px] mt-2">{block.text}</p>
                </div>
              );
            })}
            <div class="w-full block md:hidden">
              <LinkButton text={button.text} link={button.link} mode="black" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
