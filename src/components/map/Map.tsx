import {useEffect, useRef, useState} from 'react'
import mapboxgl, { Map as MapGl } from "mapbox-gl";
import { Position } from '../../Data/InterFaces';

interface IProp {
    position?: Position | null
}

export const  Map = ({position}: IProp) => {
    const mapContainer = useRef(null);

    const mapRef = useRef<MapGl | null>(null);

    const [zoom, setZoom] = useState<number>(10);

    useEffect(() => {
      if (mapRef.current || !mapContainer.current) return;
if (position && position !== null) {
    
          mapRef.current = new MapGl({
            container: mapContainer.current,
            style: "mapbox://styles/dulkut2001/clm4n8mel00tl01pjfyzbfwzh",
            center: [position.longitude, position.latitude],
            zoom: 9,
            logoPosition: "bottom-left",
          });
          const map: MapGl = mapRef.current;
    
          map.on("move", () => {
            setZoom(map.getZoom());
          });
          new mapboxgl.Marker({
            color: "blue",
            anchor: "bottom",
          })
            .setLngLat([position.longitude, position.latitude])
            .addTo(map);
        }
      }, [position, zoom]);

  return (
    <div className="mapbox" ref={mapContainer} />

  )
}