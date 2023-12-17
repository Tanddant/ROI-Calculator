import { INavLinkGroup } from "@fluentui/react";
import { NavigationKey } from "../models/NavigationKey";

export const Navigation: INavLinkGroup[] = [
    {
      name: '🏠',
      links: [{
        name: "Home",
        url: "",
        key: NavigationKey.Home,
      },
      {
        name: "Time to automate",
        url: "",
        key: NavigationKey.TimeSaved,
      },
      {
        name: "How much can you save",
        url: "",
        key: NavigationKey.CostSaved,
      },
      {
        name: "Time to breakeven",
        url: "",
        key: NavigationKey.Breakeven,
      }
      ],
    }
  ]