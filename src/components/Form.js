import React from 'react';
import { Spinner } from './Spinner';

export const Form = ({ info, showSpinner }) => {
  return (
    <div>
      {showSpinner && <Spinner />}
      <p htmlFor="">countryCode: {info.countryCode} </p>
      <p htmlFor="">Vat number: {info.vatNumber} </p>
      <p htmlFor="">Company name: {info.name} </p>
      <p htmlFor="">Street: {info.address.street} </p>
      <p htmlFor="">ZIP code: {info.address.zip_code} </p>
      <p htmlFor="">City: {info.address.city} </p>
      <p htmlFor="">Country: {info.address.country} </p>
    </div>
  );
};
