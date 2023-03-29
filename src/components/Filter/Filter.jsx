import React from "react";
import { FilterInput, TitleFilter } from "./Filter.styled";

export const Filter = ({data, onChangeInputFilter}) => {
    return (
      
        <div>
            <TitleFilter> Find contacts by name</TitleFilter>
                <FilterInput
                    class="filter-input"
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    onChange={onChangeInputFilter}
                    value ={data}
                    />
                    
            </div>

 
        )
     }