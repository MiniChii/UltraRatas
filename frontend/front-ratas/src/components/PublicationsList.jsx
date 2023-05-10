import React, { useEffect, useState } from "react";

function PublicationsList() {
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch("/publications")
      .then((response) => response.json())
      .then((data) => {
        setGroups(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-light">Loading...</p>;
  }

  return (
    <div className="publications-list-wrapper">
      <h1 className="text-light">lista</h1>
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Descripcion</th>
            <th scope="col">Tipo</th>
            <th scope="col">Puntos</th>
          </tr>
        </thead>
        <tbody>
          {groups.map((group, index) => (
            <tr key={group.id}>
              <th scope="row">{index + 1}</th>
              <td>{group.name}</td>
              <td>{group.pointType.name}</td>
              <td>{group.pointsAmount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PublicationsList;
