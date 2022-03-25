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
                { name: "John", salary: 800, increase: false, id: 1 },
                { name: "Alex", salary: 3000, increase: false, id: 2 },
                { name: "Carl", salary: 5000, increase: false, id: 3 },
            ],

            term: "", //search string value
            filterMode: "all",
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
            rise: false,
            id: this.maxId++,
        };

        this.setState(({ data }) => ({
            data: [...data, newItem],
        }));
    };

    //change the property to its oppsite, property name is taken from data-attribute
    onToggleProp = (id, prop) => {
        this.setState(({ data }) => ({
            data: data.map((item) => {
                if (item.id === id) {
                    return { ...item, [prop]: !item[prop] };
                }
                return item;
            }),
        }));
    };

    //looks for a match among employee names
    searchEmployee = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter((item) => {
            return item.name.indexOf(term) > -1;
        });
    };

    //updates the value of term (search word)
    onUpdateSearch = (term) => {
        this.setState({ term });
    };

    //filter the list of employees
    filterEmployee = (items, filterMode) => {
        switch (filterMode) {
            case "rise":
                return items.filter((item) => item.rise);
            case "salary":
                return items.filter((item) => item.salary > 1000);
            default:
                return items;
        }
    };

    //sets the filters
    onFilterSelect = (filterMode) => {
        this.setState({ filterMode });
    };

    //sets the employee`s salary
    onSetSalary = (id, value) => {
        this.setState(({ data }) => ({
            data: data.map((item) => {
                if (item.id === id) {
                    return { ...item, salary: value };
                }
                return item;
            }),
        }));
    };

    render() {
        const { data, term, filterMode } = this.state;
        const employees = data.length,
            increasedEmployees = data.filter((item) => item.increase).length;

        const visibleData = this.filterEmployee(this.searchEmployee(data, term), filterMode);

        return (
            <div className="app">
                <AppInfo totalEmployees={employees} increasedEmployees={increasedEmployees} />

                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch} />
                    <AppFilter filterMode={filterMode} onFilterSelect={this.onFilterSelect} />
                </div>

                <EmployeesList
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                    onSetSalary={this.onSetSalary}
                />
                <EmployeesAddForm onAdd={this.addItem} />
            </div>
        );
    }
}

export default App;
