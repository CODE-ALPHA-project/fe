import { TabButton } from '@/components/display/TabButton';
import { TabSheet } from '@/components/display/TabSheet';
import useTabs from '@/hooks/useTabs';

const BottomTab = () => {
  const currentPath = window.location.pathname;
  const tabs = useTabs();
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border/40 bg-background/95 backdrop-blur-3xl supports-[backdrop-filter]:bg-background/60 sm:hidden">
      <nav className="flex h-16 items-center justify-around">
        {tabs.map(tab =>
          tab.isSheet ? (
            <TabSheet key={tab.name} tab={tab} />
          ) : (
            tab.path && (
              <TabButton
                key={tab.name}
                tab={{ ...tab, path: tab.path }}
                currentPath={currentPath}
                disabled={currentPath === tab.matchPath}
              />
            )
          ),
        )}
      </nav>
      <div className="h-[env(safe-area-inset-bottom)] bg-background/95 backdrop-blur-3xl supports-[backdrop-filter]:bg-background/60" />
    </div>
  );
};

export default BottomTab;
