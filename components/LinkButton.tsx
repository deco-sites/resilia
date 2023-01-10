interface LinkButton {
  text: string;
  link: string;
  mode: "yellow" | "black";
}

export default function LinkButton({ text, link, mode }: LinkButton) {
  return (
    <a
      href={link}
      class={`${
        mode == "yellow"
          ? "block py-[21px] rounded-[8px] text-primary border-secondary border-1 w-full max-w-[270px] bg-secondary text-center hover:bg-white hover:text-secondary duration-500 mt-8 font-semibold"
          : "block border-primary border-1 bg-primary text-white font-bold text-center mt-8 w-[270px] py-[21px] rounded-[8px] hover:bg-secondary hover:text-primary font-medium duration-500"
      }`}
    >
      {text}
    </a>
  );
}
