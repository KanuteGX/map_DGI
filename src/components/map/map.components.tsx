import { MapContainer, TileLayer } from 'react-leaflet';
import { Categories } from '../categories_map/categories.map';
import { MapSelector } from './map-selector/map-selector.component';

export function GobMap() {
	return (
		<div style={{ width: '100vw', height: '100vh' }}>
			<MapContainer style={{ width: '100%', height: '100vh' }} center={[9.006826, -66.481284]} zoom={8} scrollWheelZoom={true}>
				<MapSelector />
			</MapContainer>
			<Categories />
		</div>
	);
}
