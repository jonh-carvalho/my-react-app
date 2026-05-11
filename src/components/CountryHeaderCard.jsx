import CountryGrid from "./CountryGrid";

function CountryHeaderCard({ flag, name, capital, population, language }) {
  return (
      <div className="country-header">
        <span className="flag">{flag}</span>
        <h3>{name}</h3>
      </div>  
  );
}

export default CountryHeaderCard;