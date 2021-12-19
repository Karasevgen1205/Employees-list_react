import { Component } from "react";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import "./app.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: "John C.", salary: 800, increase: false, like: false, id: 1 },
        { name: "Alex M.", salary: 3000, increase: true, like: false, id: 2 },
        { name: "Carl W.", salary: 5000, increase: false, like: false, id: 3 },
      ],
      filter: "",
      category: "all",
    };
    this.maxItemId = 3;
  }

  onDeleteItem = (id) => {
    this.setState(({ data }) => {
      return { data: data.filter((item) => item.id !== id) };
    });
  };

  onAddItem = (e, input) => {
    e.preventDefault();
    if (input.name && input.salary) {
      const newId = this.state.data.length + 1;
      const newItem = { ...input, increase: false, like: false, id: newId };
      this.setState(({ data }) => {
        return { data: [...data, newItem] };
      });
      this.maxItemId = ++this.maxItemId;
    }
  };

  onChangeProp = (id, prop) => {
    this.setState(({ data }) => {
      return {
        data: data.map((item) => {
          if (item.id === id) {
            const newItem = { ...item, [prop]: !item[prop] };
            return newItem;
          }

          return item;
        }),
      };
    });
  };

  onChangeFilter(filter) {
    console.log(filter);
  }

  render() {
    const { data, filter, category } = this.state;
    const employees = data.length;
    const increase = data.filter((item) => item.increase).length;
    return (
      <div className="app">
        <AppInfo employees={employees} increase={increase} />

        <div className="search-panel">
          <SearchPanel onChangeFilter={this.onChangeFilter} />
          <AppFilter />
        </div>

        <EmployeesList
          data={this.state.data}
          onDeleteItem={this.onDeleteItem}
          onChangeProp={this.onChangeProp}
        />
        <EmployeesAddForm onAddItem={this.onAddItem} />
      </div>
    );
  }
}

export default App;
