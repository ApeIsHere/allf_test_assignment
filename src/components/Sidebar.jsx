import AccountIcon from "./ui/AccountIcon";
import Button from "./ui/Button";
import CompanyIcon from "./ui/CompanyIcon";
import ContractorIcon from "./ui/ContractorIcon";

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
      <Button icon={<CompanyIcon />}>Organizations</Button>
      <Button type="outline" icon={<ContractorIcon />}>
        Contractors
      </Button>
      <Button type="outline" icon={<AccountIcon />}>
        Clients
      </Button>
    </div>
  );
}

function SidebarFooter() {
  return <p className="sidebar__footer">All Funeral Services © 2015-2025</p>;
}
