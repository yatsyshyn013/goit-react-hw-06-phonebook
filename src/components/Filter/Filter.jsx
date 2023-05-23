import React from 'react'
import { FindArea } from 'components/Filter/Filter.styled';
// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/selectors';
// import { current } from '@reduxjs/toolkit';
// import { value } from 'lodash-es';
import { setFilter } from 'redux/filterSlice';


export function Filter() {
    const filter = useSelector(getFilter)
    const dispatch = useDispatch()

    return (
         <label htmlFor="name">
              <FindArea>Find contacts by name</FindArea>
                    <input 
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                onChange={e => dispatch(setFilter(e.target.value))}
                value={filter}
                          />
                </label>
    )
   
}

// Filter.propTypes = {
//     onChange: PropTypes.func.isRequired,
//     value: PropTypes.string.isRequired
// }