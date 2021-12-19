import "./app-filter.scss";

const AppFilter = ({ category, onChangeBtn }) => {
  const buttons = [
    { name: "Все сотрудники", category: "all" },
    { name: "На повышение", category: "increase" },
    { name: "З/П больше 1000$", category: "moreThen1000" },
  ];

  const btns = buttons.map((item) => {
    const active = category === item.category;
    const newClass = active ? "btn-light" : "btn-outline-light";

    return (
      <button
        type="button"
        className={`btn ${newClass}`}
        key={item.category}
        onClick={() => {
          onChangeBtn(item.category);
        }}
      >
        {item.name}
      </button>
    );
  });

  return <div className="btn-group">{btns}</div>;
};

export default AppFilter;
