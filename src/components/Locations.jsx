const Locations = ({ locations }) => {
  return (
    <div className="location-info-container">
      <h2 className="location-name">{locations.name}</h2>
      <section>
        <ul className="location-info">
          <li>
            <b>Type: </b>
            {locations.type}
          </li>
          <li>
            <b>Dimension: </b>
            {locations.dimension}
          </li>
          <li>
            <b>Population: </b>
            {locations.residents?.length}
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Locations;
