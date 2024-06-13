"use client";
import PropertyListItem from "./PropertyListItem";
import { useState, useEffect } from "react";
import apiService from "../../services/apiService";

export type PropertyType = {
  id: string;
  title: string;
  image_url: string;
  price_per_night: number;
};

const PropertyList = () => {
  const [properties, setProperties] = useState<PropertyType[]>([]);
  const getProperties = async () => {
    const tmpProperties = await apiService.get("/api/properties/");
    setProperties(tmpProperties.data);
  };
  useEffect(() => {
    getProperties();
  }, []);
  return (
    <>
      {properties.map((property) => (
        <PropertyListItem key={property.id} property={property} />
      ))}
    </>
  );
};

export default PropertyList;
