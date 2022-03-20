import { Component } from "react";

import "./app-filter.css";

class AppFilter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { onUpdateFilter } = this.props;

        const setActiveFilterTab = (event) => {
            const btnGroup = document.querySelector(".btn-group"),
                allBtns = btnGroup.querySelectorAll("button");

            allBtns.forEach((item) => {
                item.className = "btn btn-outline-light";
            });

            event.currentTarget.className = "btn btn-light";
        };

        return (
            <div className="btn-group">
                <button
                    type="button"
                    className="btn btn-light"
                    data-filter="all"
                    onClick={(event) => {
                        onUpdateFilter(event.currentTarget.getAttribute("data-filter"));
                        setActiveFilterTab(event);
                    }}
                >
                    Все сотрудники
                </button>
                <button
                    type="button"
                    className="btn btn-outline-light"
                    data-filter="increased"
                    onClick={(event) => {
                        onUpdateFilter(event.currentTarget.getAttribute("data-filter"));
                        setActiveFilterTab(event);
                    }}
                >
                    На повышение
                </button>
                <button
                    type="button"
                    className="btn btn-outline-light"
                    data-filter="salary"
                    onClick={(event) => {
                        onUpdateFilter(event.currentTarget.getAttribute("data-filter"));
                        setActiveFilterTab(event);
                    }}
                >
                    З/П больше 1000$
                </button>
            </div>
        );
    }
}

export default AppFilter;
