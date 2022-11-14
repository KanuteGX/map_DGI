import { CSSProperties, useState } from 'react';
import { TileLayer } from 'react-leaflet';

export const MapSelector = () => {
	interface objMapStyles {
		url: string;
		img: string;
	}
	const maps: objMapStyles[] = [
		{
			url: 'https://api.mapbox.com/styles/v1/illiantech/cl9hdcu23002314qsr5vfo2dg/tiles/512/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiaWxsaWFudGVjaCIsImEiOiJjbDlmcDZyYjE1NnY1M29teDN2eTh3dnF5In0.NhrvXnduOvE5mMbKFF07UA',
			img: '/colorfull_natural.png'
		},
		{
			url: 'https://api.mapbox.com/styles/v1/illiantech/clagxhb0l000214pcvg5vqkpq/tiles/512/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiaWxsaWFudGVjaCIsImEiOiJjbDlmcDZyYjE1NnY1M29teDN2eTh3dnF5In0.NhrvXnduOvE5mMbKFF07UA',
			img: '/satelital.png'
		}
	];

	const [tileMap, setTileMap] = useState(0);
	const [openTiles, showTiles] = useState(false);

	const changeTile = (n: number) => {
		setTileMap(n);
		showTiles(false);
	};

	return (
		<>
			{<TileLayer url={maps[tileMap].url} />}

			<div className="select-map--wrapper">
				<MapBaseTileItem
					style={{
						backgroundImage: `${maps[tileMap].img}`
					}}
					className="select-map__indicator"
					onClick={() => showTiles(!openTiles)}
					n={-1}
				/>
				{openTiles && maps.map((m, i) => <MapBaseTileItem n={i} onClick={() => changeTile(i)} key={i} className="select-map--styles" />)}
			</div>
		</>
	);
};

const MapBaseTileItem = ({
	onClick,
	n,
	className,
	style
}: {
	onClick: (mapNumber: number) => void;
	n: number;
	className?: string;
	style?: CSSProperties;
}) => {
	return <div onClick={() => onClick(n)} className={`box-border ${className}`} style={style}></div>;
};
