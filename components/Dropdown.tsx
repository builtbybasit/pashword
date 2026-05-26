import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import PASSWORD_LENGTH from "../constants/passwordLength";
import { HiOutlineSelector } from "react-icons/hi";

interface IProps {
  passwordLength: number;
  setPasswordLength: (arg: number) => void;
}

const Dropdown = ({ passwordLength, setPasswordLength }: IProps) => {
  return (
    <Listbox value={passwordLength} onChange={setPasswordLength}>
      <ListboxButton className="input-text flex items-center justify-between px-5">
        {passwordLength === PASSWORD_LENGTH.SMALL && "Small - 11"}
        {passwordLength === PASSWORD_LENGTH.MEDIUM && "Medium - 15"}
        {passwordLength === PASSWORD_LENGTH.LARGE && "Large (Recommended) - 20"}
        <HiOutlineSelector className="text-xl" />
      </ListboxButton>
      <ListboxOptions className="animate absolute top-full z-20 mt-1 flex w-4/5 flex-col rounded-xl bg-slate-700/90 text-slate-100 outline-none ring-1 ring-slate-200 backdrop-blur-xl hover:shadow-lg hover:shadow-slate-400/30">
        <ListboxOption
          key={0}
          value={PASSWORD_LENGTH.SMALL}
          className="mt-2 w-full cursor-pointer p-1 text-center data-[focus]:bg-slate-600"
        >
          Small - 11
        </ListboxOption>
        <ListboxOption
          key={1}
          value={PASSWORD_LENGTH.MEDIUM}
          className="w-full cursor-pointer p-1 text-center data-[focus]:bg-slate-600"
        >
          Medium - 15
        </ListboxOption>
        <ListboxOption
          key={2}
          value={PASSWORD_LENGTH.LARGE}
          className="mb-2 w-full cursor-pointer p-1 text-center data-[focus]:bg-slate-600"
        >
          Large (Recommended) - 20
        </ListboxOption>
      </ListboxOptions>
    </Listbox>
  );
};

export default Dropdown;
