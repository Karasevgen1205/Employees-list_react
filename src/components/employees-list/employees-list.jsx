import EmployeesListItem from "../employees-list-item/employees-list-item";

import "./employees-list.scss";

const EmployeesList = ({ data, onDeleteItem, onChangeProp }) => {
  const elements = data.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <EmployeesListItem
        key={id}
        {...itemProps}
        onDeleteItem={() => {
          onDeleteItem(id);
        }}
        onChangeProp={(e) => {
          const a = e.currentTarget.getAttribute("data-prop");
          onChangeProp(id, a);
        }}
      />
    );
  });

  return <ul className="app-list list-group">{elements}</ul>;
};

export default EmployeesList;
