import { ConstantsMenuProps, LANDING_PAGE_MENU } from "./menu";
import {
  CREATE_GROUP_PLACEHOLDER,
  createGroupPlaceholderProps,
} from "./placeholde";

type ConstantsProps = {
  landingPageMenu: ConstantsMenuProps[];
  createGroupPlaceholder: createGroupPlaceholderProps[];
};

export const CONSTANTS: ConstantsProps = {
  landingPageMenu: LANDING_PAGE_MENU,
  // groupList: GROUP_LIST,
  createGroupPlaceholder: CREATE_GROUP_PLACEHOLDER,
};
