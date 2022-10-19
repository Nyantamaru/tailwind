import DefinitionSearch from '../components/DefinitionSearch';

const Dictionary = () => {
  return (
    <div className="flex justify-center">
      <DefinitionSearch />
    </div>
  );
};

export default Dictionary;

// no dependency array --> update for nay state change
// empty dependency array --> execute once
// passing in data --> execute when those state variables are changed
