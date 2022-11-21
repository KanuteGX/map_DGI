import { useState } from 'react';
import { MapContainer } from 'react-leaflet';
import { useAppSelector } from '../../redux/redux-hooks';
import { Categories } from '../categories_map/categories.map';
import Drawer from '../drawer/drawer';
import { MapShapes } from './map-draw/map-shapes/map-shapes.components';
import { MapSelector } from './map-selector/map-selector.component';

export function GobMap() {
	const editingShape = useAppSelector((state) => state.editingShape.editingShape);

	return (
		<div className={!!editingShape ? 'hide-cursor' : ''}>
			<MapContainer className={`map`} center={[9.006826, -66.481284]} zoom={8} doubleClickZoom={false} scrollWheelZoom={true}>
				<Drawer />
				<MapSelector />
				<MapShapes />
			</MapContainer>
			<Categories />
		</div>
	);
}
