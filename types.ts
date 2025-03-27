// src/types.ts
export interface Place {
    lat: number;
    lng: number;
    osm_id?: number; // Optional if not always present
    display_name?: string; // Optional if not always present
  }
  