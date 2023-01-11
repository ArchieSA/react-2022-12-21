import { useState } from "react"
import { Button} from "../Button/Button"
import { Restaurant } from "../Restaurant/Restaurant"
import { Tab} from "../Tabs/Tab"

export const Tabs = ({sourceArray, buttonTextProvider, tabBuildFunction}) => {

    const [activeTab, setActiveTab] = useState(0)

    const renderButtons = () => {
        return sourceArray.map((source, index)=> <Button onClick={() => handleClick(index)}>{buttonTextProvider(source)}</Button>)
    }

    const renderActiveTab  = (restaurant) => {
        return (<Tab>
            {tabBuildFunction(restaurant)}
        </Tab>)
    }

    const handleClick = (index) => {
        setActiveTab(index)
    }

    return (
        <div className = "Tabs">
            <div className="tabButtons">
                {renderButtons()}
            </div>
            {renderActiveTab(sourceArray.at(activeTab))}
        </div>
    )
}