declare module "../components/SkillBadge" {
  import type { ReactElement } from "react";
  export interface SkillBadgeProps {
    label: string;
  }
  const SkillBadge: (props: SkillBadgeProps) => ReactElement;
  export default SkillBadge;
}
