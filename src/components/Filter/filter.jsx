
import { useDispatch, useSelector } from "react-redux";
import { filterContact } from 'redux/Contacts/contactsFilterSlice';
import { selectFilter } from "redux/Contacts/selectors";
import { WraperFilter, Label, Input } from "./filter.styled"

const Filter = () => {
    const dataFilter = useSelector(selectFilter);
  const dispatch = useDispatch();
  
  const HandlChange = e => {
    dispatch(filterContact(e.target.value));
  }
    return (
      <WraperFilter>
        <Label htmlFor="labelFilter">Filter by name</Label>
        <Input type="text" value={dataFilter} onChange={HandlChange} />
      </WraperFilter>
    );}

export default Filter