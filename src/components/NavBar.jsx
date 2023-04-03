function NavBar({ pokemonIndex, setPokemonIndex, pokemonList }) {
  const handlePokemonClick = (el, index) => {
    setPokemonIndex(index);
    setTimeout(() => isPikachu(el), "50");
  };

  const isPikachu = (el) => {
    if (el.name === "pikachu") {
      alert("pika pikachu !!!");
    }
  };

  return (
    <nav>
      {pokemonList.map((el, index) => (
        <button key={el.name} onClick={() => handlePokemonClick(el, index)}>
          {el.name}
        </button>
      ))}
    </nav>
  );
}

export default NavBar;
