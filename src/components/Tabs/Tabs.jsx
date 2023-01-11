import {Tab} from "../Tab/Tab";

export const Tabs = ({tabs, clickHandler}) => {

    function onClick(i) {
        clickHandler(i)
    }

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
                return <div className={'tab'} key={i} style={tabStyle}><Tab name={tab} clickHandler={onClick} index={i}/></div>
            })
        }</div>)
}