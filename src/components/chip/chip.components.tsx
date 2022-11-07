import { ReactElement } from "react";
import './chip.css';

export function Chip({ children, icon }: { children: ReactElement, icon: any }) {
  return <div className="chip chip__map-chip">
    <div>{icon}</div>
    {children}
  </div>
}