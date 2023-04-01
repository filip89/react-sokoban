import { MapScheme } from './MapScheme';

export type SavedMap = {
  id: string;
  scheme: MapScheme;
};

export type SavedMapId = SavedMap['id'];
