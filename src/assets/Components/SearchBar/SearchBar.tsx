import toast from "react-hot-toast";
import css from "./SearchBar.module.css";

interface onSubmit {
  onSubmit: (query: string) => void;
}

export default function SearchBar({ onSubmit }: onSubmit) {
  const handleSubmit = (FormData: FormData): void => {
    const query = String(FormData.get("query") ?? "").trim();
    if (!query) {
      toast.error("Please enter your a search query.");
      return;
    }
    onSubmit(query);
  };

  return (
    <header className={css.header}>
      <div className={css.container}>
        <a
          className={css.link}
          href="https://www.themoviedb.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by TMDB
        </a>
        <form className={css.form} action={handleSubmit}>
          <input
            className={css.input}
            type="text"
            name="query"
            autoComplete="off"
            placeholder="Search movies..."
            autoFocus
          />
          <button className={css.button} type="submit">
            Search
          </button>
        </form>
      </div>
    </header>
  );
}
