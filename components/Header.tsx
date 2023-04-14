import { useEffect } from "preact/hooks";
import { useSignal } from "@preact/signals";
import Icon from "deco-sites/kavak/components/Icon.tsx";
import type { AvailableIcons } from "deco-sites/kavak/components/Icon.tsx";

export interface Link {
  href: string;
  label?: string;
  icon?: AvailableIcons;
  children?: { href: string; label: string }[];
}

export interface Props {
  /** @description label or icon must be declared */
  links: Link[];
}

export default function Header(props: Props) {
  const isMenuOpen = useSignal(false);
  const toggleMenu = () => (isMenuOpen.value = !isMenuOpen.value);

  useEffect(() => {
    const scroll = isMenuOpen.value ? "hidden" : "auto";
    document.body.style.overflow = scroll;
  }, [isMenuOpen.value]);

  return (
    <div class="h-[56px] lg:h-[84px] flex justify-center bg-primary-light w-full">
      <div class="w-full max-w-[1320px] flex flex-row items-center justify-between px-4">
        <a href="/" alt="Kavak" title="Kavak" class="hidden lg:block">
          <Icon id="Logo" width={112} height={30} />
        </a>

        <a href="/" alt="Kavak" title="Kavak" class="block lg:hidden">
          <Icon id="Logo" width={76} height={20} />
        </a>

        {/** DESKTOP MENU */}
        <ul class="hidden lg:flex flex-row gap-7">
          {props.links.map((link) => renderLink(link))}
        </ul>

        {/** MOBILE MENU */}
        <Icon
          width={24}
          height={24}
          onClick={toggleMenu}
          id={isMenuOpen.value ? "XMark" : "Bars3"}
          class="block lg:hidden text-primary cursor-pointer"
        />
      </div>

      {isMenuOpen.value && (
        <div class="block lg:hidden h-[calc(100vh-56px)] bg-primary-light w-full fixed z-50 bottom-0">
          <ul class="flex flex-col gap-7 p-4">
            {props.links.map((link) => renderLink(link, true))}
          </ul>
        </div>
      )}
    </div>
  );
}

function renderLink(link: Link, noChildren = false) {
  return (
    <li class="flex flex-row gap-2 items-center group text-[#333] hover:text-primary-dark relative">
      <a href={link.href} class="flex flex-row gap-2 items-center">
        {link.icon && (
          <Icon
            width={20}
            height={20}
            id={link.icon}
          />
        )}

        {link.label}
      </a>

      {link.children && !noChildren && (
        <Icon
          width={16}
          height={16}
          strokeWidth={3}
          id="ChevronDown"
          class="text-primary group-hover:rotate-180"
        />
      )}

      {link.children && !noChildren && (
        <ul class="hidden group-hover:block absolute top-[100%] right-0 z-20 bg-primary-light p-3 rounded-lg shadow-md">
          {link.children.map((child) => (
            <li>
              <a
                href={child.href}
                class="block px-2 py-1 whitespace-nowrap hover:bg-primary hover:text-primary-light rounded-lg"
              >
                {child.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
