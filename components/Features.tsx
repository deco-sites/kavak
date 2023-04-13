import Button from "deco-sites/kavak/components/Button.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
  title: string;
  cards: Array<{
    image: LiveImage;
    title: string;
    description: string;
  }>;
  action: {
    label: string;
    href: string;
  };
}

export default function Features(props: Props) {
  const { title, cards, action } = props;

  return (
    <div class="flex flex-col items-center justify-center bg-primary-light text-primary-dark p-8 gap-12">
      <h1 class="text-3xl font-title">{title}</h1>

      <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12">
        {cards.map((card) => (
          <li class="w-full md:max-w-[350px] overflow-hidden rounded-lg shadow-lg">
            <div class="flex flex-col gap-2 h-full">
              <img
                width={300}
                height={235}
                alt={card.title}
                src={card.image}
                class="object-cover w-full md:w-[350px] h-[235px] block"
              />

              <div class="p-4 flex flex-col gap-4 h-full">
                <span class="text-2xl font-semibold">{card.title}</span>
                <span class="text-lg mt-auto">{card.description}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div>
        <Button type="primary" href={action.href}>
          {action.label}
        </Button>
      </div>
    </div>
  );
}
