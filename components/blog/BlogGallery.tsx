import type { LoaderReturnType } from "$live/types.ts";
import type { BlogPostList } from "deco-sites/std/commerce/butterCMS/types.ts";

export interface Props {
  list: LoaderReturnType<BlogPostList>;
}

function BlogGallery(props: Props) {
  console.log(props);
  return (
    <div>
      BlogGallery
    </div>
  );
}

export default BlogGallery;
