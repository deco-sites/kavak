import type { LoaderReturnType } from "$live/types.ts";
import type { Category } from "deco-sites/std/commerce/butterCMS/types.ts";

export interface Props {
  categories: LoaderReturnType<Category[] | null>;
}

function BlogCategories(props: Props) {
  return (
    <div>
      test
    </div>
  );
}

export default BlogCategories;
