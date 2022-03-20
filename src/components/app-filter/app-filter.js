import { Component } from "react";

import "./app-filter.css";

class AppFilter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { filterMode, onFilterSelect } = this.props;

        const buttonsData = [
            { name: "all", label: "Все сотрудники" },
            { name: "rise", label: "На повышение" },
            { name: "salary", label: "З/П больше 1000$" },
        ];

        const buttons = buttonsData.map(({ name, label }) => {
            //checking where the filter matches
            const active = filterMode === name;

            const clazz = active ? "btn-light" : "btn-outline-light";
            return (
                <button type="button" className={`btn ${clazz}`} key={name} onClick={() => onFilterSelect(name)}>
                    {label}
                </button>
            );
        });

        return <div className="btn-group">{buttons}</div>;
    }
}

export default AppFilter;
