import { Category } from "deco-sites/std/commerce/butterCMS/types.ts";

export interface Props {
  title: string;
  category: Category;
}

function Slash() {
  return <span aria-hidden="true" class="mx-1">/</span>;
}

export function BlogBreadcrumb({ category, title }: Props) {
  return (
    <ul class="flex uppercase text-xs font-bold tracking-wider leading-3">
      <li class="hidden lg:block text-primary">
        <a href="/blog">Blog</a>
      </li>
      <li class="text-base-lighter">
        <Slash />
        {/* Need to handle URL correctly using locales */}
        <a href={`/blog/categorias/${category.slug}`}>{category.name}</a>
      </li>
      <li class="hidden lg:block font-normal text-base-lighter">
        <Slash />
        <span>{title}</span>
      </li>
    </ul>
  );
}
