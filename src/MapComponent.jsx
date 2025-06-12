import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const MapComponent = () => {
  useEffect(() => {
    try {
      const map = L.map("map").setView([43.773550, 142.363498], 18);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(map);

      return () => {
        map.remove();
      };
    } catch (error) {
      console.error("Leaflet map initialization error:", error);
    }
  }, []);

  return <div id="map" style={{ height: "500px", width: "500px" }}></div>;
};

export default MapComponent;
