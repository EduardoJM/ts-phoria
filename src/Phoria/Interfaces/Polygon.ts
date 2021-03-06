import { Vector4 } from '../../Math';

export default interface Polygon {
    vertices: number[];
    color: number[] | null;
    texture: number | null;
    normal: Vector4 | null;
    worldnormal: Vector4;
    avz: number;
    uvs: number[] | null;
    emit?: number;
    opacity?: number;
}
