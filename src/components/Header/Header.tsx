import { HeaderProps } from "./Header.props";

export function Header({ children, ...props }: HeaderProps) {
  return (
    <>
      <div>
        <div {...props}>{children}</div>
      </div>
    </>
  );
}
