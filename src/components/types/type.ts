// types/bottomTab.ts
import { LucideIcon } from 'lucide-react';

export type ActivityName =
  | 'Home'
  | 'LoginPage'
  | 'SignupPage'
  | 'ChatPage'
  | 'ExpertSigninPage'
  | 'ExpertPage'
  | 'QnAPage'
  | 'PaymentPage'
  | 'MenuPage';

export interface TabItem {
  name: string;
  icon: LucideIcon;
  path?: ActivityName;
  matchPath?: string;
  isSheet?: boolean;
}

export interface TabButtonProps {
  tab: Omit<TabItem, 'path'> & { path: ActivityName };
  currentPath: string;
  disabled: boolean;
}

export interface TabSheetProps {
  tab: TabItem;
}

export interface SheetTabItem {
  name: string;
  icon: LucideIcon;
  path: ActivityName;
}
