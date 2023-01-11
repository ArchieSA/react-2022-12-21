import { Tab } from "../Tab/Tab"

export const Tabs = ({ items, tabTitle, onChange, isActive }) => {
    console.log(items);
    return (
        <div>
            {items.map((item) => <Tab key={item.id} isActive={isActive(item)} onClick={() => onChange(item)} title={tabTitle(item)} />)}
        </div>
    )
}