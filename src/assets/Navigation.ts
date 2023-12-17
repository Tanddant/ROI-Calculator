import { INavLinkGroup } from "@fluentui/react";
import { NavigationKey } from "../models/NavigationKey";

export const Navigation: INavLinkGroup =
{
  isExpanded: true,
  links: [{
    name: "Home",
    url: "",
    key: NavigationKey.Home,
    isExpanded: true,
  },
  {
    name: "Time to automate",
    url: "",
    key: NavigationKey.TimeSaved,
    isExpanded: true,
  },
  {
    name: "How much can you save",
    url: "",
    key: NavigationKey.CostSaved,
    isExpanded: true,

  },
  {
    name: "Time to breakeven",
    url: "",
    key: NavigationKey.Breakeven,
    isExpanded: true,
  }]
};