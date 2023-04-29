import type { LoaderReturnType } from "$live/types.ts";
import type { BlogSectionPlaces } from "deco-sites/std/commerce/butterCMS/types.ts";

export interface Props {
  test?: boolean;
}

function PostItem(props: Props) {
  return (
    <div>
      PostItem
    </div>
  );
}

export default PostItem;
