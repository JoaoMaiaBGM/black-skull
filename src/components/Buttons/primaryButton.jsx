import { PrimaryButtonStyle } from "./style";

export function PrimaryButton({ children, Icon }) {
  return <PrimaryButtonStyle Icon={Icon}>{children}</PrimaryButtonStyle>;
}
