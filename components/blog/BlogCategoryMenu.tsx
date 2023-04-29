import type { LoaderReturnType } from "$live/types.ts";
import type { Category } from "deco-sites/std/commerce/butterCMS/types.ts";

export interface Props {
  categories: LoaderReturnType<Category[]>;
}

function BlogCategoryMenu(props: Props) {
  console.log(props);
  return (
    <div>
      BlogCategoryMenu
    </div>
  );
}

export default BlogCategoryMenu;
