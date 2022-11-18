import { ShapeType } from "../../../../domain/models/shape.model"

export function MapShapesToolbar(/* { selectedShape, onChange }: mapShapesToolbarProps */) {

  const mockData: { name: string, shape: ShapeType }[] = [
    { name: 'Circulo', shape: 'Circle' },
    { name: 'Linea', shape: 'Line' },
    { name: 'Poligono', shape: 'Polygon' },
    { name: 'Rectangulo', shape: 'Rectangle' },
  ]

  return <div
    style={{
      height: '30vh',
      position: 'absolute',
      zIndex: 1000,
      top: '20vh',
      right: '5ch'
    }}
  >
    <ul>
      {mockData.map(s => (
        <li onClick={() => {/* onChange(s.shape) */}} key={s.shape}>{s.name}</li>
      ))}
    </ul>
  </div>
}

type mapShapesToolbarProps = {
  selectedShape: ShapeType,
  onChange: (shape: ShapeType) => void
}