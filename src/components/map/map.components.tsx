import { MapContainer } from 'react-leaflet';
import { Categories } from '../categories_map/categories.map';
import { MapShapes } from './map-draw/map-shapes/map-shapes.components';
import { MapSelector } from './map-selector/map-selector.component';

export function GobMap() {
	return (
		<div style={{ width: '100vw', height: '100vh' }}>
			<MapContainer
				style={{ width: '100%', height: '100vh' }}
				center={[9.006826, -66.481284]}
				zoom={8}
				doubleClickZoom={false}
				scrollWheelZoom={true}
			>
				<MapShapes />
				<MapSelector />
			</MapContainer>
			<Categories />
		</div>
	);
}
