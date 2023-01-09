import QuillText from "$start/sections/QuillText.tsx";
import type { HTML } from "$live/std/ui/types/HTML.ts";

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
      <div class="bg-secondary flex mx-6 py-32 rounded-[32px]">
        <div class="max-w-[1140px] flex m-auto">
          <div class="w-full max-w-[470px]">
            <span class="text-gray-dark font-semibold text-[12px] tracking-[1px]">
              FORMAÇÕES RESILIA
            </span>
            <h2 class="font-bold text-[42px] leading-[100%] mt-4">{title}</h2>
            <div class="mt-4">
              <QuillText html={text} />
            </div>
            <a
              href={button.link}
              class="block border-primary border-1 bg-primary text-white font-bold text-center mt-8 w-[270px] py-[21px] rounded-[8px] hover:bg-secondary hover:text-primary font-medium duration-500"
            >
              {button.text}
            </a>
          </div>
          <div class="flex gap-6 flex-wrap justify-end relative">
            <div class="bg-white w-[402px] h-[402px] absolute rounded-1/2 right-16 top-14">
            </div>
            {block.map((block, idx) => {
              return (
                <div
                  class={`bg-primary text-white w-[260px] h-[260px] rounded-2xl p-6 z-10 ${
                    idx == 0 || idx == 2 ? "mt-[-60px]" : ""
                  }`}
                >
                  <img class="mb-2.5" src="/Code.png" alt="" />
                  <h3 class="font-bold text-[20px]">{block.title}</h3>
                  <p class="text-[15px] mt-2">{block.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
