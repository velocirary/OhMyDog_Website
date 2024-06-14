import { Link, LinkProps, useLocation } from 'react-router-dom'

type NavLinkProps = LinkProps

export function NavLink(props: NavLinkProps) {
  const { pathname } = useLocation()

  return (
    <Link
      data-current={pathname === props.to}
      className="relative flex flex-col items-center gap-0.5 text-sm font-semibold text-black hover:text-foreground data-[current=true]:after:absolute data-[current=true]:after:-bottom-2 data-[current=true]:after:block data-[current=true]:after:h-1 data-[current=true]:after:w-full data-[current=true]:after:bg-yellow-500 data-[current=true]:after:content-['']"
      {...props}
    />
  )
}
