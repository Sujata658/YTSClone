import navLink from '../Constants/const';
import logo from '../../assets/images/logo.svg';
import Input from '../General/Input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { ThemeButton } from '../General/Themebutton';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <div className="mx-[5%] py-4 text-xs font-bold">
        <div className="flex justify-between items-center">
          <div>
            <a href="/">
              <span>
                <img src={logo} alt="Logo" />
              </span>
            </a>
          </div>
          <div className="flex justify-end gap-5">
            <Input
              placeholder="Quick Search"
              focusColor="none"
              leadingIcon={<FontAwesomeIcon icon={faMagnifyingGlass} />}
              rounded="rounded-3xl"
              backgroundColor="bg-[#1d1d1d]"
            />
            <ul className="flex gap-5 justify-end items-center">
              {navLink.map((Link) => (
                <li key={Link.id}>
                <NavLink to={Link.link}>{Link.name}</NavLink>
                </li>
              ))}
            </ul>
            <div className="flex divide-x-2 divide-black dark:divide-white items-center">
              <div className="px-2">
                <NavLink to="/login">Login</NavLink>
              </div>
              <div className="px-2">
                <NavLink to="/register">Register</NavLink>
              </div>
            </div>
            <div className="flex items-center">
              <ThemeButton />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
