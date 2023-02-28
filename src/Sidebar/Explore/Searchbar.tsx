import { createUseStyles } from "react-jss";

type SearchbarProps = {
  city: string;
  setCity: (city: string) => void;
  handleSearch: (event: React.KeyboardEvent<HTMLInputElement>) => void;
};

export function Searchbar({ city, setCity, handleSearch }: SearchbarProps) {
  const styles = useStyles();

  return (
    <input
      type="text"
      className={styles.input}
      placeholder="Enter city..."
      onChange={(e) => setCity(e.target.value)}
      value={city}
      onKeyDown={handleSearch}
    />
  );
}

const useStyles = createUseStyles({
  input: {
    padding: 10,
    width: "30%",
    border: "1px solid #DDD",
    borderRadius: 5,
    margin: "4rem 0 1rem",
  },
});