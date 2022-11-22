import React, { useState } from 'react'
// import AutoSizer from 'react-virtualized-auto-sizer'
import { FixedSizeList as List } from "react-window"

// const stringArr = ["abb", "bcc", "cdd", "dee", "eff"]
const Search = () => {

    const arr = Array.from({ length: 100 }, (_, id) => ({
        id,
        text: "",
        status: "off"
    }))

    const [allData, setAllData] = useState(arr)

    const handleChange = (e, i) => {
        console.log(typeof (e.target.value), 'line 13')
        // return
        if (e.target.value === 'false') {
            // console.log("jhdsbjfbj", allData?.filter(data => data.id === i))
            // if (allData?.filter(data => data.id === i).length) {
            console.log("first", i)
            if (allData[i]?.status) {
                console.log('line 20,', allData[i])
                allData[i].status = allData[i]?.status === "off" ? "on" : "off"
            }
            else {
                allData[i] = {
                    id: i,
                    text: "",
                    status: "on"
                }
            }
        }
        else {
            // if (allData?.filter(data => data.id === i).length) {
            console.log("line 30", allData?.findIndex(data => data.id === i))
            console.log(allData)
            if (allData[i]?.status) {
                allData[i].text = e.target.value
            } else {
                allData[i] = {
                    id: i,
                    text: e.target.value,
                    status: "off"
                }
            }
        }
    }
    console.log(allData)
    const Row = ({ index, style }) => (
        <div className={index % 2 ? "ListItemOdd" : "ListItemEven"} style={style}>
            {<div>
                <input 
                type="checkbox" onChange={(e) => { handleChange(e, index) }} value={allData[index].status === 'on' ? true : false} />
                <input type="text" onChange={(e) => { handleChange(e, index) }} value={allData[index]?.text} />
            </div>}
        </div>
    );

    return <>
        {/* ( <AutoSizer>
        {({ height, width }) => ( */}
        <List
            className="List"
            height={150}
            itemCount={arr.length}
            itemSize={30}
            width={"100%"}
            itemData={arr}
        >
            {Row}
        </List>


    </>
    //     )}
    // </AutoSizer>)
}


export default Search