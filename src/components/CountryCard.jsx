import CountryHeaderCard from './CountryHeaderCard';
// src/components/CountryCard.jsx
function CountryCard({ flag, name, capital, population, language }) {
  return (
    <div className="country-card">
      <CountryHeaderCard 
        flag={flag}
        name={name} 
      />
      <div className="country-info">
        <p><strong>Capital:</strong> {capital}</p>
        <p><strong>População:</strong> {population}</p>
        <p><strong>Idioma:</strong> {language}</p>
      </div>
    </div>
  );
}

export default CountryCard;