export interface Place {
  lat: number;
  lng: number;
  osm_id?: number; // ✅ Now optional
  display_name?: string;
}
