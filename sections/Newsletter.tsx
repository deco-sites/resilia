export interface Props {
  title: string;
  text: string;
  textButton: string;
}

export default function Newsletter({ title, text, textButton }: Props) {
  return (
    <div class="bg-primary-light mx-6 my-6 py-[72px] rounded-[24px]">
      <div class="flex-col md:flex md:flex-row w-full max-w-[1140px] m-auto justify-between">
        <div>
          <h2 class="text-[24px] text-center md:text-left md:text-[36px] text-white font-bold">
            {title}
          </h2>
          <p class="text-[16px] text-center md:text-left text-white opacity-80 max-w-[301px] m-auto md:max-w-[370px] mb-[30px] md:mb-0">
            {text}
          </p>
        </div>
        <div class="flex items-center justify-around bg-white rounded-[16px] p-4 h-[82px] w-[90%] md:w-1/2 m-auto relative mb-[100px] md:mb-0">
          <input type="text" placeholder="Seu e-mail" />
          <button class="bg-secondary absolute md:static top-[100px] p-[14px] rounded-[8px] max-w-[85%] md:max-w-[155px] w-full">
            {textButton}
          </button>
        </div>
      </div>
    </div>
  );
}
