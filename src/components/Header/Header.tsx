import { HeaderProps } from "./Header.props";
// import styles from "./Heaer.module.css";

export function Header({ children, ...props }: HeaderProps) {
  return (
    <>
      <div>
        <div {...props}>{children}</div>
      </div>
    </>
  );
}
