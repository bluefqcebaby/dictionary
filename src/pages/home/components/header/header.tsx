import { ROUTES } from "@/constants/routes";
import { Button, Divider } from "@geist-ui/core";
import LibraryBooksTwoToneIcon from "@mui/icons-material/LibraryBooksTwoTone";
import AddTwoToneIcon from "@mui/icons-material/AddTwoTone";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <div className="container h-[50px] flex justify-between items-center">
        <Link to="">
          <p className="text-xl font-bold m-0 p-0 text-green-500 italic">
            Dictionary
          </p>
        </Link>
        <div className="flex flex-row gap-5">
          <Link to={ROUTES.DICTIONARIES.FULL_PATH}>
            <Button
              iconRight={<LibraryBooksTwoToneIcon fontSize="large" />}
              auto
            />
          </Link>
          <Link to={ROUTES.NEW_DICTIONARY.FULL_PATH}>
            <Button iconRight={<AddTwoToneIcon fontSize="large" />} auto />
          </Link>
        </div>
      </div>
      <Divider />
    </header>
  );
};
