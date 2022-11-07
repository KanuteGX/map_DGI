export function Chip({ children, icon }: { children: any; icon: any }) {
	return (
		<div className="chips">
			<div className="chips--icon">{icon}</div>
			<p className="chips--content">{children}</p>
		</div>
	);
}
