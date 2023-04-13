import Button from "deco-sites/kavak/components/Button.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
  title: string;
  store: Array<{
    image: LiveImage;
    name: string;
    address: string;
    action: string;
    href: string;
  }>;
  action: {
    label: string;
    href: string;
  };
}

export default function StoreCards(props: Props) {
  const { title, store, action } = props;

  return (
    <div class="flex flex-col items-center justify-center bg-primary-light text-primary-dark p-8 gap-12">
      <h1 class="text-3xl font-title">{title}</h1>

      <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12">
        {store.map((store) => (
          <li class="w-full md:max-w-[300px] overflow-hidden rounded-lg shadow-lg">
            <a href={store.href} title={store.name} class="flex flex-col gap-2">
              <img
                width={300}
                height={168}
                alt={store.name}
                src={store.image}
                class="object-cover w-full md:w-[300px] h-[168px] block"
              />

              <div class="p-4 flex flex-col gap-4">
                <span class="text-xl font-semibold">{store.name}</span>
                <span class="text-gray-500">{store.address}</span>

                <div class="flex justify-end md:flex-col md:flex-1">
                  <Button href={store.href} type="tertiary">
                    {store.action}
                  </Button>
                </div>
              </div>
            </a>
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
