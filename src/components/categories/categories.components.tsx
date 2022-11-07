import { Chip } from '../chip/chip.components';

export function Categories() {
	return (
		<div className="categories">
			<div>
				{chipData.map((e) => (
					<Chip children={e.children1} icon={e.icon}></Chip>
				))}
			</div>
		</div>
	);
}

const chipData = [
	{ icon: 'X', children1: 'Hospital' },
	{ icon: 'X', children1: 'Troncales' },
	{ icon: 'X', children1: 'Estaciones Policiales' },
	{ icon: 'X', children1: 'Estaciones de Bomberos' },
	{ icon: 'X', children1: 'Hospital' },
	{ icon: 'X', children1: 'Troncales' },
	{ icon: 'X', children1: 'Estaciones Policiales' },
	{ icon: 'X', children1: 'Estaciones de Bomberos' }
];
