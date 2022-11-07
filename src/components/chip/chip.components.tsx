import { ReactElement } from 'react';

export function Chip({ children, icon }: { children: ReactElement; icon: any }) {
	return (
		<div className="chips">
			<div>{icon}</div>
			<p>{children}</p>
		</div>
	);
}
