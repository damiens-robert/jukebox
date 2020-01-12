"use strict"

import React from 'react';
import { render } from 'react-dom';
import {useFormik} from 'formik';

import searchImage from '../../img/search.png';

export default function Search (props) {
  const formik = useFormik({
    initialValues: {
      query: 'Search for a Song'
    },
    onSubmit: values => {
      props.handleSearch(values);
    } 
  });

  return ( 
    <form id="search" onSubmit={formik.handleSubmit}>
      <input id="query" type="text" name="query" onChange={formik.handleChange} placeholder={formik.values.query}/>
      <input id="submit" type="image" src={ searchImage } alt="Search"/>
    </form>
  );
}

