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

    // //change the 'increase' property to its opposite
    // onToggleIncrease = (id) => {
    //     this.setState(({ data }) => ({
    //         data: data.map((item) => {
    //             if (item.id === id) {
    //                 return { ...item, increase: !item.increase };
    //             }
    //             return item;
    //         }),
    //     }));
    // };

    // //change the 'rise' property to its opposite
    // onToggleRise = (id) => {
    //     this.setState(({ data }) => ({
    //         data: data.map((item) => {
    //             if (item.id === id) {
    //                 return { ...item, rise: !item.rise };
    //             }
    //             return item;
    //         }),
    //     }));
    // };

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

    render() {
        const employees = this.state.data.length,
            increasedEmployees = this.state.data.filter((item) => item.increase).length;
        return (
            <div className="app">
                <AppInfo totalEmployees={employees} increasedEmployees={increasedEmployees} />

                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>

                <EmployeesList data={this.state.data} onDelete={this.deleteItem} onToggleProp={this.onToggleProp} />
                <EmployeesAddForm onAdd={this.addItem} />
            </div>
        );
    }
}

export default App;
