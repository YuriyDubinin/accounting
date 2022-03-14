import { Component } from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import "./app.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { name: "John", salary: 800, increase: true, id: 1 },
                { name: "Alex", salary: 3000, increase: false, id: 2 },
                { name: "Carl", salary: 5000, increase: true, id: 3 },
            ],
        };

        this.maxId = 4;
    }

    //removes an employee from the list of employees
    deleteItem = (id) => {
        this.setState(({ data }) => {
            return {
                data: data.filter((elem) => elem.id !== id),
            };
        });
    };

    //adds an employee to the list, need protect against invalid input
    addItem = (name, salary) => {
        const newItem = {
            name: name,
            salary: salary,
            increase: false,
            id: this.maxId++,
        };

        this.setState(({ data }) => ({
            data: [...data, newItem],
        }));
    };

    render() {
        return (
            <div className="app">
                <AppInfo />

                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>

                <EmployeesList data={this.state.data} onDelete={this.deleteItem} />
                <EmployeesAddForm onAdd={this.addItem} />
            </div>
        );
    }
}

export default App;
