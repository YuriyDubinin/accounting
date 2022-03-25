import EmployeesListItem from "../employees-list-item/employees-list-item";

import "./employees-list.css";

const EmployeesList = ({ data, onDelete, onToggleProp, onSetSalary }) => {
    const elements = data.map((item) => {
        const { id, ...itemProps } = item;

        return (
            <EmployeesListItem
                key={id}
                {...itemProps}
                id={id}
                onDelete={() => onDelete(id)}
                onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute("data-toggle"))}
                onSetSalary={onSetSalary}
            />
        );
    });

    return <ul className="app-list list-group">{elements}</ul>;
};

export default EmployeesList;
