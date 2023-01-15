import {Tab} from "../Tab/Tab";

export const Tabs = ({tabs, onTabSelect }) => {

    const tabsStyle = {
        overflow: 'hidden',
    }

    const tabStyle = {
        float: 'left',
        border: 'none',
        outline: 'none',
        cursor: 'pointer',
    }

    return (
        <div className={'tabs'} style={tabsStyle}>{
            tabs.map((tab, i) => {
                return <div className={'tab'} key={i} style={tabStyle}><Tab name={tab} clickHandler={onTabSelect} index={i}/></div>
            })
        }</div>)
}