import Button from "./Button";
import PlusIcon from "./PlusIcon";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarTitle />
      <SidebarMenu />
      <SidebarFooter />
    </div>
  );
}

export default Sidebar;

function SidebarTitle() {
  return (
    <div className="sidebar__title">
      <h2>Oak Tree Cemetery</h2>
      <p>Process Manager</p>
    </div>
  );
}

function SidebarMenu() {
  return (
    <div className="sidebar__menu">
      <Button>Organizations</Button>
      <Button type="outline">Contractors</Button>
      <Button type="outline">Clients</Button>
    </div>
  );
}

function SidebarFooter() {
  return <p className="sidebar__footer">All Funeral Services © 2015-2025</p>;
}
