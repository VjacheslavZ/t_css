import {ReactElement} from "react";
import {ReactComponent as SearchIcon} from "../../assets/icons/Icon.svg";
import s from "./styles.module.scss"

const Search = (): ReactElement => {
    return (
        <div className={s.inputContainer}>
            <div className={s.icon}>
                <SearchIcon/>
            </div>

            <input
                className={s.input}
                placeholder="Search"
                type="text"
            />
        </div>
    )
};

export default Search;