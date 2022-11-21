import React, { ReactElement, useState } from 'react';
import { useMap } from 'react-leaflet';

// agreagar mejor tipado de props
export default function Drawer() {
	const [open, setOpen] = useState<boolean>(false);
	const map = useMap();
	function change() {
		setOpen(!open);
		const mapContainer = map.getContainer();
		mapContainer.style.width = !open ? '70%' : '100%';
	}

	return (
		<div className={`modal ${open ? 'modal__active' : ''}`}>
			<div onClick={() => change()} className="modal--tab">
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
