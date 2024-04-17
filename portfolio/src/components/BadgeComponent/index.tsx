import { ReactNode } from "react";
import { BadgeContainer } from "./styles";

interface BadgeProps {
    children: ReactNode,

}

export function Badge({ children }: BadgeProps) {
    return <BadgeContainer>{children}</BadgeContainer>
}


















// interface BadgePrimaryText {
//     children: ReactNode;
// }
// interface BadgeSecondaryText {
//     children: ReactNode;
// }
// interface BadgeProps {
//     children: ReactNode;

// }
// export function BadgeComponent({ children }: BadgeProps) {
//     return (
//         <BadgeContainer className="badge">
//             {children}
//         </BadgeContainer>
//     );
// }

// export function BadgePrimaryText({ children }: BadgePrimaryText) {
//     return <p className="primaryText">{children}</p>
// }
// export function BadgeSecondaryText({ children }: BadgeSecondaryText) {
//     return <p className="secondaryText">{children}</p>
// }

// BadgeComponent.Title = BadgePrimaryText;
// BadgeComponent.Subtitle = BadgeSecondaryText;

// export default BadgeComponent;
