import cn from '@/lib/clsxm';

import { CONTAINER_TAG_TYPE, Props } from '@/components/@base/container/type';

export default function Container({
  className,
  center = false,
  type = CONTAINER_TAG_TYPE.DIV,
  children,
  ...props
}: Props) {
  const ContainerTag = {
    div: ({ children, ...props }: Props) => <div {...props}>{children}</div>,
    section: ({ children, ...props }: Props) => (
      <section {...props}>{children}</section>
    ),
    header: ({ children, ...props }: Props) => <header {...props}>{children}</header>,
    footer: ({ children, ...props }: Props) => <footer {...props}>{children}</footer>,
  }[type || 'div'];
  return (
    <ContainerTag
      className={cn(center && 'flex items-center justify-center', className)}
      {...props}
    >
      {children}
    </ContainerTag>
  );
}
