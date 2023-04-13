import Button from "deco-sites/kavak/components/Button.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
  title: string;
  post: Array<{
    href: string;
    image: LiveImage;
    overline: string;
    title: string;
  }>;
  action: {
    label: string;
    href: string;
  };
}

export default function BlogPosts(props: Props) {
  const { title, post, action } = props;

  return (
    <div class="flex flex-col items-center justify-center bg-primary text-primary-light p-8 gap-12">
      <h1 class="text-3xl font-title">{title}</h1>

      <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
        {post.map((post) => (
          <li class="w-full md:max-w-[400px]">
            <a href={post.href} title={post.title} class="flex flex-row gap-2">
              <div class="w-[200px] h-[133px] block">
                <img
                  width={200}
                  height={133}
                  src={post.image}
                  alt={post.title}
                  class="object-cover w-[200px] h-[133px] block"
                />
              </div>

              <div class="flex flex-col gap-2 w-[calc(100%-200px)]">
                <span class="uppercase text-sm">{post.overline}</span>
                {post.title}
              </div>
            </a>
          </li>
        ))}
      </ul>

      <div>
        <Button type="secondary" href={action.href}>
          {action.label}
        </Button>
      </div>
    </div>
  );
}
