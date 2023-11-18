import { ROUTES } from "@/constants/routes";
import LibraryBooksTwoToneIcon from "@mui/icons-material/LibraryBooksTwoTone";
import AddTwoToneIcon from "@mui/icons-material/AddTwoTone";
import { Link } from "react-router-dom";
import * as UI from "@/components/ui-kit";

export const Header = () => {
  return (
    <header className="border-b">
      <div className="container h-[50px] flex justify-between items-center">
        <Link to="">
          <h1 className="text-xl font-bold m-0 p-0 italic">Dictionary</h1>
        </Link>
        <div className="flex flex-row gap-5">
          <Link to={ROUTES.DICTIONARIES.FULL_PATH}>
            <UI.Button
              iconRight={<LibraryBooksTwoToneIcon fontSize="medium" />}
            >
              ghbdtn
            </UI.Button>
          </Link>
          <Link to={ROUTES.NEW_DICTIONARY.FULL_PATH}>
            <UI.Button iconRight={<AddTwoToneIcon fontSize="medium" />} />
          </Link>
        </div>
      </div>
    </header>
  );
};
