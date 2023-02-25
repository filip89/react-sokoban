import { Location } from './Location';

export class Box {
  id: string;
  location: Location;

  constructor(location: Location) {
    this.id = '' + location.y + location.x;
    this.location = location;
  }
}
