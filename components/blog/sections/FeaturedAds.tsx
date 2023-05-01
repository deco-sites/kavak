import { BlogPostPreview } from "deco-sites/std/commerce/butterCMS/types.ts";
import type { JSX } from "preact";
import AdCard from "../post-card/AdCard.tsx";

export interface Props {
  posts: BlogPostPreview[];
}

function FeaturedAds({ posts }: Props) {
  return (
    <section class="md:(flex-row overflow-auto) flex flex-col overflow-visible gap-5 flex-nowrap w-full pb-4">
      {posts.map<JSX.Element>(
        (post, index) => (
          <AdCard
            key={index}
            post={post}
            size="small"
          />
        ),
      )}
    </section>
  );
}

export default FeaturedAds;
