import type { LoaderReturnType } from "$live/types.ts";
import type { BlogPost } from "deco-sites/std/commerce/butterCMS/types.ts";

export interface Props {
  post: LoaderReturnType<BlogPost>;
}

function BlogPostDetail(props: Props) {
  return (
    <div>
      BlogPostDetail
    </div>
  );
}

export default BlogPostDetail;
