import { BlogPostPreview } from "deco-sites/std/commerce/butterCMS/types.ts";
import type { JSX } from "preact";
import PostItem from "../PostItem.tsx";
import { tw } from "twind";

export interface Props {
  posts: BlogPostPreview[];
}

function FeaturedPosts({ posts }: Props) {
  const [left, center, right] = posts.reduce<
    [JSX.Element[], JSX.Element[], JSX.Element[]]
  >(
    (initial, post, index) => {
      if (index < 2) {
        return [
          [...initial[0], <PostItem post={post} />],
          initial[1],
          initial[2],
        ];
      }

      if (index > 2) {
        return [initial[0], initial[1], [
          ...initial[2],
          <PostItem post={post} />,
        ]];
      }

      return [
        initial[0],
        [<PostItem post={post} withSummary hideMobileSummary size="large" />],
        initial[2],
      ];
    },
    [[], [], []],
  );

  const sideClasses =
    tw`flex flex-row w-auto min-w-max gap-6 flex-nowrap lg:(w-full min-w-[24%] flex-col gap-4)`;

  return (
    <section class="flex gap-x-6 flex-nowrap w-full overflow-auto pb-4">
      <div class={sideClasses}>{left}</div>
      <div class="flex min-w-max lg:(flex-1 min-w-[45%])">{center}</div>
      <div class={sideClasses}>{right}</div>
    </section>
  );
}

export default FeaturedPosts;
