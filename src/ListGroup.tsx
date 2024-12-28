function ListGroup() {
  let items = ["Kolkata", "Hyderand", "Delhi", "Pune", "Bengalore"];
  // items = [];

  return (
    <>
      <h1> List of Cities</h1>
      {items.length == 0 && <p> No Element Found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li
            className="gist-group"
            key={item}
            onClick={() => console.log(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
