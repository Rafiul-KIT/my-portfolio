declare module "../components/SkillBadge" {
  import React from "react";
  export interface SkillBadgeProps {
    label: string;
  }
  const SkillBadge: (props: SkillBadgeProps) => JSX.Element;
  export default SkillBadge;
}
