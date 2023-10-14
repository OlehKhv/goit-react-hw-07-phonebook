import { InputForm } from '../Form/Form.styled';
import { FilterField, LabelSearchInput } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/slice';

export const Filter = () => {
    const dispatch = useDispatch();

    return (
        <FilterField>
            <LabelSearchInput htmlFor="filter">
                🔍Search contact
            </LabelSearchInput>
            <InputForm
                name="filter"
                id="filter"
                type="text"
                placeholder="🙍‍♂️   Enter name"
                onChange={({ target: { value } }) => {
                    dispatch(setFilter(value));
                }}
            />
        </FilterField>
    );
};

export default Filter;
