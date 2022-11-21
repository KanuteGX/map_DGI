import React, { ReactElement, useState } from 'react';
import { useMap } from 'react-leaflet';

// agreagar mejor tipado de props
export default function Drawer() {
	const [open, setOpen] = useState<boolean>(false);
	const map = useMap();
	function change() {
		setOpen(!open);
		const mapContainer = map.getContainer();
		mapContainer.classList.toggle('map__active-drawer', !open);
	}

	return (
		<div className={`drawer ${open ? 'drawer__active' : ''}`}>
			<div onClick={() => change()} className="drawer--tab">
				{open ? '<' : '>'}
			</div>
		</div>
	);
}

// type ModalProps = {
// 	header?: ReactElement | string;
// 	children?: ReactElement | string;
// 	footer?: ReactElement | string;
// };
